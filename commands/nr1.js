const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if (!message.member.roles.cache.has('725315425243627561') || !message.member.roles.cache.has('725315328694812693')) return message.reply("Sorry, U bent helaas niet welkom hier.\n\nMet vriendelijke groet\nbewakers");

    return message.channel.send("Prive zaken, dus niet de jouwe");

}

module.exports.help = {
    name: "nummer1"

}
