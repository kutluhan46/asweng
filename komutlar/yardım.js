const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('761135000442896396') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Yardım Menüsü`)
        .setDescription(`⚙️ | **${ayarlar.prefix}genel** Genel Komutlar\n⚙️ | **${ayarlar.prefix}yetkili** Yetkili Komutları`)  
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage('') //sunucunuzun ppsinin linkini koyun istemezseniz boş bırakabilirsiniz
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};