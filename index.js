const discord = require("discord.js")
const botConfig = require("./botconfig.json")
const fs = require("fs");
const clt = new discord.Client();
clt.commands = new discord.Collection();



fs.readdir("./commands/", (err, files) => {

	if (err) console.log(err);

	var jsFiles = files.filter(file => file.endsWith('.js'));

	if (jsFiles.length <= 0) {
		console.log("kon geen files finden.");
		return;
	}

	jsFiles.forEach((f, i) => {

		var fileGet = require(`./commands/${f}`);
		console.log(`De file ${f} is geladen`);

		clt.commands.set(fileGet.help.name, fileGet);

	})

});


clt.on("ready", async () => {

	console.log(`${clt.user.username} is online!`);

	clt.user.setActivity("Prefix: . \u00A9 Limburg", { type: "LISTENING" });

});

clt.on("message", async message => {

	if (message.author.clt) return;

	if (message.channel.type === "dm") return;	

	var prefix = botConfig.prefix;

	var messageArray = message.content.split(" "); 

	var command = messageArray[0];

	var arguments = messageArray.slice(1);

	var commands = clt.commands.get(command.slice(prefix.length));

	if (!message.content.startsWith(prefix)) return;

	if (commands) commands.run(clt, message, arguments);
});

clt.login(process.env.token); 