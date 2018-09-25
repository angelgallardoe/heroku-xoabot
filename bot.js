const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => 
            {
    if (message.content === '!ping') 
    {  	message.reply('pong'); 	}
            }
else
    if (message.content === '!cigarro') 
    {  	message.reply('No tengo gil conchetumare'); 	}
            }
         );

// THIS  MUST  BE  THIS  WAY
client.login(process.env.bot_token);


client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  } else

  if (message.content.startsWith("foo")) {
    message.channel.send("bar!");
  }
});
