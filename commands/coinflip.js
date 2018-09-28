const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let author = message.author.username;
  let coins = ["**TAILS**", "**HEADS**"]
  let random = Math.floor(Math.random() * coins.length);
  message.channel.send("**" + author + "** flipped a coin and got " + coins[random] + "!");
}

module.exports.help = {
  name: "coinflip"
}