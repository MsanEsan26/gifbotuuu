     const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
    const embed = new Discord.RichEmbed()
    
    .setColor('BLACK')
    
    .addField(`<a:kyzek1334:737261609319137360> Kullanıcı Komutları <a:kyzek1334:737261609319137360>`,

     `g!**avatar** Etiketlediğiniz Kişinin Avatarını Gösterir!
     g!**sunucu-bilgi** Sunucunun İstatistiklerini Gösterir!
     g!**kullanıcı-bilgi** Etiketlediğiniz Kişinin Profilini Gösterir Veyada Kendi Profilnizi Gösterir!
     g!**ping** Botun Pingini Gösterir!
     g!**istatistik** Botun İstatistiğini Gösterir!

     <a:kyzek1334:737261609319137360> **Dikkat** <a:kyzek1334:737261609319137360>

     **Random-Gif** | **Random-Pp** Sistemini Çalıştırmak İçin ; **random-gif** Ve **random-pp** Kanallarını Oluşturmanız Yeterli Olucaktır!

     <a:kyzek1334:737261609319137360> **Linkler** <a:kyzek1334:737261609319137360>

     [Botun Destek Sunucusuna Gitmek İçin Tıkla](https://discord.gg/nb2vuts)    
     [Botu Eklemek İçin Tıkla](https://discord.com/oauth2/authorize?client_id=722699454183899227&scope=bot&permissions=3080)`)
    
         message.channel.send({embed});
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım-kullanıcı','kullanıcı-yardım','yardımkullanıcı','kullanıcıyardım'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: '',
  usage: 'kullanıcı'
};