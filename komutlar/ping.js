const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const exampleEmbed = new Discord.RichEmbed()
  .addField(`Pingim` ,`${client.ping}ms`)
  message.channel.send(exampleEmbed)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Otorol sistemini ayarlamaya yarar.',
  usage: '-otorol-ayarla @rol #kanal'
}; 