const Discord = require('discord.js');
const color = require('../utils/color.json');

module.exports.run = async (client, message, args) => {
  let txt = args.join('+');
  if(!args[0]) return message.channel.send("Pls provide text!");
  
  let embed = new Discord.RichEmbed()
  .setColor(color.green)
  .setAuthor("Hm, mc achievement?")
  .setImage("https://www.minecraftskinstealer.com/achievement/a.php?i=2&h=Achievement+Get%21&t=" + txt)
  .setFooter("Achievement Created!");
  
  message.channel.send(embed);
}

module.exports.help = {
  name: "achievement"
}