const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    const categoryID = "688478364163506220";

    if (!message.member.roles.cache.has("688478365635838038")) return message.channel.send("U heeft niet de juiste rollen om dit te doen.");

    if (message.channel.parentID == categoryID) {
        message.channel.delete(10000);

        var embedCreateTicket = new discord.MessageEmbed()
            .setTitle("Ticket, " + message.channel.name)
            .setDescription(`Deze ticket Is afgerond door: ${message.author}`)
            .setFooter("Ticket is gesloten. \u00A9 Limburg")
            .setTimestamp();

        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "logs");
        if (!ticketChannel) return message.reply("Kanaal bestaat niet");

        ticketChannel.send(embedCreateTicket);

    } else {

        message.channel.send("U kunt dit alleen in een ticket doen.");

    }
}

module.exports.help = {
    name: "close"

}