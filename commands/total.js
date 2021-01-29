const Discord = require('discord.js')

module.exports = {
    name: "total",
    description: "Calculate total MA score quickly (for scores above 30k/36k only)",
    usage: "UPscore Score Score (all in 3 digits)",

    async run (client, message, args) {

        // score
        const score = [31946,31893,31840,31786,31733,31680,31626,31573,31520,31466,31413,31360,31306,31253,31200,31146,31093,31040,30986,30933,30880,30826,30773,30720,30666,30613,30560,30506,30453,30400,30346,30293,30240,30186,30133,30080,30026]

        // UP score
        const UPscore = [38336,38272,38208,38144,38080,38016,37952,37888,37824,37760,37696,37632,37568,37504,37440,37376,37312,37248,37184,37120,37056,36992,36928,36864,36800,36736,36672,36608,36544,36480,36416,36352,36288,36224,36160,36096,36032]

        var arrIndex = 0    // UP score
        var arrIndex2 = 0    // non-UP 1
        var arrIndex3 = 0    // non-UP 2
        var UPscore_input = args[0]
        var score2_input = args[1]
        var score3_input = args[2]

        var upEdit = UPscore.map(upScore => upScore.toString().slice(-3));
        var scoreEdit = score.map(score => score.toString().slice(-3));
        
        // Get UPscore
        arrIndex = upEdit.indexOf(UPscore_input);
        UPscore_input = UPscore[arrIndex]
        
        // Get Score2
        arrIndex2 = scoreEdit.indexOf(score2_input);
        score2_input = score[arrIndex2]

        // Get Score3
        arrIndex3 = scoreEdit.indexOf(score3_input);
        score3_input = score[arrIndex3]

        var total_score = Number(UPscore_input) + Number(score2_input) + Number(score3_input)

        const scoreMsg = new Discord.MessageEmbed()
            .setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
            .setDescription("UPScore: " + `${UPscore_input}\nScore2: `+ `${score2_input}\nScore3: ` + `${score3_input}\n\n\**Total:\** ` + `\**${total_score}\**`)
            .setColor('#0099ff')
            .setFooter('In-game value may vary slightly.')
            .setTimestamp();

        message.channel.send(scoreMsg)
        }

}
