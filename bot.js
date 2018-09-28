/** * A bot that welcomes new guild members when they join */
// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

const { prefix } = require('./config.json');

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

// mensajes //
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	}
	else if (command === 'beep') {
		message.channel.send('Boop.');
	}
	else if (command === 'server') {
		message.channel.send('ID: ${message.guild.name}\nUsers: ${message.guild.memberCount}');
	}
	else if (command === 'user-info') {
		message.channel.send('User: ${message.author.username}\nID: ${message.author.id}');
	}
	else if (command === 'info') {
		if (!args.length) {
			return message.channel.send('You didn't provide any arguments, ${message.author}!');
		}
		else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send('First argument: ${args[0]}');
	}
	else if (command === 'kick') {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send('You wanted to kick: ${taggedUser.username}');
	}
	else if (command === 'avatar') {
		if (!message.mentions.users.size) {
			return message.channel.send('Your avatar: ${message.author.displayAvatarURL}');
		}

		const avatarList = message.mentions.users.map(user => {
			return '${user.username}'s avatar: ${user.displayAvatarURL}';
		});

		message.channel.send(avatarList);
	}
	else if (command === 'prune') {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		}
		else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to prune messages in this channel!');
		});
	}
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NDkzOTY2MTY1Njg1NTY3NDk0.Dosukg.zXRcfBJRL1j4QBrlZ_UhoP2ICWQ');

// THIS  MUST  BE  THIS  WAY //
client.login(process.env.bot_token);
