const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


	// var args = message.content.slice(prefix.length).split(/ +/);

	if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("This command is management only");

	if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("No perms");

	if (!args[0]) return message.reply("no username found!");

	if (!args[1]) return message.reply("no reason found!");

	var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(arg[0]));

	var reason = args.slice(2).join(" ");

	if (!kickUser) return message.reply("User not found!");

	var embedPromt = new discord.MessageEmbed()
		.setColor("GREEN")	
		.setTitle("React with in 30sec.")
		.setDescription(`Do you want ${kickUser} bannen??`);

	var embed = new discord.MessageEmbed()
		.setColor("#ff0000")
		.setFooter(message.member.displayName)
		.setTimestamp()
		.setDescription(`**Geband: ** ${kickUser} (${kickUser.id})
			**Geband by: ** ${message.author}
			**Reason: ** ${reason}`);

	message.channel.send(embedPromt).then(async msg => {

		var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

		if (emoji === "✅") {

			msg.delete();

			kickUser.ban(reason).catch(err => {
				if (err) return message.reply("There is an error occured");
			});
			var channel = message.member.guild.channels.cache.get("724271631912140830");

			if (!channel) return;

			channel.send(embed);
			kickUser.send(embed);
		} else if (emoji === "❌") {

			msg.delete();

			message.reply("The ban is canceld").then(m => m.delete(5000));

		}

	})}

async function promptMessage(message, author, time, reactions) {
	// We gaan eerst de tijd * 1000 doen zodat we seconden uitkomen.
	time *= 1000;

	// We gaan ieder meegegeven reactie onder de reactie plaatsen.
	for (const reaction of reactions) {
		await message.react(reaction);
	}

	// Als de emoji de juiste emoji is die men heeft opgegeven en als ook de auteur die dit heeft aangemaakt er op klikt
	// dan kunnen we een bericht terug sturen.
	const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

	// We kijken als de reactie juist is, dus met die filter en ook het aantal keren en binnen de tijd.
	// Dan kunnen we bericht terug sturen met dat icoontje dat is aangeduid.
	return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
}


module.exports.help = {
    name: "ban"

}