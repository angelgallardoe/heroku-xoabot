/**
 * A bot that welcomes new guild members when they join
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();


/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(client.username + ' - (' + client.id + ')');
});

client.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'pinga':
                bot.sendMessage({
                    to: channelID,
                    message: 'Ponga!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});

// M E N S A J E S //
client.on("message", (message) {
  if (message.content == ("!ping1")) {
    message.channel.send("pong!");
  }
  else if (message.content == "!ping2") {
    	message.reply("Pong!");
  	} 
    else if (message.content == "!cigarro") {
        message.reply("No tengo gil conchetumare");
     }  
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NDkzOTY2MTY1Njg1NTY3NDk0.Dosukg.zXRcfBJRL1j4QBrlZ_UhoP2ICWQ');

// THIS  MUST  BE  THIS  WAY //
client.login(process.env.bot_token);
