const { InteractionType } = require('discord.js');
module.exports = async (interaction) => {

    const command = interaction.client.commands.get(interaction.commandName);
    console.log(command)
    if (command) {
        try {
            await command.execute(interaction)
        } catch (e) {
            console.error(e);
        }
    }
}