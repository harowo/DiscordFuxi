const Discord = require('discord.js')


module.exports = {
    name: "stam",
    description: "Calculate when stamina will be maxed",
    usage: "currentStamina + captainLevel",

    async run (client, message, args) {

        var capLvl = args[1]
        var maxStam = 80 + Number(capLvl)
        const regenRate = 0.1 // 1 stam regens every 6min
        var currStam = args[0]
        var remainTime = Math.round(((maxStam - currStam) * regenRate) * 10) / 10
        var hours = remainTime;
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);

        //var currDate = new Date(Date.now())
        //var nowInms = currDate.getTime()
        //var remainTimems = remainTime * 60 * 60 * 1000 // convert remainTime to milliseconds
        //var futureDateTimems = nowInms + remainTimems;
        //var futureTime = new Date(futureDateTimems)

        if(args == undefined || !args || args >= maxStam || args < 0 || capLvl > 88) {
            message.channel.send("<:slap:693351841404026890>");
            return;
        }
        const stamMsg = new Discord.MessageEmbed()
            .setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
            .setDescription("It is approximately " + `\**${rhours}\**` + " **hours and** " + `\**${rminutes}\**` + " \**minutes** from full stamina.")
            .setColor('#0099ff')
            .setTimestamp();

        message.channel.send(stamMsg)
    }
}
