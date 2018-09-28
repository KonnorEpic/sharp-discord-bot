const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
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
  client.user.setActivity(`-help | ${client.guilds.size} guilds.`, {type: "PLAYING"})
});

client.on('message', async message => {
  let prefix = cmd_prefix;
  let msgArray = message.content.split(" ");
  let cmd = msgArray[0];
  let args = msgArray.slice(1);
  let cmdFile = client.commands.get(cmd.slice(prefix.length));
  if(cmdFile) cmdFile.run(client, message, args);
});


client.login(process.env.token);
