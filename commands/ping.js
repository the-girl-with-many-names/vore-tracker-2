client.registerCommand('ping', (msg) => {
    client.createMessage(msg.channel.id, 'Pinging...').
    then(newMsg => {
        client.editMessage(newMsg.channel.id, newMsg.id, `Pinged! \`${newMsg.timestamp - msg.timestamp} ms\``)
    })
}, {
    description: 'pings the bot to check response time',
})
