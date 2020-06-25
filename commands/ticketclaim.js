const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    const categoryID = "688478364163506220";

    if (!message.member.roles.cache.has("688478365635838038")) return message.channel.send("U heeft niet de juiste rollen om dit te doen.");

    if (message.channel.parentID == categoryID) {
               var embedCaimTicket = new discord.MessageEmbed()
            .setTitle("Ticket, " + message.channel.name)
            .setDescription(`Deze ticket Is Geclaimed door: ${message.author}`)
            .setFooter("\u00A9 Limburg")
            .setTimestamp();

        message.channel.send(embedCaimTicket);
        
    } else {

        message.channel.send("U kunt dit alleen in een ticket doen.");

    }
}

module.exports.help = {
    name: "claim"
}