const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Een hele grote fles water graag.");
    wait(5);
    message.channel.send("*fles water wordt op de tafel gezet*");
    wait(5);
    message.channel.send("*Pakt de fles en dringt hem op*");
    wait(5);
    message.channel.send("Is er meer?");
}

module.exports.help = {
    name: "water"

}