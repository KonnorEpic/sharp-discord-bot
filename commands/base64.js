const Discord = require('discord.js');
const base64 = require("js-base64").Base64;

module.exports.run = async (client, message, args) => {
  if(args[0] === 'encode') {
    if(!args[0]) return message.channel.send("Pls provide text!");
    let txt = args.join(' ').slice(7);
    let txtEncode = base64.encode(txt);
    
    message.channel.send(txtEncode);
    return;
  }
  
  if(args[0] === 'decode') {
    if(!args[0]) return message.channel.send("Pls provide text!");
    let txt = args.join(' ').slice(7);
    let txtDecode = base64.decode(txt);
    
    message.channel.send(txtDecode);
    return;
  }
  
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor('BASE64')
  .addField('Base64 Commands', '``base64 encode [text]``, ``base64 decode [text]``');
  
  message.channel.send(embed);
}

module.exports.help = {
  name: "base64"
}
