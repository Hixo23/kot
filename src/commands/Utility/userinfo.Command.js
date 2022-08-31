const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "userinfo",
    description: "Pokazuje informacje o użytkowniku",
    options: [
        {
            name: "user",
            description: "Użytkownik",
            type: 6,
            required: false
        }
    ],
    async execute(interaction) {
        const user = Nayata.users.cache.get(interaction.options.getUser('user')) || Nayata.users.cache.get(interaction.member.id);
        const member = interaction.guild.members.cache.get(interaction.options.getUser('user')) || interaction.guild.members.cache.get(interaction.member.id);

        const roles = member.roles.cache.filter(x => x.name !== "@everyone").map(x => x);

        const embed = new EmbedBuilder()
            .setTitle(`${user.tag}`)
            .setThumbnail(user.displayAvatarURL({ dynamic: true }))
            .addFields([
                {
                    name: "ID",
                    value: user.id
                },
                {
                    name: "Konto założone",
                    value: `<t:${Math.round(user.createdTimestamp / 1000)}:R>`
                }
            ]);
        
            if (member) {
            embed.addFields([
                {
                    name: "Dołączył na serwer",
                    value: `<t:${Math.round(member.joinedTimestamp / 1000)}:R>`
                },
                {
                    name: "Role",
                    value: `${roles.length ? roles.join(', ') : "Brak ról"}`
                }
            ])
        };

        return interaction.reply({ embeds: [embed] });

    }
}
