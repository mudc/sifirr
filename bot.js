const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;




const deleteLogChannel = '846062780083732511';
const editLogChannel = '846062780083732510';
const picLogChannel = '855551723871535104';

client.on('ready', () => {
	client.user.setActivity('v1.0.0', {
		type: 'STREAMING',
		url: "https://www.twitch.tv/angyfish"
	});
	console.log(`Logged in as ${client.user.tag}!`);
});


client.on('messageDelete', msg => {
	if (!msg.author) return;
	const msgdelLog = client.channels.cache.find(channel => channel.id === '858302774721904671');
	var delembed = new Discord.MessageEmbed()
		.setAuthor(msg.author.username, msg.author.avatarURL())
		.setColor('#c92424')
		.setFooter(`Message ID: ${msg.id} | Author ID: ${msg.author.id}`)
		.setTimestamp()
		.addFields({
			name: '🚫 silinen mesaj:',
			value: msg.cleanContent
		}, {
			name: 'Channel',
			value: msg.channel.toString(),
			inline: true
		});

	msgdelLog.send(delembed);

});



client.on('messageUpdate', (oldmsg, newmsg) => { // Old message may be undefined
	if (!oldmsg.author) return;
	const msgeditLog = client.channels.cache.find(channel => channel.id === '858302833837473812');
	var editembed = new Discord.MessageEmbed()
		.setAuthor(newmsg.author.username, newmsg.author.avatarURL())
		.setColor('#ffda99')
		.setTimestamp()
		.setFooter(`Message ID: ${newmsg.id} | Author ID: ${newmsg.author.id}`)
		.addFields({
			name: '📄 original:',
			value: oldmsg
		}, {
			name: '📝 edit:',
			value: newmsg
		}, {
			name: 'Channel',
			value: oldmsg.channel.toString(),
			inline: true
		}, {
			name: 'Message',
			value: '[Jump To Message](' + oldmsg.url + ')',
			inline: true
		});
	msgeditLog.send(editembed);

});

var originalText = "éàçèñ"
var result = originalText.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
console.log(result)


client.on('message', msg => {
	if (msg.member.roles.cache.some(role => role.name === 'jellyfish')) {
		if (msg.content === `${prefix}ping`) {
			msg.channel.send('Pong.');
		} else if (msg.content === `${prefix}beep`) {
			msg.channel.send('Boop.');
		} else if (msg.content === `${prefix}server`) {
			msg.channel.send(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);
		}
	}
});


