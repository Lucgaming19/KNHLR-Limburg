const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    try {

        var text = "**DFW official bot** \n\n **__Commands__** \n .help - Geeft alle commands weer. \n .hallo - Geeft een hallo terug. \n .jimmy - Geeft een leuke command voor jimmy. \n .jose - Geeft een leuke command voor jose. \n .luc - Geeft een leuke command voor luc. \n .ruth - Geeft een leuke command voor ruth. \n .pim - Geeft een leuke command voor pim. \n .mark - Geeft een leuke command voor mark. \n .wie - zegt wie wie is. \n .info - Geeft info. \n .serverinfo - Geeft serverinfo. \n .shakira - geeft een leuke command voor shakira. \n\n **__Admin commands__** \n .ban - laat iemand verbannen. \n .kick - Laat iemand kicken. \n .clear - verwijderd berichten \n .warn - laat iemand warnen. \n\n\n \u00A9 DWF";

        message.author.send(text);

        message.reply("You got a dm from me in you're dm.");

    } catch (error) {
        message.reply("There is an error oquered");
    }
	
}

module.exports.help = {
	name: "help"
}