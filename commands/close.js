const Discord = require('discord.js');
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
  if(message.author.id === config.ownerID) {
    client.destroy();
    let msg = message.channel.send("``Reloading...``");
    await msg.delete({
      time: 2000
    });
  }
  
  message.channel.send("Oh, you dont my developer!")
}

module.exports.help = {
  name: "close"
}
