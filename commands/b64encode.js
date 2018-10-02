const Discord = require('discord.js');
const base64 = require("js-base64").Base64;

module.exports.run = async (client, message, args) => {
  txt = args.join(' ');
  if(!args[0]) return message.channel.send("Pls provide text!");
  let txtEncode = base64.encode(txt);
  
  message.channel.send(txtEncode);
}

module.exports.help = {
  name: "b64encode"
}
