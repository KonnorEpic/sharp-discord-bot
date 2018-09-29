const Discord = require('discord.js');
const color = require('../utils/color.json');
const cmds = require('../utils/cmds.json');

module.exports.run = async (client, message, args) => {
  let author = message.author.username;
  
  if(!args[0] === "info") {
    let infoEmbed = new Discord.RichEmbed()
    .setAuthor("List of commands for category: ``info``")
    .setColor(color.green)
    .addField("Info", cmds.info + "\n")
    .setTimestamp()
    .setFooter(`${author}`);
    
    message.channel.send(infoEmbed);
    return;
  }
  
  let embed = new Discord.RichEmbed()
  .setAuthor("List of categorys")
  .setColor(color.green)
  .addField("Category", cmds.category)
  .setTimestamp()
  .setFooter(`${author}`);
  
  message.channel.send(embed);
}

module.exports.help = {
  name: "help"
}
