const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('Red')
.addField(' | Yetkili Komutları',`
**!ban** : Ban Sistemi
**!erkek-kayıt** : Kişiye erkek rolü verir. ÖR; !e @etiket isim yaş
**!kız-kayıt** : Kişiye kız rolü verir. ÖR; !k @etiket isim yaş
**!jail** : Etiketlenen kişiyi jaile atar
**!sa-as** : Sa As Sistemi
**!mute** : Seçilen Kullanıcıya Mute Atar ÖR; !mute @etiket Süre(s=sn/m=dk/h=gün/d=gün) sebeb
**!çekiliş** : Sunucuda Çekiliş yapmanızı sağlar'
**!oylama** : Sunucuda oylma yapmanızı sağlar
**!küfür aç/kapat** : Küfür Korumayı Açar`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setImage('')
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["yetkili"], 
  permLevel: 0
};
exports.help = {
  name: 'yetkili'
};
