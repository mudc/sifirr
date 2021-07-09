const ayarlar = require('./ayarlar.json');

const Discord = require('discord.js');
const client = new Discord.Client();

const Canvas = require('canvas');
const fs = require("fs");

var prefix = ayarlar.prefix;

const deleteLogChannel = '846062780083732511';
const editLogChannel = '846062780083732510';
const picLogChannel = '858302891000201247';

client.on('ready', () => {
	client.user.setActivity('v1.0.1', {
		type: 'STREAMING',
		url: "https://www.twitch.tv/angyfish"
	});
	console.log(`Logged in as ${client.user.tag}!`);
});

//DELLOG

client.on('messageDelete', (oldmessage, newmessage) => {
	if (!oldmessage.author) return;
	if (oldmessage.author.bot) return;
	const messagedelLog = client.channels.cache.find(channel => channel.id === '858302774721904671');
	var delembed = new Discord.MessageEmbed()
		.setAuthor(oldmessage.author.username, oldmessage.author.avatarURL())
		.setColor('#c92424')
		.setFooter(`Message ID: ${oldmessage.id} | Author ID: ${oldmessage.author.id}`)
		.setTimestamp()
		.addFields({
			name: '🚫 silinen mesaj:',
			value: oldmessage.content + '-'
		}, {
			name: 'Channel',
			value: oldmessage.channel.toString(),
			inline: true
		});

	messagedelLog.send(delembed);


});

//EDIT LOG

client.on('messageUpdate', (oldmessage, newmessage) => { // Old message may be undefined
	if (!oldmessage.author) return;
	if (oldmessage.author.bot) return;
	if (oldmessage.content === newmessage.content) return;
	const messageeditLog = client.channels.cache.find(channel => channel.id === '858302833837473812');
	var editembed = new Discord.MessageEmbed()
		.setAuthor(newmessage.author.username, newmessage.author.avatarURL())
		.setColor('#ffda99')
		.setTimestamp()
		.setFooter(`Message ID: ${newmessage.id} | Author ID: ${newmessage.author.id}`)
		.addFields({
			name: '📄 original:',
			value: oldmessage
		}, {
			name: '📝 edit:',
			value: newmessage
		}, {
			name: 'Channel',
			value: oldmessage.channel.toString(),
			inline: true
		}, {
			name: 'Message',
			value: '[Jump To Message](' + oldmessage.url + ')',
			inline: true
		});
	messageeditLog.send(editembed);

});

var originalText = "éàçèñ"
var result = originalText.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
console.log(result)


