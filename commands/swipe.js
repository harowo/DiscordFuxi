const Discord = require('discord.js')


module.exports = {
    name: "swipe",
    description: "Swipe money",

    async run (client, message, args) {
        
        var arrIndex = 0;
        var currency = args
        var swipeCurrency = ["sgd", "myr"]
        var swipeMsg = [
        `${message.author} Pls spend wisely (ty erine)\nhttps://cdn.discordapp.com/attachments/653641484834439169/714907595789303869/unknown.png`,
        `${message.author} Pls spend wisely (ty Holiday's cadet)\nhttps://cdn.discordapp.com/attachments/622385222541115403/654583837749280768/unknown.png`
    ]
        
        if (swipeCurrency.toString().includes(args)) {
            arrIndex = swipeCurrency.indexOf(swipeCurrency.find(element => element == args));
            message.channel.send(`${swipeMsg[arrIndex]}`);
            return;
        }

        message.channel.send()
    }
}