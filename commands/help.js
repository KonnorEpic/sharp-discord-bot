const Discord = require('discord.js');
const color = require('../utils/color.json');
const cmds = require('../utils/cmds.json');

module.exports.run = async (client, message, args) => {
  let author = message.author.username;
  
  if(args[0] === "info") {
    let infoEmbed = new Discord.RichEmbed()
    .setAuthor("List of commands for category: Info")
    .setColor(color.green)
    .addField("Info", cmds.info + "\n")
    .setTimestamp()
    .setFooter(`${author}`);
    
    message.channel.send(infoEmbed);
    return;
  }
  
  if(args[0] === "fun") {
    let funEmbed = new Discord.RichEmbed()
    .setAuthor("List of commands for category: Fun")
    .setColor(color.green)
    .addField("Fun", cmds.fun + "\n")
    .setTimestamp()
    .setFooter(`${author}`);
    
    message.channel.send(funEmbed);
    return;
  }
  
  if(args[0] === "image") {
    let imgEmbed = new Discord.RichEmbed()
    .setAuthor("List of commands for category: Image")
    .setColor(color.green)
    .addField("Image", cmds.image + "\n")
    .setTimestamp()
    .setFooter(`${author}`);
    
    message.channel.send(imgEmbed);
    return;
  }
  
  if(args[0] === "utility") {
    let utilEmbed = new Discord.RichEmbed()
    .setAuthor("List of commands for category: Utility")
    .setColor(color.green)
    .addField("Utility", cmds.utility + "\n")
    .setTimestamp()
    .setFooter(`${author}`);
    
    message.channel.send(utilEmbed);
    return;
  }
  
  let embed = new Discord.RichEmbed()
  .setAuthor("List of categories")
  .setColor(color.gold)
  .addField("Category", cmds.category)
  .addField("Resources", [My Support Server](https://discord.gg/56KvWSs))
  .setTimestamp()
  .setFooter(`${author}`);
  
  message.channel.send(embed);
}

module.exports.help = {
  name: "help"
}
