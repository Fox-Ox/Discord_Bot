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
		var v_msg = text.split(' ');
				
		//Erkennt den Befehl nach !
		var v_befehl = v_msg[0]
		
		message.reply(v_befehl);
		
		var v_cont = '';
		var i = 1;
		
		//Fügt den Content der Nachricht zusammen
		while (i < v_msg.length){
			v_cont += v_msg[i] + ' '; 
			i++;
		}
		
		//Start der Befehlserkennung
		//1. Help Function
		//-------------------------------------
		if (v_befehl === 'help') {
			message.reply('Gültige Befehle sind:\n	<!rev> - Gibt den nachfolgenden Text rückwärst wieder.');
			}
		else {
			//2. Reverse the message
			if (v_befehl === 'rev') {
				var reversed = '';
				var j = v_cont.length;

				while (j > 0) {
					reversed += v_cont.substring(j - 1, j);
					j--;
				}

				// Reply to the user's message
				message.reply(reversed);
				}
			else {
				message.reply('Keinen gültigen Befehl erkannt.\n\nGeben sie <!help> ein.');
			}
		}
	}
});

bot.login(token);