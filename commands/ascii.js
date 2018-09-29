const Discord = require('discord.js');
const figlet = require('figlet');

module.exports.run = async (client, message, args) => {
  let txt = args.join(' ');
  if(!args[0]) return message.channel.send("Pls provide text!");
  if(txt.length > 2000) return message.channel.send("Sorry, your message is too long!");
  
  figlet(txt, (err, data) => {
    message.channel.send(data, {
      code: 'ascii'
    });
  });
}

module.exports.help = {
  name: "ascii",
  category: "fun"
}
