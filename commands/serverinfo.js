const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


	var botEmbed = new discord.MessageEmbed()
		.setDescription("server info")
		.setColor("#FF1493")
		.setThumbnail("https://cdn.discordapp.com/avatars/717417310318624849/24ba2fe79f5b0dea81070b947415a6cc.png?size=256")
		.addField("made on", bot.user.createdAt)
		.addFields(
			{ name: "bot name", value: bot.user.username },
			{ name: "server joined at:", value: message.member.joinedAt },
			{ name: "Total members", value: message.guild.memberCount }
		)
		.setFooter("\u00A9 DWF Discord With Friends", "https://cdn.discordapp.com/avatars/717417310318624849/24ba2fe79f5b0dea81070b947415a6cc.png?size=256");

	return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "serverinfo"

}