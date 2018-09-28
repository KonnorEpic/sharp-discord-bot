const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.channel.send(`Pong! | ${message.createdAt}`);
}

module.exports.help = {
  name: "ping"
}