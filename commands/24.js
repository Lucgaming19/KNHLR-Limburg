const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    const categoryID = "688478364163506220";
    const settedparent = message.channel.id
    const channelName = message.channel.name
    if (message.channel.parentID == categoryID) {
        message.channel.send("**__binnen de 24 uur niet reageren word dit ticket gesloten!__**");
    }
}

module.exports.help = {
    name: "24"

}