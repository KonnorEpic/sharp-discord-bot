const Discord = require('discord.js');
const sql = require('sqlite');

module.exports.run = async (client, message, args) => {
  sql.open('../assets/sqlite/descriptions.sqlite');
  
  if(args[0] === 'desc:') {
    let text = args.slice(6).join(' ');
    if(!text[0]) return message.channel.send('You not description provided!');
    
    sql.get(`SELECT * FROM descriptions WHERE userId = "${message.author.id}"`).then(row => {
      if(!row) {
        sql.run("INSERT INTO descriptions (userId, desc) VALUES (?, ?)", [message.author.id, text]);
      } else {
        sql.run(`UPDATE descriptions SET desc = "${text}" WHERE userId = ${message.author.id}`);
      }
    }).catch(() => {
      console.error;
      sql.run("CREATE TABLE IF NOT EXISTS descriptions (userId TEXT, desc TEXT)").then(() => {
        sql.run("INSERT INTO descriptions (userId, desc) VALUES (?, ?)", [message.author.id, text]);
      }):
    });
    message.channel.send('Successfully description changed!');
  }
  
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter(`${message.author.username}'s profile`);
  
  message.channel.send(embed);
}

module.exports.help = {
  name: "profile"
}
