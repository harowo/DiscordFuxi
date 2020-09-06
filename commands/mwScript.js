const Discord = require('discord.js')


module.exports = {
    name: "mw",
    description: "Famous words from mw",

    async run (client, message, args) {
      var mwScript = ["https://cdn.discordapp.com/attachments/561934025753886721/735135301055283250/unknown.png"];
      
      var random = Math.floor(Math.random()*mwScript.length)
      
      message.channel.send(mwScript[random]);
    }
}