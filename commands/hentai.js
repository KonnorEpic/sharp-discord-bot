const Discord = require('discord.js');
const nekoClient = require('nekos.life');
const neko = new nekoClient();

module.exports.run = async (client, message, args) => {
  if(!message.channel.nsfw) return message.channel.send("This is not **NSFW** channel!");
  
  let hentai = await neko.getNSFWHentai();

  let embed = new Discord.RichEmbed()
  .setAuthor("Random hentai found!")
  .setFooter("Powered by nekos.life")
  .setTimestamp()
  .setImage(hentai.url);

  message.channel.send(embed);
}

module.exports.help = {
  name: "hentai"
}
