const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'yeter') {
    msg.channel.sendMessage('bence de!');
  }
  if (msg.content === 'YETER') {
    msg.channel.sendMessage('BENCE DE!!!');
  }
  if (msg.content.toLowerCase() === 'Selam') {
    msg.reply('burdayım burda');
  }
  if (msg.content === 'günaydın') {
    msg.reply('günaydın');
  }
    if (msg.content === '!mısır') {
    msg.channel.sendMessage(':popcorn:');
  }
  if (msg.content === '!bilet') {
    msg.channel.sendMessage('https://720p-izle.com/izle/altyazi/big-hero-6.html');
  }
  if (msg.content === '!321') {
    msg.channel.sendMessage('https://tenor.com/view/movies-popcorn-cinema-eat-munch-gif-8433504');
  }
  if (msg.content === '!kapanış') {
    msg.channel.sendMessage('https://tenor.com/view/lisk-the-end-gif-10529426');
  }
  if (msg.content === 'film') {
    msg.channel.sendMessage('https://tenor.com/view/spongebob-square-pants-spongebob-patrick-squidward-popcorn-gif-3531993');
  }

  if (msg.content === '!salon') {
    if (Math.floor((Math.random () * 10) + 1) ===1) {
      msg.channel.sendMessage('Salon 1');
    }else if (Math.floor((Math.random () * 10) + 1) ===2) {
      msg.channel.sendMessage('Salon 2');
    }else if (Math.floor((Math.random () * 10) + 1) ===3) {
      msg.channel.sendMessage('Salon 3');
    }else if (Math.floor((Math.random () * 10) + 1) ===4) {
      msg.channel.sendMessage('Salon 4');
    }else if (Math.floor((Math.random () * 10) + 1) ===5) {
      msg.channel.sendMessage('Salon 5');
    }else if (Math.floor((Math.random () * 10) + 1) ===6) {
      msg.channel.sendMessage('Salon 6');
    }else if (Math.floor((Math.random () * 10) + 1) ===7) {
      msg.channel.sendMessage('Salon 7');
    }else if (Math.floor((Math.random () * 10) + 1) ===8) {
      msg.channel.sendMessage('Salon 8');
    }else if (Math.floor((Math.random () * 10) + 1) ===9) {
      msg.channel.sendMessage('Salon 9');
    }else if (Math.floor((Math.random () * 10) + 1) ===10) {
      msg.channel.sendMessage('Salon 10');
    }
  }
  
  if (msg.content === 'hazırım') {
    if (Math.floor((Math.random () * 3) + 1) ===1) {
      msg.channel.sendMessage('https://tenor.com/view/popcorn-bored-gif-10365509');
    }else if (Math.floor((Math.random () * 3) + 1) ===2) {
      msg.channel.sendMessage('https://tenor.com/view/popcorn-gif-4572206');
    }else if (Math.floor((Math.random () * 3) + 1) ===3) {
      msg.channel.sendMessage('https://tenor.com/view/cine-pel%c3%adcula-palomitas-kino-popcorn-gif-12330033');
    }
  }
  
  if (msg.content === 'geliyorum') {
    if (Math.floor((Math.random () * 12) + 1) ===1) {
      msg.channel.sendMessage('https://tenor.com/view/fail-fall-trip-cinema-popcorn-gif-11319405');
    }else if (Math.floor((Math.random () * 12) + 1) ===2) {
      msg.channel.sendMessage('https://tenor.com/view/coming-im-coming-full-house-olsen-twins-olsen-gif-5788586');
    }else if (Math.floor((Math.random () * 12) + 1) ===3) {
      msg.channel.sendMessage('https://gph.is/2KClbVk');
    }else if (Math.floor((Math.random () * 12) + 1) ===4) {
      msg.channel.sendMessage('https://tenor.com/view/funny-animals-iam-coming-cute-bear-gif-12241903');
    }else if (Math.floor((Math.random () * 12) + 1) ===5) {
      msg.channel.sendMessage('https://tenor.com/view/skipping-water-coming-home-gif-11609271');
    }else if (Math.floor((Math.random () * 12) + 1) ===6) {
      msg.channel.sendMessage('https://tenor.com/view/trailers-comedy-childrens-animated-pixar-gif-3469011');
    }else if (Math.floor((Math.random () * 12) + 1) ===7) {
      msg.channel.sendMessage('https://tenor.com/view/ima-comin-boy-simpsons-im-coming-gif-13249530');
    }else if (Math.floor((Math.random () * 12) + 1) ===8) {
      msg.channel.sendMessage('http://gph.is/13GWWao');
    }else if (Math.floor((Math.random () * 12) + 1) ===9) {
      msg.channel.sendMessage('https://media.giphy.com/media/mZ4GocL1wyGjK/giphy.gif');
    }else if (Math.floor((Math.random () * 12) + 1) ===10) {
      msg.channel.sendMessage('https://media.giphy.com/media/TFcwaBxd3lCQE/giphy.gif');
    }else if (Math.floor((Math.random () * 12) + 1) ===12) {
      msg.channel.sendMessage('https://media.giphy.com/media/3o752ocazxqllyaNfG/giphy.gif');
    }else if (Math.floor((Math.random () * 12) + 1) ===12) {
      msg.channel.sendMessage('https://media.giphy.com/media/3oxHQlIe98qO3yJKPm/giphy.gif');
    }
  }
  

});

client.login(process.env.BOT_TOKEN);
