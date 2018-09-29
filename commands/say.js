const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let txt = args.join(' ');
  if(!args[0]) return message.channel.send("Pls provide text!");
  
  message.channel.send(txt);
}

module.exports.help = {
  name: "say",
  category: "fun"
}
