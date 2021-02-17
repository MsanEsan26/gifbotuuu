const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
    const embed = new Discord.RichEmbed()
        .setColor('BLACK')
    .setTitle("<a:kyzek1334:737261609319137360> Gif-World Yardım Menüsü <a:kyzek1334:737261609319137360>")
    .addField(
    `Bu Bot Sizin Gif/Pp Aramanızda Yardımcı Olmak İçin Tasarlanmıştır!\n`,
    `g!**gif-ara** Yazdığınız Kelime Hakkında Gif Aratır!
     g!**man-gif** Rastgele Erkek Gifi Atar!
     g!**woman-gif** Rastgele Kadın Gifi Atar!
     g!**couple-gif** Rastgele Sevgili Gifi Atar!
     g!**baby-gif** Rastgele Bebek Gifi Atar!
     g!**animal-gif** Rastgele Hayvan Gifi Atar!

     <a:kyzek1334:737261609319137360> **Ekstra** <a:kyzek1334:737261609319137360>

     g!**yardım-kullanıcı** Kullanıcı Komutlarını Gösterir!

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
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: 'yardım'
};