const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Ik houd jullie allemaal in de gaten :eyes:");

}

module.exports.help = {
    name: "donald"

}