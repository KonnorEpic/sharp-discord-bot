const Discord = require('discord.js');
const color = require('../utils/color.json');
const cmds = require('../utils/cmds.json');

module.exports.run = async (client, message, args) => {
  let author = message.author.username;
  message.channel.send("**" + author + "**, :mailbox_with_mail: | Check Your DM's.");
  
  let embed = new Discord.RichEmbed()
  .setAuthor("List of commands")
  .setColor(color.green)
  .addField("Info", cmds.info + "\n")
  .addField("Fun", cmds.fun + "\n")
  .addField("Image", cmds.image + "\n")
  .addField("Utility", cmds.utility + "\n")
  .setTimestamp()
  .setFooter(`${author}`);
  
  message.member.send(embed);
}

module.exports.help = {
  name: "help"
}
