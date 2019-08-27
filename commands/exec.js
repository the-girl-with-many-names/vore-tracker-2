const now = require('performance-now')
const auth = require('../auth')
const { exec } = require('child_process')

client.registerCommand('exec', (msg, args) => {
    let before = now()

    exec(args.join(' '), (e, stdout, stderr) => {
        try {
            let after = now()    

            let retStr = `\`\`\`${stdout}\n\n` +
            `executed in ${(after - before).toFixed(3)} ms\`\`\``

            client.createMessage(msg.channel.id, retStr)
        } catch (e) {
            let retStr = `\`${stderr}\``
            
            client.createMessage(msg.channel.id, `${retStr}`)
        } 
        }
    )
}, {
    description: 'Execute things',
    usage: '<expression>',
    requirements: {
        userIDs: [auth.woomy, auth.keilar]
    }
})