const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    try {

        var text = "**Limburg official bot** \n\n **__Commands__**" + 
            "\n.new {reden} - maakt een ticket aan." + 
            "\n.help - Geeft alle commands weer." +
            "\n.hallo - Geeft een hallo terug." +
            "\n.skittle - Geeft een leuke command voor skittle." +
            "\n.jose - Geeft een leuke command voor jose." +
            "\n.luc - Geeft een leuke command voor luc." +
            "\n.ruth - Geeft een leuke command voor ruth." +
            "\n.neo - Geeft een leuke command voor neo." +
            "\n.donald - Geeft een leuke command voor donald." +
            "\n.wie - zegt wie wie is.\n.water - geeft je drinken." +
            "\n.nino - Geeft een leuke command voor nino." +
            "\n.henri - Geeft een leuke command voor henri." +
            "\n.mathias - Geeft een leuke command voor mathias." +
            "\n.max - Geeft een leuke command voor max." +
            "\n\n ** __informatie commands__ **" +
            "\n.help - laat alle commando's zien." +
            "\n.info - Geeft info. " +
            "\n.serverinfo - Geeft serverinfo." +
            "** __Admin commands__ **" +
            "\n.ban - laat iemand verbannen." +
            "\n.kick - Laat iemand kicken." +
            "\n.clear - verwijderd berichten" +
            "\n.warn - laat iemand warnen.\n\n" +
            "** __Privecommand__ ** nr1 - geeft een speciale command voor jose en skittle." +
            "\n\n\n \u00A9 Limburg";

        message.author.send(text);

        message.reply("You got a dm from me in you're dm.");

    } catch (error) {
        message.reply("There is an error oquered");
    }
	
}

module.exports.help = {
	name: "help"
}