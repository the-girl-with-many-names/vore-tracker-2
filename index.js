// we declare the variables required to run the client
const Eris = require('eris')
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
    console.log(chalk.bgGreen(`Tracking vore usage on ${client.guilds.size} servers`))
})

// start process
client.connect();