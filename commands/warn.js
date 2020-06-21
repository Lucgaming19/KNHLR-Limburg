const discord = require("discord.js")
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

module.exports.run = async (bot, message, args) => {

	if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("This command is management only");

	if (!args[0]) return message.reply("no username found!");

	if (!args[1]) return message.reply("no reason found!");

	if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("No perms");

	var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(arg[0]));

	var reason = args.slice(1).join(" ");

	if (!warnUser) return message.reply("User not found!");

	if (warnUser.hasPermission("KICK_MEMBERS")) return message.reply("sorry you can't warn this person. This person is a higher or equal to you.");

	if (!warns[warnUser.id]) warns[warnUser.id] = {
		warns: 0
	};

	warns[warnUser.id].warns++;

	fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {
		if (err) console.log(err);
	});

	var embed = new discord.MessageEmbed()
		.setColor("#ff0000")
		.setFooter(message.member.displayName, message.author.displayAvatarURL)
		.setTimestamp()
		.setDescription(`**Gewarnd:** ${warnUser} (${warnUser.id})
        **Warning by:** ${message.author}
        **Reason: ** ${reason}`)
		.addField("Warn count:", warns[warnUser.id].warns);

	var channel = message.member.guild.channels.cache.get("718356906342875156");

	if (!channel) return;

	channel.send(embed);
	warnUser.send(embed);

	if (warns[warnUser.id].warns == 5) {

		var embed = new discord.MessageEmbed()
			.setColor("#ff0000")
			.setFooter(message.member.displayName, message.author.displayAvatarURL)
			.setTimestamp()
			.setDescription(`**WATCH OUT! Gewarnd:** ${warnUser} (${warnUser.id})
        **Warning by:** ${message.author}
        **Reason: ** ${reason}`)
			.addField("Warn count:", warns[warnUser.id].warns)
			.addField("Message:", "You have to get 1 more warn en you can get a kick");

		message.channel.send(embed);

	}

}

module.exports.help = {
	name: "warn"

}