const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    return message.channel.send('> "welkom iedereen bij deze training mijn naam is Levi jullie Host voor vandaag.Waar zijn jullie ?"');

}

module.exports.help = {
    name: "levi"

}