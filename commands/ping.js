const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.channel.send(`Pong! | \`${Math.floor(client.ping)}\`ms`);
}

module.exports.help = {
  name: "ping"
}
