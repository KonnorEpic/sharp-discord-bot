const Discord = require('discord.js');
const nekoClient = require('nekos.life');
const neko = new nekoClient();

module.exports.run = async (client, message, args) => {
  if(!message.channel.nsfw) return message.channel.send("This is not **NSFW** channel!");

  let cum = await neko.getNSFWCumsluts();

  let embed = new Discord.RichEmbed()
  .setAuthor("Random cum found!")
  .setFooter("Powered by nekos.life")
  .setTimestamp()
  .setImage(cum.url);

  message.channel.send(embed);
}

module.exports.help = {
  name: "cum"
}
