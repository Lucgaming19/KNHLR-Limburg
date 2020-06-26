const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Een hele grote fles water graag");
    message.channel.send("*fles water wordt op de tafel gezet*");
    message.channel.send("*Pakt de fles en dringt hem op*");
    message.channel.send("Is er meer?");
}

module.exports.help = {
    name: "water"

}