const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


	var botEmbed = new discord.MessageEmbed()
		.setDescription("discord bot info")
		.setColor("#FF1493")
		.addField("Bot name", bot.user.username)
		.setThumbnail("https://cdn.discordapp.com/avatars/717417310318624849/24ba2fe79f5b0dea81070b947415a6cc.png?size=256")
		.addField("made on", bot.user.createdAt)
		.addFields(
			{ name: "prefix: .", value: "prefix: ." },
			{ name: "excisting commands:", value: "Bestaande commands:" },
			{ name: "server information", value: "serverinfo" },
			{ name: "information", value: "info" },
			{ name: "who is who", value: "wie" },
			{ name: "jose", value: "jose" },
			{ name: "ruth", value: "ruth" },
			{ name: "mark", value: "mark" },
			{ name: "luc", value: "luc" },
			{ name: "pim", value: "pim" },
			{ name: "jimmy", value: "jimmy" })
		.setFooter("\u00A9 DWF Discord With Friends", "https://cdn.discordapp.com/avatars/717417310318624849/24ba2fe79f5b0dea81070b947415a6cc.png?size=256")
		.setTimestamp();

	return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"

}