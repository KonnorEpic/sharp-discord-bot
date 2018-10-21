const Discord = require('discord.js');
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(300, 300)
const ctx = canvas.getContext('2d')

module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  const ava = await loadImage(user.displayAvatarURL);
  const brz = await loadImage('https://cdn.discordapp.com/attachments/470808268550176779/503561479774273546/brazzers.png');
  ctx.drawImage(ava, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(brz, 0, 0, canvas.width, canvas.height);
  const attachment = new Discord.Attachment(canvas.toBuffer(), 'brazzers.png');

  message.channel.send(attachment);
}

module.exports.help = {
  name: "brazzers"
}
