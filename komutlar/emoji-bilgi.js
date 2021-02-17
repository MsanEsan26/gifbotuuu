const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let emojiname = args[0];

    const emoji = (message.guild.emojis.find("name", `${emojiname}`))

    if (!emojiname) { 
      
       const embed2 = new Discord.RichEmbed()

     .setColor("BLACK")
     .setDescription("Emoji İsmi Belirtmediniz?")
       
       return message.channel.send(embed2)

    }

    const embed = new Discord.RichEmbed()

    .setColor("RANDOM")

    .addField("Emojinin ismi", `${emojiname}`)

    .addField("Emoji ID", `${emoji.id}`)

    .addField("Link", `${emoji.url}`)

    .setTimestamp()

    message.channel.send(embed)

}

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ["emojibilgi"],

    permLevel: 0

}

exports.help = {

    name: 'emoji-bilgi',

}