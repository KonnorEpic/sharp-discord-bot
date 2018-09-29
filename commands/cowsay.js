const Discord = require('discord.js');
const cowsay = require('cowsay');

module.exports.run = async (client, message, args) => {
  let txt = args.join(' ');
  if(!args[0]) return message.channel.send("Pls provide text!");
  
  message.channel.send("```" + cowsay.say({
    text: txt
  }) + "```");
}

module.exports.help = {
  name: "cowsay",
  category: "fun"
}
