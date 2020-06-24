const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Luc is de beheerder van deze discord bot. Als er wat mis mee is ga dan naar hem toe.");

}

module.exports.help = {
    name: "luc"

}