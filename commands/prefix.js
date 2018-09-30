const db = require('quick.db');

module.exports.run = (client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You not server administrator!");
  if(!args[0]) return message.channel.send("Pls enter prefix!");
  
  db.updateText(`guildPrefix_${message.guild.id}`, args.join().trim()).then(i => {
    message.channel.send("Prefix changed to ``" + i.text + "``");
  });
}

module.exports.help = {
  name: "prefix"
}
