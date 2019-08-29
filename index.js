// we declare the variables required to run the client
const Eris = require('eris')
const auth = require('./auth.json')
const config = require('./config.json')
const chalk = require('chalk')
const express = require('express')
const expressApp = express()
const db = require('./db/db')


// start the eris commandclient
client = new Eris.CommandClient(auth.token, {}, {
    description: 'tracks vore and stuff',
    prefix: 'v!',
    ignoreBots: true,
    cooldown: 10000,
    owner: [auth.woomy, auth.keilar]
})

require('./commands/meta/cmdLoader')

// get all todos
expressApp.get('/api/v1/todos', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'vore retrieved successfully',
    vore: db
  })
})
const PORT = 5000;

expressApp.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

// when the bot is ready, log this
client.on('ready', () => {
    console.log(chalk.bgGreen(`Tracking vore usage on ${client.guilds.size} servers`))
})

// start process
client.connect()