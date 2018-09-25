const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.reply('Pong!');
  	} else
        
     if (message.content === '!cigarro') {
        message.reply('No tengo gil conchetumare');
     }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.bot_token);
