const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.channel.send(`Pong!\n\API Ping - `${Math.floor(client.ping)}ms\`\nBot Ping - \`${Math.floor(new Date() - message.createdAt)}\`ms`);
}

module.exports.help = {
  name: "ping"
}
