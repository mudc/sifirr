const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');



var prefix = ayarlar.prefix;
var myDate = new Date();
var hrs = myDate.getHours();
console.log(hrs);




const angyfishServer = '794931185289265182';
const deleteLogChannel = '855551660175917116';
const editLogChannel = '855551688470560828';
const picLogChannel = '855551723871535104';


client.on('ready', () => {
  client.user.setActivity('twitch.tv/angyfish', { type: 'WATCHING' });
    console.log(`Logged in as ${client.user.tag}!`);
});



client.on('messageDelete', message => {
  console.log(`a message saying "${message.cleanContent}" was deleted from channel: ${message.channel.name}`);
  client.channels.get("855551660175917116").send(`**${message.author.username}** : "${message.cleanContent}" + _${message.author.id}_`)
});

var originalText = "éàçèñ"
var result = originalText.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
console.log(result)

client.on('message', msg => {
  if (msg .author.bot) return; 
  if (msg.content.toLowerCase() === 'deneme1') {
const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffff00')
            .setTitle('Film Komutları')
            .setDescription('Kaliteli filmin yeni adresi :wink: ')
            .addFields({
                name: 'Örnek',
                value: '!filmekle "Filmin Adı" 12:30 https://google.com/img/exm.png'
            }, {
                name: 'Film Adı',
                value: 'Filmin Adını "" arasına yazmanız gerekmekte.'
            }, {
                name: 'Film Saati',
                value: '12:30',
                inline: true
            }, {
                name: 'Film Afişi',
                value: 'Sadece Url',
                inline: true
            }, )
            .setTimestamp()
            .setFooter('Bot gibi bot');

        return msg.channel.send(exampleEmbed);
  }
});


client.on('message', msg => {
  if (msg .author.bot) return; 
  if (msg.content.toLowerCase() === 'yeter') {
    msg.channel.sendMessage('bence de!');
  }
  if (msg.content.toLowerCase() === 'selam') {
    msg.channel.sendMessage('selam');
  }
if (msg.content.toLowerCase() === 'günaydın') {
    if (hrs < 12 || hrs >= 24) {
        msg.channel.sendMessage('günaydın');
    } else {
        msg.channel.sendMessage('Tünaydın');
    }
}
	
if (msg.content.toLowerCase() === 'tünaydın') {
    if (hrs < 12 || hrs >= 24) {
        msg.channel.sendMessage('günaydın');
    } else {
        msg.channel.sendMessage('tünaydın');
    }
}
	
if (msg.content.toLowerCase() === 'günaydın') {
    if (hrs < 12 || hrs >= 24) {
        msg.react('✅');
	msg.react('🌞');	
    } else {
        msg.react('🚫');
    }
}
	
if (msg.content.toLowerCase() === 'tünaydın') {
    if (hrs < 12 || hrs >= 24) {
        msg.react('🚫');
    } else {
        msg.react('✅');
    }
}	
   if (msg.content === '<:pay:856947305592127579><:pay:856947305592127579>') {
    msg.reply('<:ticket:856947316279214111><:ticket:856947316279214111>');
  }
    if (msg.content === '<:pay:856947305592127579>') {
    msg.reply('<:ticket:856947316279214111>');
  }
    if (msg.content.toLowerCase() === prefix + 'mısır') {
    msg.channel.sendMessage(':popcorn:');
  }
   if (msg.content.toLowerCase() === prefix + 'popcorn') {
    msg.channel.sendMessage(':popcorn:');
  }
  if (msg.content === '<:ticket:856947316279214111>') {
    msg.channel.sendMessage('...');
  }
  if (msg.content.toLowerCase() === prefix + '321') {
    msg.channel.sendMessage('https://media.giphy.com/media/d9wPasV7ukkta/giphy.gif');
  }
  if (msg.content.toLowerCase() === prefix + 'theend') {
    msg.channel.sendMessage('https://tenor.com/view/lisk-the-end-gif-10529426');
  }
  if (msg.content.toLowerCase() === prefix + 'film') {
    msg.channel.sendMessage('https://tenor.com/view/spongebob-square-pants-spongebob-patrick-squidward-popcorn-gif-3531993');
  }
  if (msg.content === '<:ticket:856947316279214111>') {
    msg.reply("`Koltuk Numaranız: " + Math.floor(Math.random() * 65 +1) + "`");
  }
  if (msg.content.toLowerCase() === 'yaksamlar') {
    msg.channel.sendMessage('https://cdn.discordapp.com/attachments/794985310109958144/856850759282851840/Screenshot_20210609-104634_YouTube.png');
  }
  if (msg.content.toLowerCase() === 'yakşamlar') {
    msg.channel.sendMessage('https://cdn.discordapp.com/attachments/794985310109958144/856850759282851840/Screenshot_20210609-104634_YouTube.png');
  }

  

  if (msg.content === prefix + 'salon') {
    if (Math.floor((Math.random () * 4) + 2) ===1) {
      msg.channel.sendMessage('Salon 1');
    }else if (Math.floor((Math.random () * 2) + 1) ===2) {
      msg.channel.sendMessage('Salon 2');
    
    }
  }
  
  if (msg.content === prefix + 'popcorn') {
    if (Math.floor((Math.random () * 3) + 1) ===1) {
      msg.channel.sendMessage('https://tenor.com/view/popcorn-bored-gif-10365509');
    }else if (Math.floor((Math.random () * 3) + 1) ===2) {
      msg.channel.sendMessage('https://tenor.com/view/popcorn-gif-4572206');
    }else if (Math.floor((Math.random () * 3) + 1) ===3) {
      msg.channel.sendMessage('https://tenor.com/view/cine-pel%c3%adcula-palomitas-kino-popcorn-gif-12330033');
    }
  }




});



client.login(process.env.BOT_TOKEN);

var myDate = new Date();
var hrs = myDate.getHours();
console.log(hrs);
