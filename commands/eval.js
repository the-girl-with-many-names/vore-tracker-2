const auth = require('../auth')
const now = require('performance-now')
const util = require('util')

client.registerCommand('eval', (msg, args) => {
    let before = now()

    try {
        let evald = eval(args.join(' '))
        evald = util.inspect(evald)

        if(evald && evald.length > 1800) evald = evald.substring(0, 1800)
        let after = now()

        let retStr = `\`\`\`javascript\n` +
        `${evald}\n\n` +
        `Time: ${(after - before).toFixed(3)} ms\`\`\``

        return retStr
    } catch (err) {
        let after = now()

        let retStr = `\`\`\`javascript\n` +
        `${err}\n\n` +
        `Time: ${(after - before).toFixed(3)} ms\`\`\``

        return retStr
    }
}, {
    description: 'Eval things',
    fullDescription: 'The bot will attempt to evaluate a given expression - limited to bot creator id',
    usage: '<expression>',
    requirements: {
        userIDs: [auth.woomy, auth.keilar]
    }
})
