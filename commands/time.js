const Discord = require('discord.js')


module.exports = {
    name: "time",
    description: "Convert time to score in MA",
    usage: "time in m:ss",

    async run (client, message, args) {
        
        if(args == "5:00"){ // check whether the argument match time format 5:00
          const fiveMsg = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
          .setDescription(args + ` is approximately: `+ `${Math.floor(38336 / 1.2) } (UP: 38336)`)
          .setFooter('In-game value may vary slightly.')
          .setTimestamp();
          message.channel.send(fiveMsg)
          }
        
          const time_regex = /^([0-4]):([0-5][0-9])$/; // check whether the argument match time format (from 0: 00 to 4:59)
          var time = args.toString().match(time_regex)
        
          if(args == undefined && args != "5:00" || !args || !(time = args.toString().match(time_regex))) {
            
            return;
          }
        
          const minutes = time[1];
          const seconds = time[2];
          const total_seconds_spent = 300 - seconds - (minutes * 60);
          const up_score = 38336 - (64 * total_seconds_spent);
          const score = Math.floor(up_score / 1.2); 
          const timeMsg = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
          .setDescription(args + ` is approximately: ` + `${score} (UP: ${up_score})`)
          .setFooter('In-game value may vary slightly.')
          .setTimestamp();
          
          message.channel.send(timeMsg);
    }
}

