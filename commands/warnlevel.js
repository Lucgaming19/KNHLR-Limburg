const discord = require("discord.js")
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

module.exports.run = async (bot, message, args) => {

	if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("This command is management only");

	if (!args[0]) return message.reply("no username found!");

	if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("No perms");

	var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(arg[0]));

	if (!warnUser) return message.reply("User not found!");

    let warnlevel = warns[warnUser.id].warns;

    message.reply(`${warnUser} has ${warnlevel} warnings.`);


}

module.exports.help = {
    name: "warns"

}