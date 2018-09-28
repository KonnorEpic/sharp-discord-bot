const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
  let { body } = await superagent
  .get("https://nekos.life/api/v2/img/meow");
  
  let embed = new Discord.RichEmbed()
  .setAuthor("Random cat found!")
  .setFooter("Powered by nekos.life")
  .setTimestamp()
  .setImage(body.url);
  
  message.channel.send(embed);
}

module.exports.help = {
  name: "cat"
}
