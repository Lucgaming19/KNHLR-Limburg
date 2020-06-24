const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if (!message.member.roles.cache.has('Jose' ) return message.channel.send("U bent hier helaas niet welkom :/ volgende keer beter.");
    if (!message.member.roles.cache.has('Skittle') return message.channel.send("U bent hier helaas niet welkom :/ volgende keer beter.");

    return message.channel.send("privé zaken, dus niet de jouwe");

}

module.exports.help = {
    name: "nr1"

}