const Discord = require('discord.js')


module.exports = {
    name: "share",
    description: "Share video guides to multiple guide channels in one message",
    usage: "{MA/Abyss} {Video Link}",

    async run (client, message, args) {
        
        const maGuide = client.channels.cache.get('792829621828583435')  // Sky MA Guide

        const generalGuide = client.channels.cache.get('577287029444968458')  // Sky General Guide

        const hbGuide = client.channels.cache.get('396386758587318282')  // HonkaiBankai Guide

        const ma233Guide = client.channels.cache.get('728183933656629359')  // 233 MA Guide

        const abyss233Guide = client.channels.cache.get('739451187220447334')  // 233 Abyss Guide

        const logChannel = client.channels.cache.get('830091456811106385')  // for logging

        // prevent crash

        if (args[1] == undefined) {
            message.channel.send("Empty Link");
            return;
        }

        // MA Guide

        if (args[0] != undefined && args[0].toLowerCase() == "ma") {
            logChannel.send(`MA Guide shared by ${message.author.username}: ` + args[1])  // send to logging channel
            maGuide.send(`MA Guide shared by ${message.author.username}: ` + args[1])  // send to Sky
            hbGuide.send(`MA Guide shared by ${message.author.username}: ` + args[1])  // send to HB
            ma233Guide.send(`MA Guide shared by ${message.author.username}: ` + args[1])  // send to 233
        }

        // Abyss Guide

        if (args[0] != undefined && args[0].toLowerCase() == "abyss") {
            logChannel.send(`Abyss Guide shared by ${message.author.username}: ` + args[1])  // send to logging channel
            generalGuide.send(`Abyss Guide shared by ${message.author.username}: ` + args[1])  // send to Sky
            hbGuide.send(`Abyss Guide shared by ${message.author.username}: ` + args[1])  // send to HB
            abyss233Guide.send(`Abyss Guide shared by ${message.author.username}: ` + args[1])  // send to 233
        }
    }
}