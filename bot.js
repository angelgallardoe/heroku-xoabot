const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDkzOTY2MTY1Njg1NTY3NDk0.Dosukg.zXRcfBJRL1j4QBrlZ_UhoP2ICWQ);
