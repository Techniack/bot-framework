const Discord = require('discord.js');

const { version, acknowledgments,support } = require('../config.json');
module.exports = {
	name: 'about',
	description: 'Bot Info',
	execute(message, args) {
		const about = new Discord.MessageEmbed()
			.setColor('#FF82A9')
			.setTitle('About')
			.setAuthor('Techniack', 'https://pbs.twimg.com/profile_images/1283236991652569096/OF4OtRJo_400x400.jpg')
			.addFields(
				{ name: 'Version', value: `${version}`},
				{ name: 'Acknowledgments', value: `${acknowledgments}`, inline: false },
				{ name: 'Support', value:` ${support}`, inline: false },
			)
			.setTimestamp()

		message.channel.send(about);

    //message.channel.send(`Version: ${version}\n ${acknowledgments}\n ${support}`);
	},
};
