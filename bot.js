const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;




const deleteLogChannel = '846062780083732511';
const editLogChannel = '846062780083732510';
const picLogChannel = '858302891000201247';

client.on('ready', () => {
	client.user.setActivity('v1.0.0', {
		type: 'STREAMING',
		url: "https://www.twitch.tv/angyfish"
	});
	console.log(`Logged in as ${client.user.tag}!`);
});

//DELLOG

client.on('messageDelete', (oldMessage, newMessage) => {
	if (!oldMessage.author) return;
	const MessagedelLog = client.channels.cache.find(channel => channel.id === '858302774721904671');
	var delembed = new Discord.MessageEmbed()
		.setAuthor(oldMessage.author.username, oldMessage.author.avatarURL())
		.setColor('#c92424')
		.setFooter(`Message ID: ${oldMessage.id} | Author ID: ${oldMessage.author.id}`)
		.setTimestamp()
		.addFields({
			name: '🚫 silinen mesaj:',
			value: oldMessage.content + '-'
		}, {
			name: 'Channel',
			value: oldMessage.channel.toString(),
			inline: true
		});

	MessagedelLog.send(delembed);


});

//EDIT LOG

client.on('messageUpdate', (oldMessage, newMessage) => { // Old message may be undefined
	if (!oldMessage.author) return;
	if (oldMessage.content === newMessage.content) return;
	const MessageeditLog = client.channels.cache.find(channel => channel.id === '858302833837473812');
	var editembed = new Discord.MessageEmbed()
		.setAuthor(newMessage.author.username, newMessage.author.avatarURL())
		.setColor('#ffda99')
		.setTimestamp()
		.setFooter(`Message ID: ${newMessage.id} | Author ID: ${newMessage.author.id}`)
		.addFields({
			name: '📄 original:',
			value: oldMessage
		}, {
			name: '📝 edit:',
			value: newMessage
		}, {
			name: 'Channel',
			value: oldMessage.channel.toString(),
			inline: true
		}, {
			name: 'Message',
			value: '[Jump To Message](' + oldMessage.url + ')',
			inline: true
		});
	MessageeditLog.send(editembed);

});

var originalText = "éàçèñ"
var result = originalText.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
console.log(result)





