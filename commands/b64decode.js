const Discord = require('discord.js');
const base64 = require("js-base64").Base64;

module.exports.run = async (client, message, args) => {
  txt = args.join(' ');
  if(!args[0]) return message.channel.send("Pls provide text!");
  let txtDecode = base64.decode(txt);
  
  message.channel.send(txtDecode);
}

module.exports.help = {
  name: "b64decode"
}
