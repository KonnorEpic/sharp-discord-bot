const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(message.author.id !== "416540213696004117") return;
  let txt = args.join(' ');
  if(!args[0]) return message.channel.send("Owner, provide valid command.")

  delete require.cache[require.resolve(`./${txt}.js`)];
  
  message.channel.send(`The command `\`\${txt}`\`\ has been reloaded!`);
}

module.exports.help = {
  name: "reload"
}
