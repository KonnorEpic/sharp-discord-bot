const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
  if(message.author.id !== "416540213696004117") return;
  let txt = args.join(' ');
  if(!args[0]) return message.channel.send("Owner, provide text.")
  
  client.user.setActivity(txt, {type: "PLAYING"});
}

module.exports.help = {
  name: "botgame"
}
