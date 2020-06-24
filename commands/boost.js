const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    var args = message.content.slice(prefix.length).split(/ +/);
    if (!args[0]) return message.reply("no username found!");
    var boostUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(arg[0]));
    var embed = new discord.MessageEmbed()
        .setDescription(`**User boost: ** ${boostUser} (${boostUser.id})
            Thanks vor your boost`);

    message.channel.send(embed);

}

module.exports.help = {
    name: "nummer1"

}