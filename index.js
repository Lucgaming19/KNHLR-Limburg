const discord = require("discord.js")
const botConfig = require("./botconfig.json")
const fs = require("fs");
const bot = new discord.Client();
bot.commands = new discord.Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
 for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
};

bot.on("ready", async () => {

	console.log(`${bot.user.username} is online!`);

	bot.user.setActivity("Prefix: . \u00A9 Limburg", { type: "LISTENING" });

});

bot.on("message", async message => {

	if (message.author.bot) return;

	if (message.channel.type === "dm") return;	

	var prefix = botConfig.prefix;

	var messageArray = message.content.split(" "); 

	var command = messageArray[0];

	var arguments = messageArray.slice(1);

	var commands = bot.commands.get(command.slice(prefix.length));

	if (!message.content.startsWith(prefix)) return;

	if (commands) commands.run(bot, message, arguments);
});

bot.login(process.env.token); 