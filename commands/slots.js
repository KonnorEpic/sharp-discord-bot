const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  author = message.author.username;
  machine1 = ["🍏", "🍎", "🍋", "🍉", "🍇", "🍒", "🍌", "🍈", "🍐"];
  random1 = Math.floor(Math.random() * machine1.length);
  
  machine2 = ["🍏", "🍎", "🍋", "🍉", "🍇", "🍒", "🍌", "🍈", "🍐"];
  random2 = Math.floor(Math.random() * machine2.length);
  
  machine3 = ["🍏", "🍎", "🍋", "🍉", "🍇", "🍒", "🍌", "🍈", "🍐"];
  random3 = Math.floor(Math.random() * machine3.length);
  
  machine4 = ["🍏", "🍎", "🍋", "🍉", "🍇", "🍒", "🍌", "🍈", "🍐"];
  random4 = Math.floor(Math.random() * machine4.length);
  
  machine5 = ["🍏", "🍎", "🍋", "🍉", "🍇", "🍒", "🍌", "🍈", "🍐"];
  random5 = Math.floor(Math.random() * machine5.length);
  
  machine6 = ["🍏", "🍎", "🍋", "🍉", "🍇", "🍒", "🍌", "🍈", "🍐"];
  random6 = Math.floor(Math.random() * machine6.length);
  
  machine7 = ["🍏", "🍎", "🍋", "🍉", "🍇", "🍒", "🍌", "🍈", "🍐"];
  random7 = Math.floor(Math.random() * machine7.length);
  
  machine8 = ["🍏", "🍎", "🍋", "🍉", "🍇", "🍒", "🍌", "🍈", "🍐"];
  random8 = Math.floor(Math.random() * machine8.length);
  
  machine9 = ["🍏", "🍎", "🍋", "🍉", "🍇", "🍒", "🍌", "🍈", "🍐"];
  random9 = Math.floor(Math.random() * machine9.length);

  let embed = new Discord.RichEmbed()
  .setAuthor("[SLOT MACHINE]")
  .setFooter(author + " started slot machine!")
  .setTimestamp()
  .addField("**-------------------**", "** **")
  .addField(`${machine1[random1]} | ${machine2[random2]} | ${machine3[random3]}`, "** **")
  .addField(`${machine4[random4]} | ${machine5[random5]} | ${machine6[random6]} **<**`, "** **")
  .addField(`${machine7[random7]} | ${machine8[random8]} | ${machine9[random9]}`, "** **")
  .addField("**-------------------**", "** **");
  
  message.channel.send(embed);
}

module.exports.help = {
  name: "slots"
}
