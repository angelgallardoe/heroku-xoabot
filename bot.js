// Import the discord.js module

const Discord = require('discord.js');
const fs = require('fs');
// Create an instance of a Discord client
const client = new Discord.Client();

const { prefix } = require('./config.json');

//
function esCuica() {
    var rand = ['Eso no lo sabemos', 'Probablemente', 'NOT A CHANCE PAL', 'La respuesta está en tu corazón', 'Pregúntale a tu vieja'];
    return rand[Math.floor(Math.random()*rand.length)];
}


/** * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord */
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
	else if (command === 'cuica') {
		message.channel.send(esCuica());
	}
		else if (command === 'cigarro') {
		message.channel.send('No tengo gil');
	}
    else if (command === 'gato') {
		message.channel.send('Las calorías');
	}
		else if (command === 'roll-info') {
		message.channel.send('Info tirado de dados\n!roll :     1d6 (1 dado de 6)\n!roll 15 : d15 (1 dado de 15)\n!roll 4d : 4d6 (4 dados de 6)\n!roll 4d30 : 4d30 (4 dados de 30)');
	}
    	else if (command === 'bnm') {
		message.channel.send({
            files: [
                "./images/bnm.JPG"
            ]
        });
	}
	else if (command === 'server') {
		message.channel.send(`Server: ${message.guild.name}\nUsuaries: ${message.guild.memberCount}`);
	}
	else if (command === 'user-info') {
		message.channel.send(`Nombre: ${message.author.username}\nID: ${message.author.id}`);
	}
	else if (command === 'info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
		else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`First argument: ${args[0]}`);
	}
	else if (command === 'kick') {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	}
	else if (command === 'avatar') {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL}`;
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



//DADOS//

client.on('message', (message) => {
  const messageWords = message.content.split(' ');
  const rollFlavor = messageWords.slice(2).join(' ');
  if (messageWords[0] === '!roll') {
    if (messageWords.length === 1) {
      // !roll
      return message.reply(
        (Math.floor(Math.random() * 6) + 1) + ' ' + rollFlavor
      );
    }

    let sides = messageWords[1]; // !roll 20
    let rolls = 1;
    if (!isNaN(messageWords[1][0] / 1) && messageWords[1].includes('d')) {
      // !roll 4d20
      rolls = messageWords[1].split('d')[0] / 1;
      sides = messageWords[1].split('d')[1];
    } else if (messageWords[1][0] == 'd') {
      // !roll d20
      sides = sides.slice(1);
    }
    sides = sides / 1; // convert to number
    if (isNaN(sides) || isNaN(rolls)) {
      return;
    }
    if (rolls > 1) {
      const rollResults = [];
      for (let i = 0; i < rolls; i++) {
        rollResults.push(Math.floor(Math.random()*sides)+1);
      }
      const sum = rollResults.reduce((a,b) => a + b);
      return message.reply(`[${rollResults.toString()}] ${rollFlavor}`);
    } else {
      return message.reply(
        (Math.floor(Math.random() * sides) + 1) + ' ' + rollFlavor
      );
    }
  }
});

//

//
// THIS  MUST  BE  THIS  WAY //
client.login(process.env.bot_token);
