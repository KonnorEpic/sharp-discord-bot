const Discord = require('discord.js');
const nekoClient = require('nekos.life');
const neko = new nekoClient();

module.exports.run = async (client, message, args) => {
  let nsfwEmbed = new Discord.RichEmbed()
  .setAuthor("This is not NSFW channel!")
  .setDescription("Use **NSFW** commands in **NSFW** channel (look in channel settings)")
  .setImage("https://i.imgur.com/oe4iK5i.gif")
  .setFooter(message.author.username)
  .setTimestamp();
  
  if(!message.channel.nsfw) return message.channel.send(nsfwEmbed);
  
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
