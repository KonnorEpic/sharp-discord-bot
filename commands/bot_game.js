const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(message.author.id !== "416540213696004117") return;
  let txt = args.join(' ');
  if(!args[0]) return message.channel.send("Owner, provide text.")
  
  client.user.setActivity(txt, {type: "PLAYING"});
  message.channel.send("Successfully changed bot game to ``" + txt + "``.")
}

module.exports.help = {
  name: "botgame"
}