client.on('message', Message => {

	if (Message.author.bot) return;
	
	var myDate = new Date();
	var hrs = myDate.getHours();


	// Kelime kontrol: Kelimeleri boşluklarına ayırır
	let keywords = Message.content.toLowerCase();

	// Yazılan mesajda günaydın var mı kontrol eder
	let gunaydin = keywords.includes('günaydın');
	let iyiaksamlar = keywords.includes('iyi akşamlar');
	let tunaydin = keywords.includes('tünaydın');
	let yaksamlar = keywords.includes('yakşamlar');
	let iyigeceler = keywords.includes('iyi geceler')

//GÜNAYDIN

	if (Message.member.roles.cache.some(role => role.name === 'jellyfish')) {
		if (gunaydin === true) {
			console.log(hrs);
			if (hrs < 12) {
				Message.channel.send("Günaydın :city_sunset: ")
				Message.react('✅');
				Message.react('🌇');
			} else if (hrs < 17) {
				Message.channel.send("Tünaydın :city_dusk: ")
				Message.react('🚫');
				Message.react('🌆');
			} else if (hrs < 22) {
				Message.channel.send("Yakşamlar :cityscape: ")
				Message.react('🚫');
				Message.react('🏙️');
			} else if (hrs > 22 || hrs < 06) {
				Message.channel.send("İyi geceler :night_with_stars: ")
				Message.react('🚫');
				Message.react('🌃');
			}
		}

		if (tunaydin === true) {
			console.log(hrs);
			if (hrs < 12) {
				Message.channel.send("Günaydın :city_sunset: ")
				Message.react('🚫');
				Message.react('🌇');
			} else if (hrs < 17) {
				Message.channel.send("Tünaydın :city_dusk: ")
				Message.react('✅');
				Message.react('🌆');
			} else if (hrs < 22) {
				Message.channel.send("Yakşamlar :cityscape: ")
				Message.react('🚫');
				Message.react('🏙️');
			} else if (hrs > 22 || hrs < 06) {
				Message.channel.send("İyi geceler :night_with_stars: ")
				Message.react('🚫');
				Message.react('🌃');
			}
		}

		if (yaksamlar === true) {
			console.log(hrs);
			if (hrs < 12) {
				Message.channel.send("Günaydın :city_sunset: ")
				Message.react('🚫');
				Message.react('🌇');
			} else if (hrs < 17) {
				Message.channel.send("Tünaydın :city_dusk: ")
				Message.react('🚫');
				Message.react('🌆');
			} else if (hrs < 22) {
				Message.channel.send("Yakşamlar :cityscape: ")
				Message.react('✅');
				Message.react('🏙️');
				Message.channel.send('https://cdn.discordapp.com/attachments/794985310109958144/856850759282851840/Screenshot_20210609-104634_YouTube.png');
			} else if (hrs > 22 || hrs < 06) {
				Message.channel.send("İyi geceler :night_with_stars: ")
				Message.react('🚫');
				Message.react('🌃');
			}
		}

		if (iyigeceler === true) {
			console.log(hrs);
			if (hrs < 12) {
				Message.channel.send("Günaydın :city_sunset: ")
				Message.react('🚫');
				Message.react('🌇');
			} else if (hrs < 17) {
				Message.channel.send("Tünaydın :city_dusk: ")
				Message.react('🚫');
				Message.react('🌆');
			} else if (hrs < 22) {
				Message.channel.send("Yakşamlar :cityscape: ")
				Message.react('🚫');
				Message.react('🏙️');
			} else if (hrs > 22 || hrs < 06) {
				Message.channel.send("İyi geceler :night_with_stars: ")
				Message.react('✅');
				Message.react('🌃');
			}
		}
	

		if (iyiaksamlar === true) {
			console.log(hrs);
			if (hrs < 12 || hrs >= 24) {
				Message.channel.send("iyi akşamar :city_sunset: ")
				Message.react('🚫');
				Message.react('🌇');
			} else {
				Message.react('🌇');
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

				return Message.channel.send(yaksa);
			}
		}
	}

	if (Message.content.toLowerCase() === 'yeter') {
		Message.channel.send('bence de!');
	}
	if (Message.content.toLowerCase() === 'selam') {
		Message.channel.send('selam');
	}
	
//SİNEMA KODLARI

if (Message.member.roles.cache.some(role => role.name === 'jellyfish') || Message.member.roles.cache.some(role => role.name === 'movie') || Message.member.roles.cache.some(role => role.name === 'angyfish')) {
		if (Message.content === '<:pay:856947305592127579>') {
			Message.reply('<:ticket:856947316279214111>');
		}
		if (Message.content.toLowerCase() === prefix + 'mısır') {
			Message.channel.send(':popcorn:');
		}
		if (Message.content.toLowerCase() === prefix + 'popcorn') {
			Message.channel.send(':popcorn:');
		}
		if (Message.content === '<:ticket:856947316279214111>') {
			Message.channel.send('...');
		}
		if (Message.content.toLowerCase() === prefix + 'film') {
			Message.channel.send('https://tenor.com/view/spongebob-square-pants-spongebob-patrick-squidward-popcorn-gif-3531993');
		}
		if (Message.content === '<:ticket:856947316279214111>') {
			Message.reply("`Koltuk Numaranız: " + Math.floor(Math.random() * 65 + 1) + "`");
		}
		if (Message.content === prefix + 'popcorn') {
			if (Math.floor((Math.random() * 3) + 1) === 1) {
				Message.channel.send('https://tenor.com/view/popcorn-bored-gif-10365509');
			} else if (Math.floor((Math.random() * 3) + 1) === 2) {
				Message.channel.send('https://tenor.com/view/popcorn-gif-4572206');
			} else if (Math.floor((Math.random() * 3) + 1) === 3) {
				Message.channel.send('https://tenor.com/view/cine-pel%c3%adcula-palomitas-kino-popcorn-gif-12330033');
			}
		}
}

// MODS

if (Message.member.roles.cache.some(role => role.name === 'jellyfish') || Message.member.roles.cache.some(role => role.name === 'angyfish')) {
		if (Message.content === '<:pay:856947305592127579><:pay:856947305592127579>') {
			Message.reply('<:ticket:856947316279214111><:ticket:856947316279214111>');
		}
		if (Message.content.toLowerCase() === prefix + '321') {
			Message.delete(1000);
			Message.channel.send('https://media.giphy.com/media/d9wPasV7ukkta/giphy.gif');
		}
		if (Message.content.toLowerCase() === prefix + 'theend') {
			Message.channel.send('https://tenor.com/view/sad-no-way-the-end-ending-gif-13844808');
		}
		if (Message.content.toLowerCase() === 'yaksamlar') {
			Message.channel.send('https://cdn.discordapp.com/attachments/794985310109958144/856850759282851840/Screenshot_20210609-104634_YouTube.png');
		}
		if (Message.content === prefix + 'bilet') {
			Message.reply("`Koltuk Numaranız: " + Math.floor(Math.random() * 65 + 1) + "`");
		}
		
		/*if (Message.content === prefix + 'bunny') {
			const roleId = "812004859439218758"
			const role2 = new Discord.MessageEmbed()
			.setTitle ("Valorant Roster") 
			.setDescription (Message.guild.roles.cache.get(roleId).members.cache.filter(member => !member.user.bot).size);
			 
				
				
			return Message.channel.send(role2);

		
		}
*/
		if (Message.content === prefix + 'ping') {
			const discordPing = Message.client.ws.ping
			Message.channel.send('...').then(mp =>{
				const ping = mp.createdTimestamp - Message.createdTimestamp;
				const pingem = new Discord.MessageEmbed()
				
				.setAuthor(`Your ping is ${ping}`)
				.setColor("Your Color")
				.addFields({
					name: 'Server Ping:',
					value: discordPing
				},{
					name: 'Your Ping',
					value: ping
				},);
				
				mp.edit(pingem)

			});
		}
		
		

		
		//m.edit(`discord gecikmesi: ${discordPing} ms\nBot Gecikmesi: ${ping} ms`);

		/* ROL ÜYE SAYISI
				if (Message.content.toLowerCase() === prefix + 'u') {
		let guild =  Message.guild.members.fetch();
		let roleID = '811648406337880134';
		let memberCount = Message.guild.roles.cache.get(roleID).members.map(m=>m.user.tag);
		Message.channel.send(memberCount + " members have this role!");
		}
		if (Message.content.toLowerCase() === prefix + 'u') {
			let guild = Message.guild.members.fetch();
			let roleID = '811648406337880134';
			let memberCount = guild.roles.cache.get(roleID).members.size;
			Message.channel.send(memberCount + " members have this role!");
		}
		*/
		


		if (Message.content.toLowerCase() === prefix + 'stats') {
			const ucount = client.users.cache.size;
			const mcount = client.guilds.cache.get('794931185289265182').members.cache.filter(member => !member.user.bot).size;
			const scount = client.guilds.cache.size;
			const tcount = client.channels.cache.filter(c => c.type === 'text').size;
			const vcount = client.channels.cache.filter(c => c.type === 'voice').size;
			const discordPing = Message.client.ws.ping;
			Message.channel.send('...').then(m =>{
			const ping = m.createdTimestamp - Message.createdTimestamp;
			const stats = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setTitle('Film Komutları')
				.setDescription(`:white_check_mark: Statistics of Lobby Boy`)
				.setTimestamp()
				.setFooter('lobbyboy')
				.setThumbnail('https://cdn.discordapp.com/attachments/858275837417881623/860200933463949312/zero.png')
				.addFields({
					name: 'Server:',
					value: scount,
					inline: true
				},{
					name: 'Members',
					value: ucount,
					inline: true,
				},{
					name: 'Angys Members',
					value: mcount,
					inline: true,
				},{ 
					name: '\u200B', 
					value: '\u200B',
					inline: false,
				},{
					name: 'Server Ping:',
					value: discordPing,
					inline: true
				},{
					name: 'LobbyBoy Ping',
					value: ping,
					inline: true,
				},{ 
					name: '\u200B', 
					value: '\u200B',
					inline: false, 
				},{
					name: 'Text channels',
					value: tcount,
					inline: true,
				},{

					name: 'Voice channels',
					value: vcount,
					inline: true
				},);

			return m.edit(stats)
		});
		}
		
		if (Message.content === prefix + 'salon') {
			if (Math.floor((Math.random() * 4) + 2) === 1) {
				Message.channel.send('Salon 1');
			} else if (Math.floor((Math.random() * 2) + 1) === 2) {
				Message.channel.send('Salon 2');

			}
		}
		
		
		
		if (Message.content === "deneme1") {
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

			return Message.channel.send(exampleEmbed);
		}
		if (Message.content === '🎫') {
			const tckt = Math.floor(Math.random() * 65 + 1);
			const ticket = new Discord.MessageEmbed()
				.setColor('#ffff00')
				.setTitle('Bilet Gişesi')
				.setDescription('de  ')
				.setThumbnail('https://cdn.discordapp.com/attachments/846062779202535437/858092650606755840/felix-mooneeram-evlkOfkQ5rE-unsplash.jpg')
				.addFields({
					name: 'Koltuk Numaranız',
					value: tckt
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

			return Message.channel.send(ticket);
		}
		
		try {
		  } catch (error) {
			console.error(error);
			client.channels.cache.get('860218589244162080').send("error");
			// expected output: ReferenceError: nonExistentFunction is not defined
			// Note - error messages will vary depending on browser
		  } 

	}



/*
	const talkedRecently = new Set();
	if (talkedRecently.has(Message.author.id)) {
		Message.channel.send("Wait 1 minute before getting typing this again. - " + Message.author);
	} else {

		// the user can type the command ... your command code goes here :)
	
		// Adds the user to the set so that they can't talk for a minute
		talkedRecently.add(Message.author.id);
		setTimeout(() => {
			// Removes the user from the set after a minute
			talkedRecently.delete(Message.author.id);
		}, 60000);
	}
*/


});

client.login(process.env.BOT_TOKEN);