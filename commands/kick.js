const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


//	var args = message.content.slice(prefix.length).split(/ +/);

	if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("This command is management only");

	if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("No perms");

	if (!args[0]) return message.reply("no username found!");

	if (!args[1]) return message.reply("no reason found!");

	var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(arg[0]));

	var reason = args.slice(2).join(" ");

	if (!kickUser) return message.reply("User not found!");

	var embedPromt = new discord.MessageEmbed()
		.setColor("GREEN")
		.setTitle("React with in 30sec.")
		.setDescription(`Do you want ${kickUser} kicken?`);

	var embed = new discord.MessageEmbed()
		.setColor("#ff0000")
		.setFooter(message.member.displayName)
		.setTimestamp()
		.setDescription(`**Gekicked: ** ${kickUser} (${kickUser.id})
			**Gekicked by: ** ${message.author}
			**Reason: ** ${reason}`);

	message.channel.send(embedPromt).then(async msg => {

		var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

		if (emoji === "✅") {

			msg.delete();

			kickUser.send(embed);

			kickUser.kick(reason).catch(err => {
				if (err) return message.reply("There is an error occured");
			});

			message.channel.send(embed);
			kickUser.send(embed);
			
			var kanaal = message.member.guild.channels.cache.get("724271631912140830");

			if (!kanaal) return;

			kanaal.send(embed);

		} else if (emoji === "❌") {

			msg.delete();

			message.reply("The kick is canceld").then(m => m.delete(5000));

		}

	})
}

async function promptMessage(message, author, time, reactions) {
	time *= 1000;

	for (const reaction of reactions) {
		await message.react(reaction);
	}

	const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

	return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
}


module.exports.help = {
    name: "kick"

}