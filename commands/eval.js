const Discord = require('discord.js');

module.exports.run = async (client, message, args, Discord) => {
  if (message.author.id !== '416540213696004117') return;
  try {
    let evaled = eval(args.join(' '));
  
    await message.react('✅');
  } catch(e) {
    message.channel.send('```' + e + '```');
    await message.react('❎');
  }
}

module.exports.help = {
  name: "eval"
}
