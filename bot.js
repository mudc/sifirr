const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const Discord = require('discord.js');


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


  if (msg.content.toLowerCase() === 'mentalpower') {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

channel.send(exampleEmbed);



client.on('message', msg => {
  if (msg .author.bot) return; 
  if (msg.content.toLowerCase() === 'yeter') {
    msg.channel.sendMessage('bence de!');
  }
  if (msg.content.toLowerCase() === 'selam') {
    msg.channel.sendMessage('selam');
  }
if (msg.content.toLowerCase() === 'günaydın') {
    hrs = hrs + 3; // GMT +3
    if (hrs <= 12 || hrs >= 24) {
        msg.channel.sendMessage('günaydın');
    } else {
        msg.channel.sendMessage('Tünaydın');
    }
}
	
if (msg.content.toLowerCase() === 'tünaydın') {
    hrs = hrs + 3; // GMT +3
    if (hrs <= 12 || hrs >= 24) {
        msg.channel.sendMessage('günaydın');
    } else {
        msg.channel.sendMessage('tünaydın');
    }
}
	
if (msg.content.toLowerCase() === 'günaydın') {
    hrs = hrs + 3; // GMT +3
    if (hrs <= 12 || hrs >= 24) {
        msg.react('✅');
	msg.react('🌞');	
    } else {
        msg.react('🚫');
    }
}
	
if (msg.content.toLowerCase() === 'tünaydın') {
    hrs = hrs + 3; // GMT +3
    if (hrs <= 12 || hrs >= 24) {
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
