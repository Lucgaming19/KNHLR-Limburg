const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if (!message.member.roles.cache.has('Jose')) return message.channel.send("Sorry, U bent helaas niet welkom hier.\n\n\n Met vriendelijke groet,\n bewakers");
    if (!message.member.roles.cache.has('Skittle')) return message.channel.send("Sorry, U bent helaas niet welkom hier.\n\n\n Met vriendelijke groet,\n bewakers");

    return message.channel.send("JaJa je spreekt hier tegen koning carnaval, en als je nu niet stopt ruk ik je kop eraf! \n\n de server die denkt: **WTH/WTF**");

}

module.exports.help = {
    name: "nummer1"

}