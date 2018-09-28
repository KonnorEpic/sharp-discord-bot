const Discord = require('discord.js');
const { invitelink } = require('../config.json');
const color = require('../utils/color.json');

module.exports.run = async (client, message, args) => {
  let author = message.author.username;
  
  let embed = new Discord.RichEmbed()
  .setColor(color.orange)
  .addField("Invite me!", invitelink)
  .setFooter(`${author}`);
  
  message.channel.send(embed);
}

module.exports.help = {
  name: "invite"
}