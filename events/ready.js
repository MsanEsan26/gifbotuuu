const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

module.exports = client => {

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} İsmi İle Giriş Yaptım!`);
  client.user.setStatus("dnd");
   var oyun = [

        " g!yardım ",
        "! Kyzek#1334 Tarafından Yapıldı !!!",
        "BAKIMDA!!!",
        "Gif Bot Artık 7/24"
     
   ];
  setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "idle"); 
        }, 2 * 9000);
}