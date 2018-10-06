const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
  let { body } = await superagent
  .get("https://api-to.get-a.life/meme");
  
  let embed = new Discord.RichEmbed()
  .setAuthor(body.text)
  .setFooter("Powered by api-to.get-a.life")
  .setTimestamp()
  .setImage(body.url);
  
  message.channel.send(embed);
}

module.exports.help = {
  name: "meme"
}
