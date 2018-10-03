const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_SERVER')) return message.channel.send("You don't have perms!");
  if(!args[0]) return message.channel.send("You don't provide prefix!");
  
  let prefixes = JSON.parse(fs.readFileSync("../utils/prefixes.json", "utf8"));
  
  prefixes[message.guild.id] = {
    prefixes: args[0]
  };
  
  fs.writeFile("../utils/prefixes.json", JSON.stringify(prefixes), (err) => {
    if(err) console.log(err)
  });
  
  message.channel.send("Prefix changed to ``" + args[0] + "``!");
}

module.exports.help = {
  name: "prefix"
}
