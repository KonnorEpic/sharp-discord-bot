const Discord = require('discord.js');
const qr = require('qr-image');

module.exports.run = async (client, message, args) => {
  let txt = args.join(' ');
  if(!args[0]) return message.channel.send("Pls provide text!");

  let qrImage = await qr.image(txt, { type: 'png' });  
  message.channel.sendFile(qrImage, 'qrcode.png');
}



module.exports.help = {
  name: "qrcode"
}
