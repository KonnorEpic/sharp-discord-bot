const Discord = require('discord.js');
const reverse = require('reverse-string');

module.exports.run = async (client, message, args) => {
  let txt = args.join(' ');
  if(!args[0]) return message.channel.send("Pls provide text!");
  
  message.channel.send(reverse(txt));
}

module.exports.help = {
  name: "reverse"
}
