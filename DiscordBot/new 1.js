// Import the discord.js module
const Discord = require('discord.js')

// Create an instance of Discord that we will use to control the bot
const bot = new Discord.Client();

// Token for your bot, located in the Discord application console - https://discordapp.com/developers/applications/me/
const token = 'NTA2ODczNTA3NjI0NTE3Njcz.DrohhQ.nF2c9-HloxFaYrMQRLzWJZ7hDiA'

// Gets called when our bot is successfully logged in and connected
bot.on('ready', () => {
    console.log('Hello World!');
});

// Event to listen to messages sent to the server where the bot is located
bot.on('message', message => {
    // So the bot doesn't reply to iteself
    if (message.author.bot) return;

    // Check if the message starts with the `!` trigger
    if (message.content.indexOf('!') === 0) {
		// Get the user's message excluding the `!`
        var text = message.content.substring(1);
		var asdf = text.split(' ');
		
		if (asdf[0] === 'rev'){
			// Reverse the message
			var reversed = '';
			var i = text.length;
		
			while (i > 0) {
				reversed += text.substring(i - 1, i);
				i--;
			}
			
			// Reply to the user's message
			message.reply(reversed);
		}
		break;        
    }
});

bot.login(token);