client.on('message', message => {

	if (message.author.bot) return;

	var myDate = new Date();
	var hrs = myDate.getHours();


	// Kelime kontrol: Kelimeleri boşluklarına ayırır
	let keywords = message.content.toLowerCase();

	// Yazılan mesajda günaydın var mı kontrol eder
	let gunaydin = keywords.includes('günaydın');
	let iyiaksamlar = keywords.includes('iyi akşamlar');
	let tunaydin = keywords.includes('tünaydın');
	let yaksamlar = keywords.includes('yakşamlar');
	let iyigeceler = keywords.includes('iyi geceler')

	//GÜNAYDIN

	if (message.member.roles.cache.some(role => role.name === 'jellyfish')) {
		if (gunaydin === true) {
			console.log(hrs);
			if (hrs => 5 && hrs <= 12) {
				message.channel.send("Günaydın :city_sunset: ")
				message.react('✅');
				message.react('🌇');
			} else if (hrs > 12 && hrs <= 15) {
				message.channel.send("Tünaydın :city_dusk: ")
				message.react('🚫');
				message.react('🌆');
			} else if (hrs > 15 && hrs <= 21) {
				message.channel.send("Yakşamlar :cityscape: ")
				message.react('🚫');
				message.react('🏙️');
			} else if (hrs => 21 || hrs < 05) {
				message.channel.send("İyi geceler :night_with_stars: ")
				message.react('🚫');
				message.react('🌃');
			}
		}

		if (tunaydin === true) {
			console.log(hrs);
			if (hrs > 5 && hrs < 12) {
				message.channel.send("Günaydın :city_sunset: ")
				message.react('🚫');
				message.react('🌇');
			} else if (hrs > 12 && hrs < 15) {
				message.channel.send("Tünaydın :city_dusk: ")
				message.react('✅');
				message.react('🌆');
			} else if (hrs > 15 && hrs < 21) {
				message.channel.send("Yakşamlar :cityscape: ")
				message.react('🚫');
				message.react('🏙️');
			} else if (hrs > 21 || hrs < 05) {
				message.channel.send("İyi geceler :night_with_stars: ")
				message.react('🚫');
				message.react('🌃');
			}
		}

		if (yaksamlar === true) {
			console.log(hrs);
			if (hrs > 5 && hrs < 12) {
				message.channel.send("Günaydın :city_sunset: ")
				message.react('🚫');
				message.react('🌇');
			} else if (hrs > 12 && hrs < 15) {
				message.channel.send("Tünaydın :city_dusk: ")
				message.react('🚫');
				message.react('🌆');
			} else if (hrs > 15 && hrs < 21) {
				message.channel.send("Yakşamlar :cityscape: ")
				message.react('✅');
				message.react('🏙️');
				message.channel.send('https://cdn.discordapp.com/attachments/794985310109958144/856850759282851840/Screenshot_20210609-104634_YouTube.png');
			} else if (hrs > 21 || hrs < 05) {
				message.channel.send("İyi geceler :night_with_stars: ")
				message.react('🚫');
				message.react('🌃');
			}
		}

		if (iyigeceler === true) {
			console.log(hrs);
			if (hrs > 5 && hrs < 12) {
				message.channel.send("Günaydın :city_sunset: ")
				message.react('🚫');
				message.react('🌇');
			} else if (hrs > 12 && hrs < 15) {
				message.channel.send("Tünaydın :city_dusk: ")
				message.react('🚫');
				message.react('🌆');
			} else if (hrs > 15 && hrs < 21) {
				message.channel.send("Yakşamlar :cityscape: ")
				message.react('🚫');
				message.react('🏙️');
			} else if (hrs > 21 || hrs < 05) {
				message.channel.send("İyi geceler :night_with_stars: ")
				message.react('✅');
				message.react('🌃');
			}
		}


		if (iyiaksamlar === true) {
			console.log(hrs);
			if (hrs > 5 && hrs < 12) {
				message.channel.send("iyi akşamar :city_sunset: ")
				message.react('🚫');
				message.react('🌇');
			} else {
				message.react('🌇');
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

				return message.channel.send(yaksa);
			}
		}
	}

	if (message.content.toLowerCase() === 'yeter') {
		message.channel.send('bence de!');
	}
	if (message.content.toLowerCase() === 'selam') {
		message.channel.send('selam');
	}

	//SİNEMA KODLARI

	if (message.member.roles.cache.some(role => role.name === 'jellyfish') || message.member.roles.cache.some(role => role.name === 'movie') || message.member.roles.cache.some(role => role.name === 'angyfish')) {
		if (message.content === '<:pay:856947305592127579>') {
			message.reply('<:ticket:856947316279214111>');
		}
		if (message.content.toLowerCase() === prefix + 'mısır') {
			message.channel.send(':popcorn:');
		}
		if (message.content.toLowerCase() === prefix + 'popcorn') {
			message.channel.send(':popcorn:');
		}
		if (message.content === '<:ticket:856947316279214111>') {
			message.channel.send('...');
		}
		if (message.content.toLowerCase() === prefix + 'film') {
			message.channel.send('https://tenor.com/view/spongebob-square-pants-spongebob-patrick-squidward-popcorn-gif-3531993');
		}
		// if (message.content === '<:ticket:856947316279214111>') {
		// 	message.reply("`Koltuk Numaranız: " + Math.floor(Math.random() * 65 + 1) + "`");
		// }
		if (message.content === prefix + 'popcorn') {
			if (Math.floor((Math.random() * 3) + 1) === 1) {
				message.channel.send('https://tenor.com/view/popcorn-bored-gif-10365509');
			} else if (Math.floor((Math.random() * 3) + 1) === 2) {
				message.channel.send('https://tenor.com/view/popcorn-gif-4572206');
			} else if (Math.floor((Math.random() * 3) + 1) === 3) {
				message.channel.send('https://tenor.com/view/cine-pel%c3%adcula-palomitas-kino-popcorn-gif-12330033');
			}
		}
		if (message.content === '<:ticket:856947316279214111>') {
			const tckt = Math.floor(Math.random() * 55 + 1);

			const filmadi = "Kung Fu Panda";
			const saati = "21:30"
			const filmafisi = "https://cdn.mee6.xyz/guild-images/794931185289265182/0128938b8e0d0da77183a35c87abdc027782164179209bafdfaa67c3bb0ed7b9.png"

			const kanalID = "856958008935317564"

			salonBilet(tckt, filmadi, saati, kanalID, filmafisi);
		}


	}

	// MODS

	if (message.member.roles.cache.some(role => role.name === 'jellyfish') || message.member.roles.cache.some(role => role.name === 'angyfish')) {
		if (message.content === '<:pay:856947305592127579><:pay:856947305592127579>') {
			message.reply('<:ticket:856947316279214111><:ticket:856947316279214111>');
		}
		if (message.content.toLowerCase() === prefix + '321') {
			message.delete({
				timeout: 0
			});
			message.channel.send('https://media.giphy.com/media/d9wPasV7ukkta/giphy.gif');
		}
		if (message.content.toLowerCase() === prefix + 'theend') {
			message.delete({
				timeout: 0
			});
			message.channel.send('https://tenor.com/view/sad-no-way-the-end-ending-gif-13844808');
		}
		if (message.content.toLowerCase() === 'yaksamlar') {
			message.delete({
				timeout: 0
			});
			message.channel.send('https://cdn.discordapp.com/attachments/794985310109958144/856850759282851840/Screenshot_20210609-104634_YouTube.png');
		}
		if (message.content === prefix + 'bilet') {
			message.reply("`Koltuk Numaranız: " + Math.floor(Math.random() * 65 + 1) + "`");
		}

		/*if (message.content === prefix + 'bunny') {
			const roleId = "812004859439218758"
			const role2 = new Discord.MessageEmbed()
			.setTitle ("Valorant Roster") 
			.setDescription (message.guild.roles.cache.get(roleId).members.cache.filter(member => !member.user.bot).size);
			 
				
				
			return message.channel.send(role2);

		
		}
*/
		if (message.content === prefix + 'ping') {
			const discordPing = message.client.ws.ping
			message.channel.send('...').then(mp => {
				const ping = mp.createdTimestamp - message.createdTimestamp;
				const pingem = new Discord.MessageEmbed()

					.setAuthor(`Your ping is ${ping}`)
					.setColor("Your Color")
					.addFields({
						name: 'Server Ping:',
						value: discordPing
					}, {
						name: 'Your Ping',
						value: ping
					}, );

				mp.edit(pingem)

			});
		}




		//m.edit(`discord gecikmesi: ${discordPing} ms\nBot Gecikmesi: ${ping} ms`);

		/* ROL ÜYE SAYISI
				if (message.content.toLowerCase() === prefix + 'u') {
		let guild =  message.guild.members.fetch();
		let roleID = '811648406337880134';
		let memberCount = message.guild.roles.cache.get(roleID).members.map(m=>m.user.tag);
		message.channel.send(memberCount + " members have this role!");
		}
		if (message.content.toLowerCase() === prefix + 'u') {
			let guild = message.guild.members.fetch();
			let roleID = '811648406337880134';
			let memberCount = guild.roles.cache.get(roleID).members.size;
			message.channel.send(memberCount + " members have this role!");
		}
		*/



		if (message.content.toLowerCase() === prefix + 'stats') {
			const ucount = client.users.cache.size;
			const mcount = client.guilds.cache.get('794931185289265182').members.cache.filter(member => !member.user.bot).size;
			const scount = client.guilds.cache.size;
			const tcount = client.channels.cache.filter(c => c.type === 'text').size;
			const vcount = client.channels.cache.filter(c => c.type === 'voice').size;
			const discordPing = message.client.ws.ping;
			message.channel.send('...').then(m => {
				const ping = m.createdTimestamp - message.createdTimestamp;
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
					}, {
						name: 'Members',
						value: ucount,
						inline: true,
					}, {
						name: 'Angys Members',
						value: mcount,
						inline: true,
					}, {
						name: '\u200B',
						value: '\u200B',
						inline: false,
					}, {
						name: 'Server Ping:',
						value: discordPing,
						inline: true
					}, {
						name: 'LobbyBoy Ping',
						value: ping,
						inline: true,
					}, {
						name: '\u200B',
						value: '\u200B',
						inline: false,
					}, {
						name: 'Text channels',
						value: tcount,
						inline: true,
					}, {

						name: 'Voice channels',
						value: vcount,
						inline: true
					}, );

				return m.edit(stats)
			});
		}

		if (message.content === prefix + 'salon') {
			if (Math.floor((Math.random() * 4) + 2) === 1) {
				message.channel.send('Salon 1');
			} else if (Math.floor((Math.random() * 2) + 1) === 2) {
				message.channel.send('Salon 2');

			}
		}



		if (message.content === "deneme1") {
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

			return message.channel.send(exampleEmbed);
		}


		try {} catch (error) {
			console.error(error);
			client.channels.cache.get('860218589244162080').send("error");
			// expected output: ReferenceError: nonExistentFunction is not defined
			// Note - error messages will vary depending on browser
		}

	}



	/*
		const talkedRecently = new Set();
		if (talkedRecently.has(message.author.id)) {
			message.channel.send("Wait 1 minute before getting typing this again. - " + message.author);
		} else {

			// the user can type the command ... your command code goes here :)
		
			// Adds the user to the set so that they can't talk for a minute
			talkedRecently.add(message.author.id);
			setTimeout(() => {
				// Removes the user from the set after a minute
				talkedRecently.delete(message.author.id);
			}, 60000);
		}
	*/


});


