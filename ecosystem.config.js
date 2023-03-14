module.exports = {
  apps: [
    {
      name: 'Dotinay',
      exec_mode: 'cluster',
      instances: '2', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.mjs',
      args: 'start'
    }
  ]
}