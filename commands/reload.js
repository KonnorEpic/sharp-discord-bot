const Discord = require('discord.js');
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
  try{
    if(message.author.id !== config.ownerID) {
    message.channel.send("Successfully reload!");
    client.destroy();
    return;
  } else {
    message.channel.send("You don't my developer!")
  }
  }
}

module.exports.help = {
  name: "reload"
}
