const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if (!hasrole('725315425243627561') || !hasrole('725315328694812693')) return message.reply("Sorry, U bent helaas niet welkom hier.\n\nMet vriendelijke groet\nbewakers");

    return message.channel.send("Prive zaken, dus niet de jouwe");

}

module.exports.help = {
    name: "nummer1"

}
