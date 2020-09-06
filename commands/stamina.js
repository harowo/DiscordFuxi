const Discord = require('discord.js')


module.exports = {
    name: "stam",
    description: "Calculate when stamina will be maxed",

    async run (client, message, args) {

        var maxStam = 165
        const regenRate = 0.1 // 1 stam regens every 6min
        var currStam = args
        var remainTime = Math.round(((maxStam - currStam) * regenRate) * 10) / 10

        var currDate = new Date(Date.now())
        var nowInms = currDate.getTime()
        var remainTimems = remainTime * 60 * 60 * 1000 // convert remainTime to milliseconds
        var futureDateTimems = nowInms + remainTimems;
        var futureTime = new Date(futureDateTimems)

        if(args == undefined || !args || args >= maxStam || args < 0) {
            message.channel.send("<:slap:693351841404026890>");
            return;
        }
        const stamMsg = new Discord.MessageEmbed()
          .setDescription("It is approximately " + `${remainTime}` + " hours from full stamina.\n\nIt will be " + futureTime)
          .setColor('#0099ff');

        message.channel.send(stamMsg)
    }
}