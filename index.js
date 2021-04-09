// Extract the required classes from the discord.js module
const { Client, MessageAttachment } = require('discord.js');
const client = new Client()
const Message = require('discord.js')
const cron = require('cron');
const { readdirSync } = require('fs');
const { join } = require('path');
const Discord = require('discord.js');
client.commands= new Discord.Collection();
const fs = require('fs');
const { prefix } = require('./config.json');

// Create an instance of a Discord client
const http = require('http');
const port = 3000;
http.createServer().listen(port);

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.on("error", console.error);

client.on("ready", () => {
  console.log("Connected as " + client.user.tag + " v2.1")
  // set status to watching hair fall off
  client.user.setActivity("hair fall off [&]", {type: "WATCHING"})
});


client.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  if (message.author == client.user) { // Prevent bot from responding to its own messages
    return
}

  if(message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ +/);

      const command = args.shift().toLowerCase();

      if(!client.commands.has(command)) return;


      try {
          client.commands.get(command).run(client, message, args);

      } catch (error){
          console.error(error);
      }
  }

  // List servers the bot is in
  //client.guilds.cache.forEach(guild => {
  //  console.log(`${guild.name} | ${guild.id}`);
  //})
})



// login
require('dotenv').config()
var bot_token = process.env.DISCORD_BOT_TOKEN;
client.login(bot_token)

client.on('message', message => {
  if (message.content.toLowerCase() == "dalao") {
    message.channel.send("<:serveteadalao:630456608173981709>")}
  });


// Abyss reminder in Sky
//CRON_TZ="Asia/Singapore"
let scheduledMessage = new cron.CronJob('00 12 * * 0,3', test => {
  // This runs every Tue and Sun at 20:00:00
  // 2000 local is 1200 
  let abyss_channel = client.channels.cache.get(`675356163432513536`)
  abyss_channel.send("Abyss ending today!! " + '<@&719519030012018728>')
  // pings Abyss Ping role
});

// Abyss reminder in 233
let abyssTwothreethree = new cron.CronJob('0 12 * * 0,3', test => {
  // This runs every Tue and Sun at 18:00:00
  // 1800 local is 1000 
  let huangwu_zh = client.channels.cache.get(`561934025753886721`)
  const attachment = new MessageAttachment("https://cdn.discordapp.com/attachments/672091622619480066/715150933297987604/image0.jpg");
  huangwu_zh.send(attachment)
});


/* experimental
let scheduledXdress = new cron.CronJob('* * * * *', test => {
  // This runs every Tue and Sun at 20:00:00
  // 2000 local is 1200 
  let abyss_channel = client.channels.cache.get(`675356163432513536`)
  abyss_channel.send("crossdress <@" + '471300810194681866' + ">")
  // pings hibiki
});
scheduledXdress.start()
*/

scheduledMessage.start()
abyssTwothreethree.start()