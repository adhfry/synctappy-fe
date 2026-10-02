# Deployment & Infrastructure — Synctappy FE

Everything an agent or developer needs to deploy this project.
**No secrets live in this file or in the repo** (the GitHub repo is PUBLIC).
SSH keys stay on the owner's machine (`~/.ssh`), never commit them.

## Repository

| | |
|---|---|
| GitHub | https://github.com/adhfry/synctappy-fe (**public**) |
| Branch | `main` (production) |
| Local path (owner's PC) | `D:\Project_Web\SyncTappy` |
| Excluded from git | `*.docx` (internal blueprint), `.env*`, `node_modules`, `.output`, `.nuxt`, `.qa` |

## Server (VPS)

| | |
|---|---|
| IP | `76.13.196.43` (Ubuntu 24.04, hostname `srv1365932`) |
| SSH | alias **`produli-server`** in the owner's `~/.ssh/config` (user `ahda`, key `~/.ssh/id_ed25519_produli`), passwordless `sudo` |
| Shared server | ⚠️ Hosts many other production sites (Synvora, Labkesda, Produli, Silakes…). Never touch other vhosts/PM2 apps; always run `nginx -t` before reload. |
| Process manager | **root** PM2 (`/root/.pm2`), Node from `/root/.nvm/versions/node/v24.13.1/bin` (not on `sudo` PATH, so use the full path or `scripts/deploy.sh`) |

## ⚠️ Shared VPS safety rules (mandatory)

The VPS (`76.13.196.43`, alias `produli-server`) runs many large production systems 24/7
(Labkesda, Produli, Silakes, Synvora, Agrivita, n8n, bots, MySQL/Redis shared services…).

1. **Only touch what Synctappy created:** `/opt/synctappy/`, `/var/www/synctappy.biz.id`, `/var/www/www.synctappy.biz.id`,
   nginx vhost `synctappy.biz.id` (+ future `api`/`go` vhosts), PM2 app `synctappy-fe`, docker compose project `synctappy`,
   SSH alias `github-synctappy-api` + key `/root/.ssh/synctappy_api_deploy`.
2. **Before changing or deleting any existing file, folder, service, container, vhost, database, cron or process:**
   cross-check owner/purpose (`ls -la`, `stat`, `ss -ltnp`, `docker ps`, `pm2 ls`, nginx `server_name`) and **ask the owner first**
   if it is not Synctappy's.
3. **Never run global/destructive commands:** no `docker system/volume/image prune`, `docker compose down` outside
   `/opt/synctappy/api`, `pm2 restart|stop|delete all`, `pm2 kill`, `systemctl restart nginx|mysql|redis`,
   `rm -rf` outside Synctappy paths, shared MySQL/Redis changes, `apt upgrade`, firewall changes.
4. **nginx:** always `sudo nginx -t` before `sudo systemctl reload nginx` (reload, never restart); if the test fails, remove only the new vhost.
5. **Ports:** check `sudo ss -ltn | grep :PORT` before binding; Synctappy uses 3080 (FE) and 127.0.0.1:3090 (API stack).
6. **After every server change:** verify other sites still answer (e.g. `curl -s -o /dev/null -w "%{http_code}"` on
   synvorateknologiindonesia.web.id, produli.labkesdasumenep.id, silakes.labkesdasumenep.id).

## Synctappy FE on the server

| | |
|---|---|
| App folder | `/var/www/synctappy.biz.id` (git checkout, built with `npm run build`) |
| www folder | `/var/www/www.synctappy.biz.id` (identical checkout, kept in sync by `deploy.sh`; nginx redirects www → apex) |
| PM2 app | `synctappy-fe` → `.output/server/index.mjs` on `127.0.0.1:3080` (`ecosystem.config.cjs`) |
| nginx vhost | `/etc/nginx/sites-available/synctappy.biz.id` (symlinked in `sites-enabled`) |
| SSL | Let's Encrypt via Certbot (`--nginx`), auto-renew by the system certbot timer |
| URL | https://synctappy.biz.id (canonical). `https://www.synctappy.biz.id` → 301 to apex |

### Update / redeploy

```bash
git push origin main                                  # from the dev machine
ssh produli-server 'sudo bash /var/www/synctappy.biz.id/scripts/deploy.sh'
```

`deploy.sh` pulls both folders, runs `npm ci` + `npm run build`, reloads PM2, saves the PM2 list and health-checks `127.0.0.1:3080`.

### Useful commands (on the VPS)

```bash
N=/root/.nvm/versions/node/v24.13.1/bin
sudo $N/node $N/pm2 ls                         # list apps
sudo $N/node $N/pm2 logs synctappy-fe --lines 50
sudo nginx -t && sudo systemctl reload nginx
sudo certbot certificates | grep -A3 synctappy
```

## DNS (domain `synctappy.biz.id`)

All records are **A → 76.13.196.43** (set by the owner):

| Host | Purpose (planned) | Status |
|---|---|---|
| `synctappy.biz.id` | Landing page (this repo) | **live** |
| `www` | → 301 to apex | **live** |
| `app` | Customer SaaS dashboard | reserved |
| `api` | Laravel API | reserved |
| `admin` | Synvora admin console | reserved |
| `go` | Dynamic link engine (`go.synctappy.biz.id/{workspace}/{slug}`) | reserved |
| `docs` | Documentation | reserved |
| `help` | Help center / support | reserved |
| `status` | Status page | reserved |

When a reserved subdomain gets an app: new folder `/var/www/<host>`, new free `127.0.0.1` port, new PM2 app, new nginx vhost, `certbot --nginx -d <host>`. Then update this table.

## Ports in use on the VPS (avoid)

Public: 22, 80, 443, 2024, 3001, 3033, 3034, 3040, 3060, 3210, 4000, 9000, 9001.
Local: 3050, 3070, 3306, 4001, 5050, 5080, 5678, 6379, 8010, 8080 (and others), **3080 = synctappy-fe**.
Check before picking a port: `sudo ss -ltn | grep :PORT`.
