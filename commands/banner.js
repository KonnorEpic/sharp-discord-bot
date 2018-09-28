const Discord = require('discord.js');
const color = require('../utils/color.json');

module.exports.run = async (client, message, args) => {
  let txt = args.join('+');
  if(!args[0]) return message.channel.send("Pls provide text!");
  
  let embed = new Discord.RichEmbed()
  .setColor(color.gold)
  .setAuthor("Easy Banner!")
  .setImage("https://dummyimage.com/2000x500/33363c/ffffff&text=" + txt)
  .setFooter("Banner Created!");
  
  message.channel.send(embed);
}

module.exports.help = {
  name: "banner"
}
