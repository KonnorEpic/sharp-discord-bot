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
  .addField("Library", "discord.js")
  .addField("Uptime", `${client.readyAt.getDate()}.${client.readyAt.getMonth() + 1}.${client.readyAt.getFullYear()} ${client.readyAt.getHours()} | ${client.readyAt.getMinutes()} | ${client.readyAt.getSeconds()}`)
  .setTimestamp()
  .setFooter(`${author}`);
  
  message.channel.send(embed);
}

module.exports.help = {
  name: "botinfo"
}
