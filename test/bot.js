const { Client } = require('discord.js');
const client = new Client({intents: ['GUILDS', "GUILD_MESSAGES"]});

const { Client: kktClient } = require('../index');

client.on('ready', () => {
    console.log(`Ready`);
    client.kkt = new kktClient(client);
})

client.login('OTEwOTU0MDY0ODY1NTU0NDUz.YZaWFQ._8wHngPwkLGMFD_3hlrRdUnP4Gs')