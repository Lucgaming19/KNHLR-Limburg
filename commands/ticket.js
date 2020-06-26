const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    const categoryID = "688478364163506220";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;
    var tagrole = "688478365635838038";

    var ticketBestaat = false   

    message.guild.channels.cache.forEach(channel => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
            ticketBestaat = true;

            message.reply("Je hebt al een ticket aangemaakt graag daar in veder gaan.");

            return;
        }

    });

    if (ticketBestaat) return;

    if (!args[0]) return message.reply("Gelieve een reden op te geven!");
    var reason = args.slice(0).join(" ");

    var embed = new discord.MessageEmbed()
        .setTitle("Geachte " + message.author.username + " Uw ticket wordt aangemaakt.")
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

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === 'Support'), {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    var embedParent = new discord.MessageEmbed()
                        .setColor("#3498DB")
                        .setTitle(`Hallo ${message.author.username},`)
                        .setDescription(`Het Support team help u zo snel mogelijk veder. Reden: ${reason}`)
                        .setFooter("\u00A9 Limburg")
                        .setTimestamp();

                    settedParent.send(`<@&${tagrole}> `).then(m => m.delete({ timeout: 3000 }));
                    settedParent.send(embedParent);

                }
            ).catch(err => {
                console.log(err);
                message.channel.send("er is iets fout gegaan");
            });
        }
    ).catch(err => {
        message.channel.send("Er is iets fout gegaan.");
    });
}

module.exports.help = {
    name: "new"
}