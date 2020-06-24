const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if (!hasrole("Jose") || !hasrole("Skittle")) return message.reply("Sorry, U bent helaas niet welkom hier.\n\nMet vriendelijke groet\nbewakers");

    return message.channel.send("Prive zaken, dus niet de jouwe");

}

module.exports.help = {
    name: "nummer1"

}
