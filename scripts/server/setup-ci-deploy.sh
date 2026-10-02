#!/usr/bin/env bash
# One-time VPS setup for GitHub Actions deploys (Synctappy only, idempotent).
#   sudo bash setup-ci-deploy.sh "<ci public key line>"
# Installs the deploy gate and authorizes the CI key for user ahda with a forced
# command, so the key cannot open a shell, forward ports or run anything else.
set -euo pipefail

PUBKEY="${1:?usage: setup-ci-deploy.sh \"ssh-ed25519 AAAA... synctappy-ci\"}"
DEPLOY_USER=ahda
HERE="$(cd "$(dirname "$0")" && pwd)"
AUTH="/home/$DEPLOY_USER/.ssh/authorized_keys"

[[ "$PUBKEY" =~ ^ssh-ed25519\ [A-Za-z0-9+/=]+\ synctappy-ci$ ]] || { echo "unexpected key format" >&2; exit 2; }

install -o root -g root -m 755 "$HERE/synctappy-deploy-gate.sh" /usr/local/bin/synctappy-deploy

LINE="command=\"/usr/local/bin/synctappy-deploy\",restrict $PUBKEY"
if grep -qF "$PUBKEY" "$AUTH" 2>/dev/null; then
  echo "CI key already authorized"
else
  cp -p "$AUTH" "$AUTH.bak-synctappy-$(date +%Y%m%d%H%M%S)"
  printf '%s\n' "$LINE" >> "$AUTH"
  echo "CI key authorized (forced command)"
fi
