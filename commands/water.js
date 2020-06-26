const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Een hele grote fles water graag.");
    function vertraging1() {
        message.channel.send("* fles water wordt op de tafel gezet *");
    }
    function vertraging2() {
        message.channel.send("*Pakt de fles en dringt hem op*");
    }
    function vertraging3() {
        message.channel.send("Is er meer?");
    }
    setTimeout(vertraging1, 1500);
    setTimeout(vertraging2, 1500);
    setTimeout(vertraging3, 1500);
}

module.exports.help = {
    name: "water"

}