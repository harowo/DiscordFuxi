const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "Check if bot is dead",
    usage: "",

    async run (client, message, args) {

        const ping = new Discord.MessageEmbed()
        .setDescription(`I am alive!`)
        .setColor('#0099ff');


        message.channel.send(ping);
    }
}