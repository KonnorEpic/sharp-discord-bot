const Discord = require('discord.js');
const nekoClient = require('nekos.life');
const neko = new nekoClient();

module.exports.run = async (client, message, args) => {
  if(!message.channel.nsfw) return message.channel.send("This is not **NSFW** channel!");

  let pussy = await neko.getNSFWPussy();

  let embed = new Discord.RichEmbed()
  .setAuthor("Random pussy found!")
  .setFooter("Powered by nekos.life")
  .setTimestamp()
  .setImage(pussy.url);

  message.channel.send(embed);
}

module.exports.help = {
  name: "pussy"
}
