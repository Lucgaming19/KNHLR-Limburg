const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if (!message.member.roles.hasRole("Jose") || hasRole("Skittle")) return sendMessage("U bent niet welkom hier");

    return message.channel.send("Prive zaken, dus niet de jouwe");

}

module.exports.help = {
    name: "nummer1"

}
