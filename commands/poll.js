const Discord = require('discord.js');
const color = require('../utils/color.json');

module.exports.run = async (client, message, args) => {
  let author = message.author.username;
  let txt = args.join(' ');
  if(!args[0]) return message.channel.send("Pls provide text!");
  
  let embed = new Discord.RichEmbed()
  .setColor(color.gold)
  .setAuthor("Poll created by: " + author)
  .setDescription(txt)
  .setTimestamp()
  .setFooter("React to vote.");
  
  let msg = await message.channel.send(embed);
  await msg.react("✅");
  await msg.react("❎");
}

module.exports.help = {
  name: "poll"
}