const Discord = require('discord.js');
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
  if(message.author.id === config.ownerID) {
    let msg = await message.channel.send("``Reloading...``");
    await msg.delete({
      time: 30
    });
    client.destroy();
    message.channel.send("``Succefully reload!``");
    return;
  }
  
  message.channel.send("Oh, you dont my developer!");
}

module.exports.help = {
  name: "close"
}
