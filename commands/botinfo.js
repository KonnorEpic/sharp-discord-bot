const Discord = require('discord.js');
const color = require('../utils/color.json');

module.exports.run = async (client, message, args) => {
  let author = message.author.username;
  
  let embed = new Discord.RichEmbed()
  .setColor(color.gold)
  .addField("Name", client.user.username)
  .addField("ID", client.user.id)
  .addField("Guilds", client.guilds.size)
  .addField("Users", client.users.size)
  .addField("Uptime", client.readyAt.getMinutes() + " minutes")
  .addField("Library", "discord.js")
  .setTimestamp()
  .setFooter(`${author}`);
  
  message.channel.send(embed);
}

module.exports.help = {
  name: "botinfo"
}
