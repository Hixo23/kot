const { Client, Partials, GatewayIntentBits, Collection } = require('discord.js');
const { readdirSync } = require('fs');


class Bot extends Client {
    constructor(Options) {
        super(Options);

        this.data = [];
        this.commands = new Collection();

        this.config = require('./data/config.json');

        readdirSync('./src/handlers').forEach(handler => {
            require(`./handlers/${handler}`)(this);
        })

        this.login(this.config.token);
    }
}

global.Nayata = new Bot({
    intents: Object.values(GatewayIntentBits),
    partials: Object.values(Partials),
    allowedMentions: { repliedUser: false }
})