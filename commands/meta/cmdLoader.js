let fs = require('fs')
const chalk = require('chalk')

let path = require('path').join(__dirname, '../')
fs.readdirSync(path).forEach(file => {
    if(!fs.lstatSync(path + file).isDirectory())
        require(`../${file}`);
        console.log(chalk.yellow(`${file} has loaded`))
})