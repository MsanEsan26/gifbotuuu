const Discord = require('discord.js');

exports.run = function(client, message) {
  
 
const yükleniyor = client.emojis.get("737399072033341591")
const kullanici = client.emojis.get("725798953223979030")
const yıldız = client.emojis.get("731542836092338189")
const sosyal = client.emojis.get("727145446526550097")
const kitaplik = client.emojis.get("737399895845240843")
const js = client.emojis.get("737398267234615397")
const onay = client.emojis.get("725798968310890708")
const kodyaziyor = client.emojis.get("737400173621280858")
const ayarlar = client.emojis.get("737261609319137360")
const embed = new Discord.RichEmbed()
 
  .setThumbnail("https://cdn.discordapp.com/attachments/732568563088490516/737397658511212584/giphy.gif")
  .setColor('BLACK')
  .setTitle('Gif World İstatistik')
  .addField( yükleniyor + ' Gecikme', client.ping + 'ms')
  .addField( kullanici + ' Kullanıcılar', client.guilds.reduce((a, b) => a + b.memberCount, 0))
  .addField( yıldız + ' Kanallar', client.channels.size)
  .addField( sosyal + ' Sunucular', client.guilds.size)
  .addField( ayarlar + ' Bellek Kullanımı', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
  .addField( kitaplik + ' Kütüphanesi', `Discord.js`)
  .addField( js + `  Discord.js Sürümü`, Discord.version)
  .addField( onay + ' Yapımcım', '<@>')
  .addField( kodyaziyor + ' Botun Yapılmaya Başlandığı Tarih ', '**17.06.2020**')
    
 
 
 //napıyon ?
 
 
  message.channel.send(embed);
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['botbilgi','i'], 
  permLevel: 0 
};

exports.help = {
  name: 'istatistik', 
  description: 'Botun İstatiğini Atar',
  usage: '+istatistik' 
};