const Discord = require('discord.js');
const weather = require('weather-js');
const color = require('../utils/color.json');

module.exports.run = async (client, message, args) => {
  let txt = args.join(' ');
  if(!args[0]) return message.channel.send("Please enter the location!");
  
  weather.find({search: txt, degreeType: "F"}, function(err, result) {
    if(err) message.channel.send("You don't enter location!");
    
    if(result.length === 0) {
      message.channel.send("**Pls enter a valid location**!");
      return;
    }
    
    let current = result[0].current;
    let location = result[0].location;
    
    let embed = new Discord.RichEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Weather for ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor(color.gold)
    .addField("Timezone", `UTC ${location.timezone}`, true)
    .addField("Degree Type", location.degreetype, true)
    .addField("Temperature", `${location.temperature} Degrees`, true)
    .addField("Feels Like", `${current.feelslike} Degrees`, true)
    .addField("Winds", current.winddisplay, true)
    .addField("Humidity", `${current.humidity}%`, true);
    
    message.channel.send(embed);
  });
}

module.exports.help = {
  name: "weather"
}
