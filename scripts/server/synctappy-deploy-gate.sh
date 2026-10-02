#!/usr/bin/env bash
# Synctappy CI deploy gate. Installed on the VPS as /usr/local/bin/synctappy-deploy
# and bound to the GitHub Actions key via a forced command in authorized_keys:
#   command="/usr/local/bin/synctappy-deploy",restrict ssh-ed25519 AAAA... synctappy-ci
# The CI key can therefore ONLY run the two Synctappy deploy scripts, never a shell.
#   ssh <host> fe            -> deploy the landing page (main)
#   ssh <host> api <git-ref> -> deploy the API at that ref (default main)
set -euo pipefail

read -r target ref extra <<<"${SSH_ORIGINAL_COMMAND:-}"
[ -z "${extra:-}" ] || { echo "too many arguments" >&2; exit 2; }

case "${target:-}" in
  fe)
    [ -z "${ref:-}" ] || { echo "fe takes no ref (always deploys main)" >&2; exit 2; }
    cmd=(/var/www/synctappy.biz.id/scripts/deploy.sh)
    ;;
  api)
    ref="${ref:-main}"
    [[ "$ref" =~ ^[A-Za-z0-9][A-Za-z0-9._/-]{0,99}$ ]] || { echo "invalid ref" >&2; exit 2; }
    cmd=(/opt/synctappy/api/scripts/deploy.sh "$ref")
    ;;
  *)
    echo "usage: fe | api [git-ref]" >&2
    exit 2
    ;;
esac

# One deploy at a time per target.
exec 9>"/tmp/synctappy-deploy-$target.lock"
flock -w 900 9 || { echo "another deploy is still running" >&2; exit 3; }

exec sudo -n /usr/bin/bash "${cmd[@]}"
