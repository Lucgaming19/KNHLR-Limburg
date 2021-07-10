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
			{ name: "help", value: "geeft alle commando's weer." },
			{ name: "information", value: "info" })
		.setFooter("\u00A9 Limburg", "https://cdn.discordapp.com/avatars/724261854557241415/f211d1c1934997dbda88bcf90c11a742.png?size=128")
		.setTimestamp();

	return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"

}