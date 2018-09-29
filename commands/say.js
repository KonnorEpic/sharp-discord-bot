const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let txt = args.join(' ');
  if(!args[0]) return message.channel.send("Pls provide text!");
  if(args[0] === "@everyone") {
    message.channel.send("Pls don't use this word!")
    return;
  }
  
  if(args[0] === "@here") {
    message.channel.send("Pls don't use this word!")
    return;
  }
  
  message.channel.send(txt);
}

module.exports.help = {
  name: "say"
}
