const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {\
  let choose = args.join(' ').split(" | ");
  if(!args[0]) return message.channel.send("Pls provide <text1 | text2> or more.");
  let random = Math.floor(Math.random() * choose.length);

  message.channel.send("I choose: ``" + choose[random] + "``");
}

module.exports.help = {
  name: "choose"
}
