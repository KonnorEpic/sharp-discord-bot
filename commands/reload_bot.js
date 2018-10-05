const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  if(message.author.id !== config.ownerID) return message.channel.send("No, no, no.");
  client.destroy();
  message.channel.send("Successfully reload!");
}

module.exports.help = {
  name: "reload"
}
