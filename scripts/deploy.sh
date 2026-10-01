#!/usr/bin/env bash
# Synctappy FE — production update on the VPS (see DEPLOYMENT.md).
# Run ON THE VPS:  sudo bash /var/www/synctappy.biz.id/scripts/deploy.sh
set -euo pipefail

APP_DIR=/var/www/synctappy.biz.id
WWW_DIR=/var/www/www.synctappy.biz.id
NODE_BIN=/root/.nvm/versions/node/v24.13.1/bin   # same Node/PM2 as the other root PM2 apps
export PATH="$NODE_BIN:$PATH"
export NUXT_PUBLIC_SITE_URL=https://synctappy.biz.id

echo "▶ Pull latest main"
git -C "$APP_DIR" pull --ff-only origin main
# www.synctappy.biz.id is a 301 redirect to the apex in nginx; its folder is
# kept as an identical checkout so both hosts stay in sync.
git -C "$WWW_DIR" pull --ff-only origin main

echo "▶ Install + build"
cd "$APP_DIR"
npm ci --no-audit --no-fund
npm run build

echo "▶ (Re)start PM2 app"
if pm2 describe synctappy-fe >/dev/null 2>&1; then
  pm2 reload ecosystem.config.cjs --update-env
else
  pm2 start ecosystem.config.cjs
fi
pm2 save

echo "▶ Health check"
sleep 2
curl -fsS -o /dev/null -w "local http %{http_code}\n" http://127.0.0.1:3080/
echo "✔ Deployed $(git -C "$APP_DIR" rev-parse --short HEAD)"
