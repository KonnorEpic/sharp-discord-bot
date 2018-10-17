const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json');

const { cmd_prefix, ownerID } = config;

const client = new Discord.Client({disableEveryone: true});
  client.commands = new Discord.Collection();

  fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length < 0) {
      console.log("Could not find the cmd.");
      return;
    }
    
    jsfile.forEach((f, i) => {
      let props = require(`./commands/${f}`);
      console.log(`${f} has loaded!`);
      client.commands.set(props.help.name, props);
    });
  });

client.on('ready', async () => {
  console.log('Bot is ready!');
  client.user.setActivity("sh!help", {type: "PLAYING"})
});

client.on('message', async message => {
  
   let prefix = cmd_prefix;  
   let cont = message.content.slice(prefix.length).split(" ");
   let args = cont.slice(1);
  
   if(!message.content.startsWith(prefix)) return;
   if(message.author.bot) return;
  
   let cmdFile = client.commands.get(cont[0]);
   if(cmdFile) cmdFile.run(client, message, args, Discord);
});

bot.on('guildMemberAdd', async member => {
  let channel = member.guild.channels.find('name', 'welcome-and-bye');
  if (!channel) return;
  
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(member.user.displayAvatarURL)
  .addField('Welcome!', `Welcome to to server ${member.guild.name}, ${member.user.username}!`)
  .addField('Name', `${member.user.username}`)
  .addField('ID', `${member.user.id}`)
  .addField('Member Count', `${member.guild.memberCount}`)
  .setTimestamp();
  
  channel.send(embed);
});

bot.on('guildMemberRemove', async member => {
  let channel = member.guild.channels.find('name', 'welcome-and-bye');
  if (!channel) return;
  
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(member.user.displayAvatarURL)
  .addField('Bye!', `${member.user.username} left the server!`)
  .addField('Name', `${member.user.username}`)
  .addField('ID', `${member.user.id}`)
  .addField('Member Count', `${member.guild.memberCount}`)
  .setTimestamp();
  
  channel.send(embed);
});

client.login(process.env.token);
