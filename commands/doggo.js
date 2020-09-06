const Discord = require('discord.js')


module.exports = {
    name: "doggo",
    description: "Famous words from Doggo",

    async run (client, message, args) {
      var doggoWords = ["https://cdn.discordapp.com/attachments/561410805166243887/714901249367081011/unknown.png", "https://cdn.discordapp.com/attachments/653641484834439169/719159065078530108/unknown.png", "https://cdn.discordapp.com/attachments/653641484834439169/721360974514356264/unknown.png", "https://cdn.discordapp.com/attachments/653641484834439169/726963729543069726/image0.png", "https://cdn.discordapp.com/attachments/653641484834439169/726963730461753405/image1.png", "https://cdn.discordapp.com/attachments/561410805166243887/729329487074033664/unknown.png", "https://cdn.discordapp.com/attachments/653641484834439169/742758233139052675/image0.png"];
      
      var random = Math.floor(Math.random()*doggoWords.length)
      
      message.channel.send(doggoWords[random]);
    }
}