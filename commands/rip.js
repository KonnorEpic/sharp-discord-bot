const Discord = require('discord.js');
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(300, 300)
const ctx = canvas.getContext('2d')

module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  const background = await loadImage('http://janbonobooks.com/blog/jan1131809165656.db.6767846.hostedresource.com/blog/wp-content/uploads/rip.jpg');
  const ava = await loadImage(user.displayAvatarURL);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(ava, 80, 150, 65, 65);
  const attachment = new Discord.Attachment(canvas.toBuffer(), 'rip.png');

  message.channel.send(attachment);
}

module.exports.help = {
  name: "rip"
}
