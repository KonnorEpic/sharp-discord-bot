const Discord = require('discord.js');
const nekoClient = require('nekos.life');
const neko = new nekoClient();

module.exports.run = async (client, message, args) => {
  if(!message.channel.nsfw) return message.channel.send("This is not **NSFW** channel!");
  
  let anal = await neko.getNSFWAnal();

  let embed = new Discord.RichEmbed()
  .setAuthor("Random anal found!")
  .setFooter("Powered by nekos.life")
  .setTimestamp()
  .setImage(anal.url);

  message.channel.send(embed);
}

module.exports.help = {
  name: "anal"
}
