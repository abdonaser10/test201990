const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$"



client.on('ready',  () => {
    console.log('تم تشغيل البوت   ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });



//================================================================================
//================================================================================

//كود لظهار صورت شخص 

client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("$avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});



// الاومر حق الفويس

client.on('message', message => {
    if(message.content.startsWith(prefix + "setVc")) {
let channel = message.content.split(" ").slice(1).join(" ")
let channelfind = message.guild.channels.find('name', `${channel}`)
if(!channel) return message.channel.send('**Please Type The Voice Channel Name Example: -setVc <Channel name>**')
if(!channelfind) return message.channel.send('**Please Type The Voice Channel Name Example: -setVc <Channel name>**')
vojson[message.guild.id] = {
stats: 'enable',
chid: channelfind.id,
guild: message.guild.id
 
}
channelfind.setName(`VoiceOnline : ${message.guild.members.filter(m => m.voiceChannel).size}`)
message.channel.send('**Done The Voice Online  Is Turned On**')
}
    if(message.content.startsWith(prefix + "vc off")) {
      message.guild.channels.find('id', `${vojson[message.guild.id].chid}`).delete()
    vojson[message.guild.id] = {
        stats: 'disable',
        chid: 'undefined',
        guild: message.guild.id
        }
        message.channel.send('**Done The Voice Online Is Turned Off**')
 
}
fs.writeFile("./vojson.json", JSON.stringify(vojson), (err) => {
    if (err) console.error(err)
  })
})
 
client.on('voiceStateUpdate', (oldMember , newMember) => {
            if(!vojson[oldMember.guild.id]) vojson[oldMember.guild.id] = {
                stats: 'disable',
                chid: 'undefined',
                guild: 'undefined'
            }
                    if (vojson[oldMember.guild.id].stats === 'enable') {
                        let ch = vojson[oldMember.guild.id].chid
                        let channel = oldMember.guild.channels.get(ch)
                        let guildid = vojson[oldMember.guild.id].guild
                        channel.setName(`VoiceOnline: ${oldMember.guild.members.filter(m => m.voiceChannel).size}`)
                    };
                    if (vojson[oldMember.guild.id].stats === 'disable') {
                    return;
                    }
        });



//================================================================================
//================================================================================


//الاوامر حق معلمات عن البوت 

client.on('message', zaid => {
    if (zaid.content === ('$bot')) {
        const bot = new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor("#36393e")
            .addField('✽ **Bot Ping** :' , `» ${Date.now() - zaid.createdTimestamp}` + ' ms', true)
            .addField('✽ **Servers** :', `» ${client.guilds.size}`, true)
            .addField('✽ **Channels** :' , `» ${client.channels.size} ` , true)
            .addField('✽ **Users** :' ,`» ${client.users.size} ` , true)
            .addField('✽ **Bot Name** :' , `» ${client.user.tag} ` , true)
            .addField('✽ **Bot Owner** :' , `» <@596778797551058964>` , true) // Change Your ID
            .setFooter(zaid.author.username, zaid.author.avatarURL)
            zaid.channel.send(bot)
    })
}
});

//================================================================================
//================================================================================




client.login(process.env.BOT_TOKEN);
