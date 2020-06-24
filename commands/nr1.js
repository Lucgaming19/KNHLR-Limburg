const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if (message.member.roles.cache.has("Jose") || message.member.roles.cache.has("Skittle")) return sendMessage("Sorry, U bent helaas niet welkom hier.\n\nMet vriendelijke groet\nbewakers");

    return message.channel.send("Prive zaken, dus niet de jouwe");

}

module.exports.help = {
    name: "nummer1"

}
