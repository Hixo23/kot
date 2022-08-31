const { readdirSync } = require('fs');

module.exports = (client) => {
    readdirSync('./src/commands').filter(dir => !dir.endsWith('.js')).forEach(dir => {
        readdirSync(`./src/commands/${dir}`).filter(file => file.endsWith('.Command.js')).forEach(file => {
            const command = require(`../commands/${dir}/${file}`);
            client.data.push(command);
            client.commands.set(command.name, command)
            console.log(`${command.name}`)
        })
    })
}