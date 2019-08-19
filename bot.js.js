const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$"






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

//الاوامر حق منع التهكير . 

                  let banse = new Set();
                  client.on('guildBanAdd', function(guild) {
                    guild.fetchAuditLogs().then(logs => {
                      const ser = logs.entries.first().executor;
                      if(!bane[ser.id+guild.id]) bane[ser.id+guild.id] = {
                        bans: 2
                      }
                      let boner = bane[ser.id+guild.id]
                  banse.add(ser.id)
                  boner.bans = Math.floor(boner.bans+1)
                 
                 
                  setTimeout(() => {
                    boner.bans = 2
                    banse.delete(ser.id)
                  },8000)
                 
                  if(boner.bans > 2) {
                    let roles = guild.members.get(ser.id).roles.array()
                  guild.members.get(ser.id).removeRoles(roles)
                  }
                 
                      })
                      fs.writeFile('./alpha.json', JSON.stringify(bane), (err) => {
                  if (err) console.error(err);
                  })
                 
                  })
                  client.on('guildMemberRemove', (u) => {
                      u.guild.fetchAuditLogs().then( s => {
                          var ss = s.entries.first();
                          if (ss.action == `MEMBER_KICK`) {
                          if (!data[ss.executor.id]) {
                              data[ss.executor.id] = {
                              time : 1
                            };
                        } else {  
                            data[ss.executor.id].time+=1
                        };
                  data[ss.executor.id].time = 0
                  u.guild.members.get(ss.executor.id).roles.forEach(r => {
                                  r.edit({
                                      permissions : []
                                  });
                                  data[ss.executor.id].time = 0
                              });
                          setTimeout(function(){
                              if (data[ss.executor.id].time <= 3) {
                                  data[ss.executor.id].time = 0
                              }
                          })
                      };
                      });
                      fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
                          if (err) console.log(err.message);
                      });
                  });
                  client.on('roleDelete', (u) => {
                      u.guild.fetchAuditLogs().then( s => {
                          var ss = s.entries.first();
                          if (ss.action == `ROLE_DELETE`) {
                          if (!data[ss.executor.id]) {
                              data[ss.executor.id] = {
                              time : 1
                            };
                        } else {
                            data[ss.executor.id].time+=1
                        };
                  data[ss.executor.id].time = 0
                  u.guild.members.get(ss.executor.id).roles.forEach(r => {
                                  r.edit({
                                      permissions : []
                                  });
                                  data[ss.executor.id].time = 0
                              });
                          setTimeout(function(){
                              if (data[ss.executor.id].time <= 3) {
                                  data[ss.executor.id].time = 0
                              }
                          },60000)
                      };
                      });
                      fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
                          if (err) console.log(err.message);
                      });
                  });
                  client.on('channelDelete', (u) => {
                      u.guild.fetchAuditLogs().then( s => {
                          var ss = s.entries.first();
                          if (ss.action == `CHANNEL_DELETE`) {
                          if (!data[ss.executor.id]) {
                              data[ss.executor.id] = {
                              time : 1
                            };
                        } else {
                            data[ss.executor.id].time+=1
                        };
                  data[ss.executor.id].time = 0
                  u.guild.members.get(ss.executor.id).roles.forEach(r => {
                                  r.edit({
                                      permissions : []
                                  });
                                  data[ss.executor.id].time = 0
                              });
                          setTimeout(function(){
                              if (data[ss.executor.id].time <= 3) {
                                  data[ss.executor.id].time = 0
                              }
                          })
                      };
                      });
                      fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
                          if (err) console.log(err.message);
                      });
                  })
 
                let antihack = JSON.parse(fs.readFileSync('./antihack.json' , 'utf8'));//require antihack.json file
                client.on('message', message => {
                    if(message.content.startsWith("Antihack")) {
                        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
                        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
                        if(!antihack[message.guild.id]) antihack[message.guild.id] = {
                          onoff: 'Off'
                        }
                          if(antihack[message.guild.id].onoff === 'Off') return [message.channel.send(`**✅ The AntiHack Is __𝐎𝐍__ !**`), antihack[message.guild.id].onoff = 'On']
                          if(antihack[message.guild.id].onoff === 'On') return [message.channel.send(`**⛔ The AntiHack Is __𝐎𝐅𝐅__ !**`), antihack[message.guild.id].onoff = 'Off']
                          fs.writeFile("./antihack.json", JSON.stringify(antihack), (err) => {
                            if (err) console.error(err)
                            .catch(err => {
                              console.error(err);
                          });
                            });
                          }
                 
                        })
 
                  let bane = JSON.parse(fs.readFileSync('./data1.json' , 'utf8'));//require data1.json
                  client.on('guildBanAdd', function(guild) {
                    guild.fetchAuditLogs().then(logs => {
                      const ser = logs.entries.first().executor;
                      if(!bane[ser.id+guild.id]) bane[ser.id+guild.id] = {
                        bans: 2
                      }
                      if(antihack[message.guild.id].onoff === 'Off') return;
                      let boner = bane[ser.id+guild.id]
                  banse.add(ser.id)
                  boner.bans = Math.floor(boner.bans+1)
                 
                 
                  setTimeout(() => {
                    boner.bans = 2
                    banse.delete(ser.id)
                  },8000)
                 
                  if(boner.bans > 2) {
                    let roles = guild.members.get(ser.id).roles.array()
                  guild.members.get(ser.id).removeRoles(roles)
                  }
                 
                      })
                      fs.writeFile('./data1.json', JSON.stringify(bane), (err) => {
                  if (err) console.error(err);
                  })
                 
                  })
                  client.on('guildMemberRemove', (u) => {
                      u.guild.fetchAuditLogs().then( s => {
                          var ss = s.entries.first();
                          if (ss.action == `MEMBER_KICK`) {
                          if (!data[ss.executor.id]) {
                              data[ss.executor.id] = {
                              time : 1
                            };
                            if(antihack[message.guild.id].onoff === 'Off') return;
                 
                        } else {  
                            data[ss.executor.id].time+=1
                        };
                        if(antihack[message.guild.id].onoff === 'Off') return;
                  data[ss.executor.id].time = 0
                  u.guild.members.get(ss.executor.id).roles.forEach(r => {
                                  r.edit({
                                      permissions : []
                                  });
                                  data[ss.executor.id].time = 0
                              });
                          setTimeout(function(){
                              if (data[ss.executor.id].time <= 3) {
                                  data[ss.executor.id].time = 0
                              }
                          })
                      };
                      });
                      fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
                          if (err) console.log(err.message);
                      });
                  });
                  client.on('roleDelete', (u) => {
                      u.guild.fetchAuditLogs().then( s => {
                          var ss = s.entries.first();
                          if (ss.action == `ROLE_DELETE`) {
                          if (!data[ss.executor.id]) {
                              data[ss.executor.id] = {
                              time : 1
                            };
                            if(antihack[message.guild.id].onoff === 'Off') return;
                 
                        } else {
                            data[ss.executor.id].time+=1
                        };
                        if(antihack[message.guild.id].onoff === 'Off') return;
                 
                  data[ss.executor.id].time = 0
                  u.guild.members.get(ss.executor.id).roles.forEach(r => {
                                  r.edit({
                                      permissions : []
                                  });
                                  data[ss.executor.id].time = 0
                              });
                          setTimeout(function(){
                              if (data[ss.executor.id].time <= 3) {
                                  data[ss.executor.id].time = 0
                              }
                          },60000)
                      };
                      });
                      fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
                          if (err) console.log(err.message);
                      });
                  });
                  client.on('channelDelete', (u) => {
                      u.guild.fetchAuditLogs().then( s => {
                          var ss = s.entries.first();
                          if (ss.action == `CHANNEL_DELETE`) {
                          if (!data[ss.executor.id]) {
                              data[ss.executor.id] = {
                              time : 1
                            };
                            if(antihack[message.guild.id].onoff === 'Off') return;
                        } else {
                            data[ss.executor.id].time+=1
                        };
                        if(antihack[message.guild.id].onoff === 'Off') return;
                  data[ss.executor.id].time = 0
                  u.guild.members.get(ss.executor.id).roles.forEach(r => {
                                  r.edit({
                                      permissions : []
                                  });
                                  data[ss.executor.id].time = 0
                              });
                          setTimeout(function(){
                              if (data[ss.executor.id].time <= 3) {
                                  data[ss.executor.id].time = 0
                              }
                          })
                      };
                      });
                      fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
                          if (err) console.log(err.message);
                      });
                  })

//================================================================================
//================================================================================


client.login(process.env.BOT_TOKEN);
