const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    const categoryID = "688478364163506220";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var ticketBestaat = false;

    message.guild.channels.cache.array.forEach(channel => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
            ticketBestaat = true;

            message.reply("Je hebt al een ticket aangemaakt graag daar in veder gaan.");

            return;
        }

    });

    if (ticketBestaat) return;

    var embed = new discord.MessageEmbed()
        .setTitle("Geachte " + message.author.username + "Uw ticket wordt aangemaakt.")
        .setFooter("\u00A9 Limburg")
        .setTimestamp();

    message.channel.send(embed);

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: true,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true
                    });

                    var embedParent = new discord.MessageEmbed()
                        .setTitle(`Hallo ${message.author.username},`)
                        .setDescription("Het Support team help u zo snel mogelijk veder.")
                        .setFooter("\u00A9 Limburg")
                        .setTimestamp();

                    settedParent.channel.send("<@688478365635838038>");
                    message.delete();
                    settedParent.channel.send(embedParent);

                }
            )
        }
    )
}

module.exports.help = {
    name: "ticket"
}