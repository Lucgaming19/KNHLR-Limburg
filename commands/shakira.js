const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    return message.channel.send("ja gwn \n een tekst");
}

module.exports.help = {
    name: "shakira"
}