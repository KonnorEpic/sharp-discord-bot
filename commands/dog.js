const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
  let { body } = await superagent
  .get("https://random.dog/woof.json");
  
  let embed = new Discord.RichEmbed()
  .setAuthor("Random dog found!")
  .setFooter("Powered by random.dog")
  .setTimestamp()
  .setImage(body.url);

  message.channel.send(embed);
}

module.exports.help = {
  name: "dog"
}
