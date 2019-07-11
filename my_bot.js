const Discord = require('discord.js')
const bot = new Discord.Client()
const TOKEN = 'NTgyNjEwMzY1NDM5ODAzNDAw.XOwYCQ.62sgis33jy_LfkOD-00A7uubQfo'
global.servers = {};

bot.on('ready', () => {
    console.log("Connected as " + bot.user.tag)

    bot.user.setActivity("Isteklerinizi", {type: "LISTENING"})

    bot.guilds.forEach((guild) => {
        console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id} ${channel.roles}`)
        })
    })
    //582609917295198211
    let generalChannel = bot.channels.get("582609917295198211","404017109543288872")
    const attachment = new Discord.Attachment("http://www.stickpng.com/assets/images/5845cd430b2a3b54fdbaecf8.png")
    generalChannel.send("BEN GELDIM")
})

bot.on('message', (receivedMessage) => {
    //if(receivedMessage.author == bot.user){
    //    return
    //}
    //receivedMessage.channel.send("Mesaj alındı, " + receivedMessage.author.toString() 
    //    + ": " + receivedMessage.content)
    //
    //receivedMessage.react("🤠")
    //let customEmoji = receivedMessage.guild.emojis.get("582634509183352832")
    //receivedMessage.react(customEmoji)
    let generalChannel = bot.channels.get("582609917295198211","404017109543288872","150998441927901184")

    if(receivedMessage.content.startsWith("!")){
        processCommand(receivedMessage)
    }
    if(receivedMessage.content == 'Selam'||receivedMessage.content == 'Merhaba' ||receivedMessage.content =='selam'||receivedMessage.content == 'merhaba'){
        var lyrics = Array('Hoşgeldin' + receivedMessage.author.toString() + ', nasılsın?',
                           'Naber ' + receivedMessage.author.toString(), 
                           'Ooo' + receivedMessage.author.toString() + ', hosgeldin dostum',
                           receivedMessage.author.toString() + ' teşrif etmiş.',
                           receivedMessage.author.toString() + ' hoşgeldin kankim.',
                           'Eyvallah canım '+ receivedMessage.author.toString() + ', buyur otur.',
                           "Aleyküm selam "+receivedMessage.author.toString() + ', hoşgeldin.'
                           );
        var lyric = lyrics[Math.floor(Math.random()*lyrics.length)];
        receivedMessage.channel.send(lyric);
        receivedMessage.react("🤠")
        //'Hoşgeldin' + receivedMessage.author.toString() + ", nasılsın?"
    }
})

function processCommand(receivedMessage){
    let fullCommand = receivedMessage.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0]
    //let secondaryCommand = splitCommand[1]
    let arguments = splitCommand.slice(1)

    if(primaryCommand == "yardim"){
        helpCommand(arguments, receivedMessage)
    }
    else if(primaryCommand == "komutlar"){
        receivedMessage.channel.send("`!yardim` `!carp` `!anan`")
    }
    else if(primaryCommand == "carp"){
        multiplyCommand(arguments, receivedMessage)
    }
    else if(primaryCommand =="anan"){
        const attachment2 = new Discord.Attachment('https://galeri14.uludagsozluk.com/757/anan_1418011.jpg')
        receivedMessage.channel.send(attachment2)
    }
    else if(primaryCommand =="takim"){
        //let knight = receivedMessage.author.guild.roles.find('name','knight');
        //let assassin = receivedMessage.author.guild.roles.find('name','assassin');
        //let priest = receivedMessage.author.guild.roles.find('name','priest');
        //let mage = receivedMessage.author.guild.roles.find('name','mage');
        let chance = Math.floor(Math.random() * 4);
        if(chance == 0){
            const guildMember = receivedMessage.author;
            guildMember.addRole(`knight`);
            receivedMessage.member.send("Server'a hosgeldin. Knight takiminin bir parcasi oldun.");
            receivedMessage.channel.send(receivedMessage.author + " artik knight takiminin en yeni uyesi, hosgeldin.");
        }
        if(chance == 1){
            const guildMember = receivedMessage.author;
            guildMember.addRole(`assassin`);
            receivedMessage.member.send("Server'a hosgeldin. Assassin takiminin bir parcasi oldun.");
            receivedMessage.channel.send(receivedMessage.author + " artik assassin takiminin en yeni uyesi, hosgeldin.");
        }
        if(chance == 2){
            const guildMember = receivedMessage.author;
            guildMember.addRole(`priest`);
            receivedMessage.member.send("Server'a hosgeldin. Priest takiminin bir parcasi oldun.");
            receivedMessage.channel.send(receivedMessage.author + " artik priest takiminin en yeni uyesi, hosgeldin.");
        }
        if(chance == 3){
            const guildMember = receivedMessage.author;
            guildMember.addRole(`mage`);
            receivedMessage.member.send("Server'a hosgeldin. Mage takiminin bir parcasi oldun.");
            receivedMessage.channel.send(receivedMessage.author + " artik mage takiminin en yeni uyesi, hosgeldin.");
        }
    }
    else{
        receivedMessage.channel.send("Bilinmeyen komut 😅. Şunları dene bi: `!yardim` `!komutlar` `!carp` `!anan`")
    }
}

function multiplyCommand(arguments, receivedMessage){
    if (arguments.length < 2){
        receivedMessage.channel.send("Yeterli değer yok. Şunu dene `!carp 2 10` 😄")
        return
    }
    let product = 1
    arguments.forEach((value) =>{
        product = product * parseFloat(value)
    })
    receivedMessage.channel.send("Şunların " + arguments + " çarpımı: " + product.toString())
}

function helpCommand(arguments, receivedMessage){//
    if(arguments.length == 0){
        receivedMessage.channel.send("Ne için yardım istediğini anlayamadım 🤨. Şunu dene `!komutlar`")
    }
    else{
        receivedMessage.channel.send("Şu konuda yardıma ihtiyacın var gibi görünüyor 😏: " + arguments)
        if(arguments == "instagram"){
            receivedMessage.channel.send("Instagram: berkbelcioglu")
        }
    }
}

bot.login(TOKEN)