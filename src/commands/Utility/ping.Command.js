module.exports = {
    name: "ping",
    description: "Pokazuje opóznienie bota",
     async execute(interaction) {
        return interaction.reply({ content: `${Nayata.ws.ping}`})
    }
}