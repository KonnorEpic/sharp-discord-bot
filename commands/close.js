const Discord = require('discord.js');
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
  if(message.author.id === config.ownerID) {
    let msg = message.channel.send("``Reloading...``");
    let msg2 = await msg.delete({
      time: 2000
    });
    client.destroy();
    msg2.edit("Succefully reload!");
  }
  
  message.channel.send("Oh, you dont my developer!");
}

module.exports.help = {
  name: "close"
}
