const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let kayityetkili = '753626933308293230' //KAYIT YETKİLİSİ ID
let verbuse = '748884979118768259' //VERİLECEK ROL ID
let verbusem = '748884979118768259' //VERİLECEK ROL ID
let albuse = '758672793532497921' //ALINACAK ROL ID
let albusem = '' //ALINACAK ROL ID l Kullanmicaksanız silin kötü gözükür .
let isimön =  `℘ ` //DEĞİŞTİRİLECEK İSMİN ÖNÜNE GELEN
let isimson = '' //DEĞİŞTİRİLECEK İSMİN SONUNA GELEN



  if(!message.member.roles.has(kayityetkili)) 
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmasınız.`);
  let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ")
  if (!member) return message.channel.send('Bir Üye Etiketlemelisin💖')
  if (!isim) return message.channel.send('Bir İsim Yazmalısın 💖')

  setTimeout(function(){
  member.setNickname(`${isimön}${isim}${isimson}`)
  },2000)
  setTimeout(function(){
  member.addRole(verbuse)
  member.addRole(verbusem)
  },3000)
  setTimeout(function(){
  member.removeRole(albuse)
  member.addRole(albusem)
  },4000)
  
 const emoji = client.emojis.find(emoji => emoji.name === "tik");
 let embed = new Discord.RichEmbed()
  .setColor('RED')
  .setDescription(`

  İsmi Değiştirildi: ${isimön}${isim}${isimson},\nVerilen Rol: <@&758672793532497921> \n Alınan Rol: <@&748884979118768259> \n Adlı kullanıcı başarıyla kaydedildi. Aramıza hoşgeldin , İyi eğlenceler.
`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  message.channel.send(embed)
message.react(emoji)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['k','kız','kadın'],
  permLevel: 0
}
exports.help = {
  name: 'kız',
  description: "Erkek kullanıcıları kayıt etme komutu.",
  usage: '!kız <yeni nick>'
}