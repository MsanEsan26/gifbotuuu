 const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  
const embed = new Discord.RichEmbed()
        
.setTitle(`${client.user.username}`) 
.addField("Yapımcım ", " <@713811743335514142> ")
.setDescription(`**Botun Davet Linki ;** [TIKLA](https://discord.com/oauth2/authorize?client_id=722699454183899227&scope=bot&permissions=3080) \n**Destek Sunucusu ;** [TIKLA](https://discord.gg/nb2vuts)`) 
.setThumbnail(client.user.avatarURL)
.setFooter(`${message.author.username} Başarıyla Davet Sistemi Kullandı!`, message.author.avatarURL)
.setColor(`BLACK`)

return message.channel.sendEmbed(embed);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet','davet-et','botu-ekle'],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: 'Gif World Bot Davet Sistemi',
  usage: 'davet'
}; 