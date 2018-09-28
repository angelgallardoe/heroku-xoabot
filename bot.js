// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send('Welcome to the server, ${member}');
});

// PING CHECK//
client.on("message", (message)){ // EventEmitter
	if(message.content == "!ping"){ // Check if message is "!ping"
			message.channel.send("Pinging ...") // Placeholder for pinging ... 
			.then((msg) => { // Resolve promise
				msg.edit("Ping: " + (Date.now() - msg.createdTimestamp)) // Edits message with current timestamp minus timestamp of message
			});
		}
}

// M E N S A J E S //
client.on("message", (message) => {
  if (message.content == ("ping")) {
    message.channel.send("pong!");
  }
  else if (message.content == "!ping") {
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
