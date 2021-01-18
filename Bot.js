// require the needed modules
const fs = require('fs');
const Discord = require('discord.js');
const { Menu } = require('discord.js-menu');
const { prefix, version, acknowledgments, support} = require('./config.json');
const { token, testToken} = require('./tokens.json');


const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./Commands/${file}`);

	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Bot Ready!');
	console.log(`Logged in as ${client.user.tag}`);
});


client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === `ping`) {
    client.commands.get('ping').execute(message, args);
}else if (command === `about`) {
  client.commands.get('about').execute(message, args);
}});
// login to Discord with your app's token
client.login(token);
