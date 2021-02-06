const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Is de bot offline? \nALWEER!");
    return message.channel.send("Laat me bouwen met Kjetil");


    message.channel.send().then(async msg => {
        msg.delete();
    });
}

module.exports.help = {
    name: "justin"

}