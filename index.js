// we declare the variables required to run the client
const Eris = require('eris')
const pm2 = require('pm2')
const auth = require('./auth.json')
const config = require('./config.json')
const chalk = require('chalk')


// start the eris commandclient
client = new Eris.CommandClient(auth.token, {}, {
    description: 'tracks vore and stuff',
    prefix: 'v!',
    ignoreBots: true,
    owner: [auth.woomy, auth.keilar]
})

require('./commands/meta/cmdLoader')

// when the bot is ready, log this
client.on('ready', () => {
    console.log(`Tracking vore usage on ${client.guilds.size} servers`)
})

// work your pm2 magic baby oh yeah
pm2.connect(function(err) {
    if (err) {
        console.log(chalk.red(err))
        process.exit(2)
    }

    pm2.start({
        script: 'index.js'
    }, function(err, apps) {
        pm2.disconnect();
        if (err) throw err;
    })
})

// start process
client.connect();