/**
 * PM2 process definition for production (VPS, root PM2 — see DEPLOYMENT.md).
 *   pm2 start ecosystem.config.cjs   |   pm2 reload synctappy-fe
 */
module.exports = {
  apps: [
    {
      name: 'synctappy-fe',
      script: '.output/server/index.mjs',
      cwd: __dirname,
      exec_mode: 'fork',
      instances: 1,
      max_memory_restart: '400M',
      env: {
        NODE_ENV: 'production',
        HOST: '127.0.0.1',
        PORT: 3080,
        NUXT_PUBLIC_SITE_URL: 'https://synctappy.biz.id',
      },
    },
  ],
}
