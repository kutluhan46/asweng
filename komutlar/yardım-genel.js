const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('Red')
.addField('| Genel Komutlar',`
**!avatar** : Avatarınızı Gösterir
**!tag** : Sunucumuzun Tagını Gösterir Gösterir
**!ping** : Pinginizi Ölçer
**!afk** : Afk Olursunuz
**!say** : Sunucu Üye Grafiğini Gösterir
**!kaçcm** : Kaçcm olduğunu gösterir
**!reboot** : Botu Yeniden Başlatır'`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setImage('')
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["genel"], 
  permLevel: 0
};
exports.help = {
  name: 'genel'
};
