const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
  let { body } = await superagent
  .get("https://nekos.life/api/v2/img/hentai");
  
  if(!message.channel.nsfw) return message.channel.send("This is not **NSFW** channel!");

  let embed = new Discord.RichEmbed()
  .setAuthor("Random hentai found!")
  .setFooter("Powered by nekos.life")
  .setTimestamp()
  .setImage(body.url);

  message.channel.send(embed);
}



module.exports.help = {
  name: "hentai"
}
