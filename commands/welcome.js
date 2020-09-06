const Discord = require('discord.js')


module.exports = {
    name: "join2",
    description: "Sky welcome msg",

    async run (client, message) {
        
        message.channel.send(`Hi, if you're keen on joining us\nPlease match your nickname on discord with ingame /nick\nhere's our armada\n\n1. 空の記憶 [Sky of memories] ID: 1024053「Tier V」\n2. おいしい [Oishii] ID: 1000025「Tier V」\n\nif needed further enquiry\nYou can tag @/mod for assistance\nhttps://cdn.discordapp.com/attachments/493764413061464064/610079547442069526/welcome.gif`)
    
    }
}