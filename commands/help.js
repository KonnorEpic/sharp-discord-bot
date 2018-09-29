const Discord = require('discord.js');
const color = require('../utils/color.json');
const cmds = require('../utils/cmds.json');

module.exports.run = async (client, message, args) => {
  let author = message.author.username;
  message.channel.send("**" + author + "**, :mailbox_with_mail: | Check Your DM's.");
  
  let embed = new Discord.RichEmbed()
  .setAuthor("List of commands")
  .setColor(color.green)
  .addField("Fun", `${client.commands.filter(cmd => cmd.help.category === 'fun').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true))
  .setTimestamp()
  .setFooter(`${author}`);
  
  message.member.send(embed);
}

module.exports.help = {
  name: "help"
}
