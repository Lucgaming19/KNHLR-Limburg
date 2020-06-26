const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Een hele grote fles water graag. \n\n *fles water wordt op de tafel gezet* \n\n *Pakt de fles en dringt hem op* \n\n *Roept ober.* \n Is er meer?");
}

module.exports.help = {
    name: "water"

}