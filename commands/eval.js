const Discord = require('discord.js');

module.exports.run = async (client, message, args, Discord) => {
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
