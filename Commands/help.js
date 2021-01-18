const fs = require('fs');
const Discord = require('discord.js');
const { Menu } = require('discord.js-menu');
const { prefixHelp, version, support} = require('../config.json');


const client = new Discord.Client();
client.commands = new Discord.Collection();

module.exports = {
	name: 'help',
	description: 'bot help menu',
	execute(message, args) {

message.delete()

let helpMenu = new Menu(message.channel, message.author.id, [
            // Each object in this array is a unique page.
            {
                // A page object consists of a name, used as a destination by reactions...
                name: 'page1',
                // A MessageEmbed to actually send in chat, and...
                content: new Discord.MessageEmbed({
									title: "Help Menu",
									fields: [
									    {
									      name: "Prefix",
									      value:	`${prefixHelp}`
									    },
									    {
									      name: "Version",
									      value: `${version}`
									    },
									    {
									      name: "Support",
									      value: `${support}`
									    }
                ]}),
                // A set of reactions with destination names attached.
                // Note there's also special destination names (read below)
                reactions: {
                    '⏹': 'delete',
                    '▶': 'next'
                }
            },
            {
                name: 'page2',
								content: new Discord.MessageEmbed({
									title: "Help Menu: Base Commands",
									fields: [
									    {
									      name: "Help",
									      value: "Shows this Dialogue!"
									    },
									    {
									      name: "Ping",
									      value: "Check if the bot is online"
									    }
                ]}),
                reactions: {
                    '◀': 'previous',
										'⏹': 'delete',
                }
            }
        // Run Menu.start() when you're ready to send the menu in chat.
        // Once sent, the menu will automatically handle everything else.
        helpMenu.start();

			},
};
