// Import the discord.js module //
const Discord = require('discord.js');

// Create an instance of a Discord client //
const client = new Discord.Client();

// THIS  MUST  BE  THIS  WAY //
client.login(process.env.bot_token);

// The ready event is vital, it means that only _after_ this will your bot start reacting to information received from Discord //
client.on('ready', () => {
console.log('I am ready!');
});

bot.on("message", function(message) {
    var channel = bot.channels.find("name", "general");
    channel.sendMessage("Hello Owner Just Restarted Me!");

    var rule = new schedule.RecurrenceRule();
    rule.minute = 0;
    rule.hour = [14, 19, 20];

    var j = schedule.scheduleJob(rule, function() {
        bot.channels.get("id", channel).sendMessage("Testing");
    })

    console.log("Bot is ready.");
});


// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send("Welcome to the server, ${member}");
});

// M E N S A J E S //
client.on("message", (message)){ // EventEmitter
	if(message.content == "!ping"){ // Check if message is "!ping"
			message.channel.send("Pinging ...") // Placeholder for pinging ... 
			.then((msg) => { // Resolve promise
				msg.edit("Ping: " + (Date.now() - msg.createdTimestamp)) // Edits message with current timestamp minus timestamp of message
			});
		}
}

else if (message.content == "!ping") {
    	message.reply("Pong!");
  	} 
        
else if (message.content == "!cigarro") {
        message.reply("No tengo gil conchetumare");
     }  

