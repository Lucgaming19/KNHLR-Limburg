const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    const categoryID = "688478364163506220";

	if (!message.member.roles.cache.has("688478365635838038")) return message.channel.send("U heeft niet de juiste rollen om dit te doen.");
	if (!args[0]) return message.reply("no username found!");
	var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(arg[0]));

	if (message.channel.parentID == categoryID) {
		channel.updateOverwrite(message.guild.members.cache.find(x => x.name === `${kickUser}`), {
			SEND_MESSAGES: false,
			VIEW_CHANNEL: false
		});

	}

}

module.exports.help = {
	name: "remove"

}