client.on('message', msg => {

	if (msg.author.bot) return;
	
	var myDate = new Date();
	var hrs = myDate.getHours();
	console.log(hrs);

	// Kelime kontrol: Kelimeleri boşluklarına ayırır
	let keywords = msg.content.toLowerCase();

	// Yazılan mesajda günaydın var mı kontrol eder
	let gunaydin = keywords.includes('günaydın');
	let iyiaksamlar = keywords.includes('iyi akşamlar');
	let tunaydin = keywords.includes('tünaydın');
	let yaksamlar = keywords.includes('yakşamlar');
	let iyigeceler = keywords.includes('iyi geceler')


	if (msg.content.toLowerCase() === 'yeter') {
		msg.channel.send('bence de!');
	}
	if (msg.content.toLowerCase() === 'selam') {
		msg.channel.send('selam');
	}
	if (msg.member.roles.cache.some(role => role.name === 'jellyfish')) {
		if (gunaydin === true) {
			if (hrs < 12) {
				msg.channel.send("Günaydın :city_sunset: ")
				msg.react('✅');
				msg.react('🌇');
			} else if (hrs < 17) {
				msg.channel.send("Tünaydın :city_dusk: ")
				msg.react('🚫');
				msg.react('🌆');
			} else if (hrs < 22) {
				msg.channel.send("Yakşamlar :cityscape: ")
				msg.react('🚫');
				msg.react('🏙️');
			} else if (hrs > 22 || hrs < 06) {
				msg.channel.send("İyi geceler :night_with_stars: ")
				msg.react('🚫');
				msg.react('🌃');
			}
		}

		if (tunaydin === true) {
			if (hrs < 12) {
				msg.channel.send("Günaydın :city_sunset: ")
				msg.react('🚫');
				msg.react('🌇');
			} else if (hrs < 17) {
				msg.channel.send("Tünaydın :city_dusk: ")
				msg.react('✅');
				msg.react('🌆');
			} else if (hrs < 22) {
				msg.channel.send("Yakşamlar :cityscape: ")
				msg.react('🚫');
				msg.react('🏙️');
			} else if (hrs > 22 || hrs < 06) {
				msg.channel.send("İyi geceler :night_with_stars: ")
				msg.react('🚫');
				msg.react('🌃');
			}
		}

		if (yaksamlar === true) {
			if (hrs < 12) {
				msg.channel.send("Günaydın :city_sunset: ")
				msg.react('🚫');
				msg.react('🌇');
			} else if (hrs < 17) {
				msg.channel.send("Tünaydın :city_dusk: ")
				msg.react('🚫');
				msg.react('🌆');
			} else if (hrs < 22) {
				msg.channel.send("Yakşamlar :cityscape: ")
				msg.react('✅');
				msg.react('🏙️');
				msg.channel.send('https://cdn.discordapp.com/attachments/794985310109958144/856850759282851840/Screenshot_20210609-104634_YouTube.png');
			} else if (hrs > 22 || hrs < 06) {
				msg.channel.send("İyi geceler :night_with_stars: ")
				msg.react('🚫');
				msg.react('🌃');
			}
		}

		if (iyigeceler === true) {
			if (hrs < 12) {
				msg.channel.send("Günaydın :city_sunset: ")
				msg.react('🚫');
				msg.react('🌇');
			} else if (hrs < 17) {
				msg.channel.send("Tünaydın :city_dusk: ")
				msg.react('🚫');
				msg.react('🌆');
			} else if (hrs < 22) {
				msg.channel.send("Yakşamlar :cityscape: ")
				msg.react('🚫');
				msg.react('🏙️');
			} else if (hrs > 22 || hrs < 06) {
				msg.channel.send("İyi geceler :night_with_stars: ")
				msg.react('✅');
				msg.react('🌃');
			}
		}
	}




	if (msg.member.roles.cache.some(role => role.name === 'jellyfish')) {
		if (msg.content === '<:pay:856947305592127579><:pay:856947305592127579>') {
			msg.reply('<:ticket:856947316279214111><:ticket:856947316279214111>');
		}
	}
	if (msg.content === '<:pay:856947305592127579>') {
		msg.reply('<:ticket:856947316279214111>');
	}
	if (msg.content.toLowerCase() === prefix + 'mısır') {
		msg.channel.send(':popcorn:');
	}
	if (msg.content.toLowerCase() === prefix + 'popcorn') {
		msg.channel.send(':popcorn:');
	}
	if (msg.content === '<:ticket:856947316279214111>') {
		msg.channel.send('...');
	}
	if (msg.member.roles.cache.some(role => role.name === 'jellyfish')) {
		if (msg.content.toLowerCase() === prefix + '321') {
			msg.channel.send('https://media.giphy.com/media/d9wPasV7ukkta/giphy.gif');
		}
	}
	if (msg.member.roles.cache.some(role => role.name === 'jellyfish')) {
		if (msg.content.toLowerCase() === prefix + 'theend') {
			msg.channel.send('https://tenor.com/view/sad-no-way-the-end-ending-gif-13844808');
		}
	}
	if (msg.content.toLowerCase() === prefix + 'film') {
		msg.channel.send('https://tenor.com/view/spongebob-square-pants-spongebob-patrick-squidward-popcorn-gif-3531993');
	}
	if (msg.content === '<:ticket:856947316279214111>') {
		msg.reply("`Koltuk Numaranız: " + Math.floor(Math.random() * 65 + 1) + "`");
	}

	if (msg.member.roles.cache.some(role => role.name === 'jellyfish')) {
		if (msg.content.toLowerCase() === 'yaksamlar') {
			msg.channel.send('https://cdn.discordapp.com/attachments/794985310109958144/856850759282851840/Screenshot_20210609-104634_YouTube.png');
		}
	}
	if (msg.member.roles.cache.some(role => role.name === 'jellyfish')) {
		if (msg.content.toLowerCase() === prefix + 'stats') {
			const ucount = client.users.cache.size;
			const scount = client.guilds.cache.size;
			const tcount = client.channels.cache.filter(c => c.type === 'text').size;
			const vcount = client.channels.cache.filter(c => c.type === 'voice').size;
			const stats = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setTitle('Film Komutları')
				.setDescription(`:white_check_mark: Statistics of Lobby Boy`)
				.setTimestamp()
				.setFooter('Bot gibi bot')
				.addFields({
					name: 'Server:',
					value: scount
				}, {
					name: 'Members',
					value: ucount
				}, {
					name: 'Text channels',
					value: tcount,
					inline: true
				}, {

					name: 'Voice channels',
					value: vcount,
					inline: true
				}, );

			return msg.channel.send(stats);
		}
	}

	if (msg.member.roles.cache.some(role => role.name === 'jellyfish')) {
		if (msg.content === prefix + 'salon') {
			if (Math.floor((Math.random() * 4) + 2) === 1) {
				msg.channel.send('Salon 1');
			} else if (Math.floor((Math.random() * 2) + 1) === 2) {
				msg.channel.send('Salon 2');

			}
		}
	}

	if (msg.content === prefix + 'popcorn') {
		if (Math.floor((Math.random() * 3) + 1) === 1) {
			msg.channel.send('https://tenor.com/view/popcorn-bored-gif-10365509');
		} else if (Math.floor((Math.random() * 3) + 1) === 2) {
			msg.channel.send('https://tenor.com/view/popcorn-gif-4572206');
		} else if (Math.floor((Math.random() * 3) + 1) === 3) {
			msg.channel.send('https://tenor.com/view/cine-pel%c3%adcula-palomitas-kino-popcorn-gif-12330033');
		}
	}

	if (msg.member.roles.cache.some(role => role.name === 'jellyfish')) {
		if (msg.content === "deneme1") {
			const exampleEmbed = new Discord.MessageEmbed()
				.setColor('#ffff00')
				.setTitle('Film Komutları')
				.setDescription('Kaliteli filmin yeni adresi ;) ')
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
	}

	if (msg.member.roles.cache.some(role => role.name === 'jellyfish')) {
		if (msg.content === '🎫') {
			const ticket = new Discord.MessageEmbed()
				.setColor('#ffff00')
				.setTitle('Bilet Gişesi')
				.setDescription('de  ')
				.setThumbnail('https://cdn.discordapp.com/attachments/846062779202535437/858092650606755840/felix-mooneeram-evlkOfkQ5rE-unsplash.jpg')
				.addFields({
					name: 'Koltuk Numaranız',
					value: 'Math.floor(Math.random() * 65 + 1)  12:30 https://google.com/img/exm.png'
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

			return msg.channel.send(ticket);
		}
	}

	if (msg.content === '<:ticket:856947316279214111>') {
		msg.reply("`Koltuk Numaranız: " + Math.floor(Math.random() * 65 + 1) + "`");
	}

	if (msg.member.roles.cache.some(role => role.name === 'jellyfish')) {
		if (iyiaksamlar === true) {
			if (hrs < 12 || hrs >= 24) {
				msg.channel.send("iyi akşamar :city_sunset: ")
				msg.react('🚫');
				msg.react('🌇');
			} else {
				msg.react('🌇');
				const yaksa = new Discord.MessageEmbed()
					.setColor('RANDOM')
					.setTitle('iyi akşamlar')
					.setDescription('akşamınız hayrolsun :) ')
					.setThumbnail('https://cdn.discordapp.com/attachments/846062779202535437/858085654775857162/resim_2021-06-25_234558.png')
					.addFields({
						name: 'Check',
						value: '✅',
						inline: true
					}, )
					.setTimestamp()
					.setFooter('LobbyBoy');

				return msg.channel.send(yaksa);
			}
		}
	}

	const talkedRecently = new Set();
	if (talkedRecently.has(msg.author.id)) {
		msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
	} else {

		// the user can type the command ... your command code goes here :)
	
		// Adds the user to the set so that they can't talk for a minute
		talkedRecently.add(msg.author.id);
		setTimeout(() => {
			// Removes the user from the set after a minute
			talkedRecently.delete(msg.author.id);
		}, 60000);
	}


});

client.login(process.env.BOT_TOKEN);