async function salonBilet(koltuk, filmadi, saati, kanalID, filmafisi) {
	var canvas = Canvas.createCanvas(340, 408);
	var salon = canvas.getContext('2d');

	const background = await Canvas.loadImage('./koltukbg.png');
	salon.drawImage(background, 0, 0, 340, 408);

	salon.font = '65px "Tahoma"';
	salon.textAlign = "center";
	salon.fillStyle = "rgba(255, 255, 255, 0.8)";
	salon.fillText(koltuk, 167, 280);

	b64 = canvas.toDataURL();
	base64Data = b64.replace(/^data:image\/png;base64,/, "");

	fs.writeFile("saloon.png", base64Data, 'base64', function (err) {
		if (err == null) {
			
            const file = new Discord.MessageAttachment('./saloon.png');

            const exampleEmbed = {
				color: 0xffff00,
				title: 'Bilet Gişesi',
				description: 'Hoşgeldiniz',
				thumbnail: {
					url: filmafisi,
				},
				fields: [
					
					{
						name: 'Film Adı',
						value: filmadi,
						inline: false,
					},
					{
						name: 'Film Saati',
						value: saati,
						inline: true,
					},
				],
				image: {
					url: 'attachment://saloon.png',
				},
				timestamp: new Date(),
				footer: {
					text: 'ZeldanBanlansın',
				}
			};
			

			client.channels.cache.get(kanalID).send({
                    files: [file], embed: exampleEmbed
            });
            
			console.log("Resim gönderildi");
		}
	});

}


client.login(process.env.BOT_TOKEN);