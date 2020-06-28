const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    const categoryID = "688478364163506220";

    if (!message.member.roles.cache.has("688478365635838038")) return message.channel.send("U heeft niet de juiste rollen om dit te doen.");

    if (message.channel.parentID == categoryID) {

        var embedPromt = new discord.MessageEmbed()
		.setColor("GREEN")	
		.setTitle("React with in 30sec.")
		.setDescription(`Wil je deze ${message.channel.name} sluiten?`)
		.setFooter("\u00A9 Limburg")
		.setTimestamp();


	message.channel.send(embedPromt).then(async msg => {

		var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

		if (emoji === "✅") {

			message.channel.delete();

		} else if (emoji === "❌") {

			msg.delete();

			message.reply("Het sluiten is geanuleerd").then(m => m.delete({ timeout: 5000 }));

		}

	})

        var embedCreateTicket = new discord.MessageEmbed()
            .setTitle("Ticket, " + message.channel.name)
            .setDescription(`Deze ticket Is afgerond door: ${message.author}`)
            .setFooter("Ticket is gesloten. \u00A9 Limburg")
            .setTimestamp()

        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "logs");
        if (!ticketChannel) return message.reply("Kanaal bestaat niet");

        ticketChannel.send(embedCreateTicket);

    } else {

        message.channel.send("U kunt dit alleen in een ticket doen.");

    }
}
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
    name: "close"

}