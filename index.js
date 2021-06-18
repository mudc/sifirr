const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

var prefix = ayarlar.prefix; // prefix olarak > kullanılıyor. Bota komut verilirken verilen komutlar > ile başlamalı.

const kabrockieServer = '846062779169636392';
const deleteLogChannel = '855551660175917116';
const editLogChannel = '855551688470560828';
const picLogChannel = '855551723871535104';


// Bu fonksiyon verilen parametrenin sayı olup olmadığını kontrol ediyor.
function isNumeric(num) {
    return !isNaN(num)
}

// Bot hazır
bot.on('ready', () => {
    bot.user.setActivity('twitch.tv/Angyfish', { type: 'WATCHING' });
    console.log('Deneme1 kısmı');
})


// Belirli mesajlara göre yapılan işlemler burada
bot.on('message', message => {

    if (message.author.bot) return;    // Bot kendi yazdığı mesajları ignoreluyor.
    if (message.channel.type === "dm") return; // Özel mesajları ignore
    let args = message.content.substring(PREFIX.length).split(" ");

    if (message.guild.id !== kabrockieServer) {
        return;
    }


    // Attachment ile atılan her mesajı pic log kanalına atıyor.
    if ((message.attachments).array().length > 0) {

        bot.channels.get(picLogChannel).send("[" + Date(Date.now()) + "] " + message.author.id + " (" + message.author.username + "), " + message.channel + " kanalına şu eklentileri attı: ")

        var Attachment = (message.attachments).array();
        Attachment.forEach(function (attachment) {
            bot.channels.get(picLogChannel).send({ files: [attachment.url] });
        })
    }


    // Toplu mesaj silme komutu
    if (args[0] === "clear") {

        if (message.member.roles.find(r => r.name === "Mayor") || message.member.roles.find(r => r.name === "Mods")) {
            if (!args[1]) {
                return;
            }
            if (isNumeric(args[1]) === false) {
                return;
            }

            //
            var msgCount = parseInt(args[1]);
            var division;
            var remainder;

            if (msgCount < 1) return;

            // Eğer 100'den fazla mesaj silinmek isteniyorsa istenilen sayı 100'e bölünüyor.
            // Bölüm kadar 100 tane mesaj siliniyor.
            // Ardından 1 mesaj daha siliniyor. Sonuç olarak n + 1 (1 burada komut mesajı) mesaj siliniyor.
            if (msgCount > 99) {
                division = Math.floor(msgCount / 100);
                remainder = msgCount - (division * 100);

                while (division > 0) {
                    message.channel.bulkDelete(100);
                    division -= 1;
                }
                bot.channels.get(deleteLogChannel).send(message.author.id + " (" + message.author.username + ") tarafından " + message.channel + " kanalında " + msgCount + " tane mesaj silindi.")

            }

            else {
                message.channel.bulkDelete(msgCount + 1)
                    .then(bot.channels.get(deleteLogChannel).send(message.author.id + " (" + message.author.username + ") tarafından " + message.channel + " kanalında " + msgCount + " tane mesaj silindi."))
                    .catch(console.error);
            }

            if (message.guild.id !== kabrockieServer) {
                return;
            }

            return;
        }

        else {
            console.log("Reddedildi.");
            return;
        }


    }

})


// Eğer herhangi bir mesaj silinirse mesajla ilgili bilgileri ilgili kanala yazıyor
bot.on('messageDelete', function (message, channel) {

    if (message.guild.id !== kabrockieServer) {
        return;
    }

    bot.channels.get(deleteLogChannel).send("**[" + Date(Date.now()) + "]** " + message.channel + " kanalında *" + String(message.author.id) + " (" + message.author.username + ")* kişisinin mesajı silindi: " + '"' + message.content + '"');

    // Eğer mesaj sadece bir fotoğraftan vs. oluşuyorsa boş mesaj olarak gözüküyor.
    // Bu yüzden her attachmentın linkini log kanalına atıyor
    // Silinen attachmentları görmenin yolu ne yazık ki yok ancak dosya adından ne olduğu bi ihtimal anlaşılabilir
    if ((message.attachments).array().length > 0) {
        var Attachment = (message.attachments).array();
        Attachment.forEach(function (attachment) {
            bot.channels.get(picLogChannel).send(attachment.url);
        })
    }
});


// Eğer bir mesaj editlenirse loga düşüyor.
bot.on('messageUpdate', function (oldMessage, newMessage) {

    if (oldMessage.guild.id !== kabrockieServer) {
        return;
    }
    if (oldMessage.author.bot) return;  // Botun kendi mesajlarını ignore
    
    if((newMessage.attachments).array().length > 0){
        
        bot.channels.get(picLogChannel).send("**[" + Date(Date.now()) + "]** " + newMessage.author.id + " (" + newMessage.author.username + "), " + newMessage.channel + " kanalına şu eklentileri attı: ")
    
        var Attachment = (newMessage.attachments).array();
        Attachment.forEach(function (attachment) {
            bot.channels.get(picLogChannel).send({ files: [attachment.url] });
        })
    }


    /
    // Birisi bir fotoğraf linki attığında pic loguna düşmüyor
    // Çünkü link atıldığında fotoğraf hemen ortaya çıkmıyor, bir kaç saniye sonra yükleniyor
    // Aşağıdaki kod ile linkli mesajlar da pic loguna düşecek
    if((oldMessage.attachments).array().length === 0 && (newMessage.attachments).array().length > 0){

        bot.channels.get(picLogChannel).send("**[" + Date(Date.now()) + "]** " + newMessage.author.id + " (" + newMessage.author.username + "), " + newMessage.channel + " kanalına şu eklentileri attı: ")
    
        var Attachment = (newMessage.attachments).array();
        Attachment.forEach(function (attachment) {
            bot.channels.get(picLogChannel).send({ files: [attachment.url] });
        })
    }
    */


    // Atılan fotoğraf linkli mesajlar fotoğraf ortaya çıkınca editlenmiş gibi algılanıyor
    // Bu mesajlar edit loguna düşmemeli
    if (oldMessage.content === newMessage.content) return;

    bot.channels.get(editLogChannel).send("**[" + Date(Date.now()) + "]**" + oldMessage.channel + " kanalında *" + String(oldMessage.author.id) + " (" + oldMessage.author.username + ")* kişisinin mesajı düzenlendi.");
    bot.channels.get(editLogChannel).send("*Eski mesaj:* " + '"' + oldMessage.content + '"' + "\n*Yeni mesaj:* " + '"' + newMessage.content + '"');

});


bot.login(process.env.bot_token);
