const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    const categoryID = "688478364163506220";

    if (!message.member.hasRole("Support")) return message.reply("U heeft niet de bevoegdheid om de ticket te sluiten.");

    if (message.channel.parentID == categoryID) {
        message.channel.delete();

        var embedCreateTicket = new discord.MessageEmbed()
            .setTitle("Ticket," + message.channel.name)
            .setDescription("Deze ticket Is afgerond door:" + message.author.name + ".")
            .setFooter("Ticket is gesloten.");

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