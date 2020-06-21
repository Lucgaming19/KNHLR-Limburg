const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("This command is management only");

    if (!args[0]) return message.reply("Give a number");

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] <= 0) {
                message.reply("Idiota I can't delete 0 messages.").then(msg => msg.delete({ timeout: 3000 }));
            } else if (args[0] == 1) {
                message.reply("Idiota I can't delete 1 messages.").then(msg => msg.delete({ timeout: 3000 }));
            } else {
                message.reply(`I have ${args[0]} deleted`).then(msg => msg.delete({ timeout: 3000 }));

            }

        })

    } else {
        return message.reply("Give a Number.");
    }
}

module.exports.help = {
    name: "clear"

}