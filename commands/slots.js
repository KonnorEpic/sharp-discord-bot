const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  author = message.author.username;
  machine = ["🍏", "🍉", "🍇", "🍓"];
  random = Math.floor(Math.random() * machine.length);

  let embed = new Discord.RichEmbed()
  .setAuthor("**[🎰 SLOT MACHINE 🎰]**")
  .setFooter(author + " started slot machine!")
  .setTimestamp()
  .addField("**-------------------**", "** **")
  .addField(`${machine[random]} | ${machine[random]} | ${machine[random]}`, "** **")
  .addField(`${machine[random]} | ${machine[random]} | ${machine[random]} **<**`, "** **")
  .addField(`${machine[random]} | ${machine[random]} | ${machine[random]}`, "** **")
  .addField("**-------------------**", "** **");
  
  message.channel.send(embed);
}

module.exports.help = {
  name: "slots"
}
