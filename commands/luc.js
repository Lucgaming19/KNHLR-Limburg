const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


     var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
	//.addField("made on", bot.user.createdAt)
	.addFields(
	    	{ name: "**QUOTE:**", value: "Macgyver ending" },
            	{ name: "You made a deal with the devil, Did you really think it was gonna be fair?", value: " ©Lucas Till aka Angus Gyver"})
        .setFooter(message.member.displayName)
        .setTimestamp();
        
         
   


    //var embed3 = new discord.MessageEmbed()
        //.setColor("#ff0000")
	//.addField("made on", bot.user.createdAt)
        //.addField("In times of war or uncertainty there is a special breed of warrior ready to answer our Nation's call.", "A common man with uncommon desire to succeed. ")
	//.setFooter(message.member.displayName)
        //.setTimestamp();
	
    //var embed6 = new discord.MessageEmbed()
        //.setColor("#ff0000")
	//.addField("made on", bot.user.createdAt)
       // .addField("Forged by adversity, he stands alongside America's finest special operations forces to serve his country, the American people, and protect their way of life. I am that man.", "My Trident is a symbol of honor and heritage.")
	//.setFooter(message.member.displayName)
        //.setTimestamp();

    //var embed5 = new discord.MessageEmbed()
       // .setColor("#ff0000")
	//.addField("made on", bot.user.createdAt)
//.addField("Bestowed upon me by the heroes that have gone before, it embodies the trust of those I have sworn to protect.By wearing the Trident I accept the responsibility of my chosen profession and way of life.", "It is a privilege that I must earn every day.")
	//.setFooter(message.member.displayName)
        //.setTimestamp();


    //var embed2 = new discord.MessageEmbed()
        //.setColor("#ff0000")
	//.addField("made on", bot.user.createdAt)
 	//.addFields(
           	// { name: "My loyalty to Country and Team is beyond reproach. I humbly serve as a guardian to my fellow Americans always ready to defend those who are unable to defend themselves. I do not advertise the nature of my work, nor seek recognition for my actions. I voluntarily accept the inherent hazards of my profession, placing the welfare and security of others before my own.", value: "I serve with honor on and off the battlefield. The ability to control my emotions and my actions, regardless of circumstance, sets me apart from other men. Uncompromising integrity is my standard. My character and honor are steadfast. My word is my bond." },
           	// { name: "We expect to lead and be led. In the absence of orders I will take charge, lead my teammates and accomplish the mission. I lead by example in all situations" , value: "." })
        //.setFooter(message.member.displayName)
        //.setTimestamp();
       

    //var embed4 = new discord.MessageEmbed()
        //.setColor("#ff0000")
	//.addField("made on", bot.user.createdAt)
	//.addFields(            
		//{ name: "I will never quit. I persevere and thrive on adversity. My Nation expects me to be physically harder and mentally stronger than my enemies. If knocked down, I will get back up, every time. I will draw on every remaining ounce of strength to protect my teammates and to accomplish our mission. I am never out of the fight.", value: "We demand discipline. We expect innovation. The lives of my teammates and the success of our mission depend on me &#8211; my technical skill, tactical proficiency, and attention to detail. My training is never complete." },
          	//{ name: "We train for war and fight to win. I stand ready to bring the full spectrum of combat power to bear in order to achieve my mission and the goals established by my country. The execution of my duties will be swift and violent when required yet guided by the very principles that I serve to defend.", value: "Brave men have fought and died building the proud tradition and feared reputation that I am bound to uphold. In the worst of conditions, the legacy of my teammates steadies my resolve and silently guides my every deed. I will not fail. " })
	//.setFooter(message.member.displayName)
        //.setTimestamp();
        

    	message.channel.send(embed);
	//message.channel.send(embed3);
	//message.channel.send(embed6);
    	//message.channel.send(embed5);
	//message.channel.send(embed2);
	//message.channel.send(embed4);

}

module.exports.help = {
    name: "luc"

}