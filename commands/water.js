const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Een hele grote fles water graag.");

    var textchannel = message.channel;

    var message1 = ("* fles water wordt op de tafel gezet *");
    var message2 = ("*Pakt de fles en dringt hem op*");
    var message3 = ("Is er meer?");

    setTimeout(() => {
        textchannel.send(message1);
    }, 3000);
    setTimeout(() => {
        textchannel.send(message2);
    }, 3000);
    setTimeout(() => {
        textchannel.send(message3);
    }, 3000);
}

module.exports.help = {
    name: "water"

}