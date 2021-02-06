const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client = commands.Bot(command_prefix = "!")

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
    msg.reply('selam');
  }
  if (msg.content === 'günaydın') {
    msg.reply('günaydın');
  }
   if (msg.content === '<:pay:682349478409142333><:pay:682349478409142333>') {
    msg.reply('<:ticket:682349478300483607><:ticket:682349478300483607>');
  }
    if (msg.content === '<:pay:682349478409142333> <:pay:682349478409142333>') {
    msg.reply('<:ticket:682349478300483607> <:ticket:682349478300483607>');
  }
    if (msg.content === '<:pay:682349478409142333>') {
    msg.reply('<:ticket:682349478300483607>');
  }
    if (msg.content === '!mısır') {
    msg.channel.sendMessage(':popcorn:');
  }
   if (msg.content === '!popcorn') {
    msg.channel.sendMessage(':popcorn:');
  }
  if (msg.content === '<:ticket:682349478300483607>') {
    msg.channel.sendMessage('...');
  }
  if (msg.content === '!321') {
    msg.channel.sendMessage('https://media.giphy.com/media/d9wPasV7ukkta/giphy.gif');
  }
  if (msg.content === '!theend') {
    msg.channel.sendMessage('https://tenor.com/view/lisk-the-end-gif-10529426');
  }
  if (msg.content === 'film') {
    msg.channel.sendMessage('https://tenor.com/view/spongebob-square-pants-spongebob-patrick-squidward-popcorn-gif-3531993');
  }
  if (msg.content === '<:ticket:682349478300483607>') {
    msg.channel.sendMessage("`Koltuk Numaranız: " + Math.floor(Math.random() * 65 +1) + "`");
  }
  
 

  
  

  if (msg.content === '!salon') {
    if (Math.floor((Math.random () * 4) + 1) ===1) {
      msg.channel.sendMessage('Salon 1');
    }else if (Math.floor((Math.random () * 4) + 1) ===2) {
      msg.channel.sendMessage('Salon 2');
    }else if (Math.floor((Math.random () * 4) + 1) ===3) {
      msg.channel.sendMessage('Salon 3');
    }else if (Math.floor((Math.random () * 4) + 1) ===4) {
      msg.channel.sendMessage('Salon 4');
    }
  }
  
  if (msg.content === '!popcorn') {
    if (Math.floor((Math.random () * 3) + 1) ===1) {
      msg.channel.sendMessage('https://tenor.com/view/popcorn-bored-gif-10365509');
    }else if (Math.floor((Math.random () * 3) + 1) ===2) {
      msg.channel.sendMessage('https://tenor.com/view/popcorn-gif-4572206');
    }else if (Math.floor((Math.random () * 3) + 1) ===3) {
      msg.channel.sendMessage('https://tenor.com/view/cine-pel%c3%adcula-palomitas-kino-popcorn-gif-12330033');
    }
  }

  
  @client.command(pass_context = True)
async def join(ctx):
	server = ctx.message.server
	if client.is_voice_connected(server):
		voice_client = client.voice_client_in(server)
		await voice_client.disconnect()
	channel = ctx.message.author.voice.voice_channel
	await client.join_voice_channel(channel)

@client.command(pass_context = True)
async def leave(ctx):
    server = ctx.message.server
    voice_client = client.voice_client_in(server)
    if voice_client != None:
    	await voice_client.disconnect()
  }

});

client.login(process.env.BOT_TOKEN);
