// Extract the required classes from the discord.js module
const { Client, MessageAttachment } = require('discord.js');
const Message = require('discord.js')
const cron = require('cron');
// Create an instance of a Discord client
const client = new Client()
const http = require('http');
const port = 3000;
http.createServer().listen(port);

// login
require('dotenv').config()
var bot_token = process.env.DISCORD_BOT_TOKEN;
client.login(bot_token)

client.on("ready", () => {
  console.log("Connected as " + client.user.tag)
  // set status to watching hair fall off
  client.user.setActivity("hair fall off [&help]", {type: "WATCHING"})
});

// ping
client.on('message', message => {
  // If the message is "&ping"
  if (message.content.toLowerCase() === '&ping') {
    // Send "i am alive" to the same channel
    message.channel.send('i am alive');
  }
});

// words
var doggoWords = ["https://cdn.discordapp.com/attachments/561410805166243887/714901249367081011/unknown.png", "https://cdn.discordapp.com/attachments/653641484834439169/719159065078530108/unknown.png", "https://cdn.discordapp.com/attachments/653641484834439169/721360974514356264/unknown.png", "https://cdn.discordapp.com/attachments/653641484834439169/726963729543069726/image0.png", "https://cdn.discordapp.com/attachments/653641484834439169/726963730461753405/image1.png", "https://cdn.discordapp.com/attachments/561410805166243887/729329487074033664/unknown.png"];
var mwLanguage = ["https://cdn.discordapp.com/attachments/561934025753886721/735135301055283250/unknown.png"]

// msg react

client.on("message", message => {
  if (message.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
  // If the message is "shinn"
  else if (message.content.toLowerCase() == "shinn") {
    message.channel.send("自闭のShinn\nhttps://cdn.discordapp.com/attachments/490738898067259396/714022393823232020/unknown.png");
  } else if (message.content.toLowerCase() == "eli") {
    message.channel.send("https://cdn.discordapp.com/attachments/646259831560208385/721595038517428275/unknown.png");
  } else if (message.content == "很黄") {
    message.channel.send("https://cdn.discordapp.com/attachments/653641484834439169/724443693188251738/unknown.png");
  } else if (message.content.toLowerCase() == "doggo") {
    // Create the attachment using MessageAttachment
    var response = doggoWords [Math.floor(Math.random()*doggoWords .length)];
    // Send the attachment in the message channel
    message.channel.send(response);
  } else if (message.content.toLowerCase() == "&bis") {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment("https://cdn.discordapp.com/attachments/653641484834439169/714906802973835294/unknown.png");
    // Send the attachment in the message channel
    message.channel.send(`${message.author} There are no BiS for every valk, but here are some general builds`, attachment);
  } else if (message.content.toLowerCase() == "dalao") {
    message.channel.send("<:serveteadalao:630456608173981709>")
  } else if (message.content.toLowerCase() == "mira") {
    message.channel.send("<:MiraFace:681089574499516500>")
  } else if (message.content.toLowerCase() == "&swipe sgd") {
    message.channel.send(`${message.author} Pls spend wisely (ty erine)\nhttps://cdn.discordapp.com/attachments/653641484834439169/714907595789303869/unknown.png`);
  } else if (message.content.toLowerCase() == "&swipe myr") {
    message.channel.send(`${message.author} Pls spend wisely (ty Holiday's cadet)\nhttps://cdn.discordapp.com/attachments/622385222541115403/654583837749280768/unknown.png`);
  } else if (message.content.toLowerCase() == "&swipe php") {
    message.channel.send(`${message.author} Pls spend wisely (ty NeonGenesis)\nhttps://cdn.discordapp.com/attachments/575004401551278105/727451161849888808/unknown.png`);
  } else if (message.content.toLowerCase() == "hecchi") {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment("https://cdn.discordapp.com/attachments/646259831560208385/722335937652195428/image0.jpg");
    // Send the attachment in the message channel
    message.channel.send(`nom nom honey felix`, attachment);
  } else if (message.content.toLowerCase() == "taria") {
    message.channel.send("https://cdn.discordapp.com/attachments/561577033214197780/727245141185921024/unknown.png");
  } else if (message.content.toLowerCase() == "人才") {
    message.channel.send("https://cdn.discordapp.com/attachments/728859876700192769/729328285309468712/9k.png");
  } else if (message.content.toLowerCase() == "join2") {
    const welcomeMsg = `Hi, if you're keen on joining us\nPlease match your nickname on discord with ingame /nick\nhere's our armada\n\n1. 空の記憶 [Sky of memories] ID: 1024053「Tier V」\n2. おいしい [Oishii] ID: 1000025「Tier V」\n\nif needed further enquiry\nYou can tag @/mod for assistance\nhttps://cdn.discordapp.com/attachments/493764413061464064/610079547442069526/welcome.gif`
    message.channel.send(welcomeMsg)
  } else if (message.content.toLowerCase() == "mw") {
    // Create the attachment using MessageAttachment
    var response = mwLanguage [Math.floor(Math.random()*mwLanguage .length)];
    // Send the attachment in the message channel
    message.channel.send(response);
  }
});


// Abyss reminder in Sky
//CRON_TZ="Asia/Singapore"
let scheduledMessage = new cron.CronJob('00 12 * * 0,3', test => {
  // This runs every Tue and Sun at 20:00:00
  // 2000 local is 1200 
  let abyss_channel = client.channels.cache.get(`675356163432513536`)
  abyss_channel.send("Abyss ending today!! " + '<@&719519030012018728>')
  // pings Abyss Ping role
});

// Abyss reminder in 233
let abyssTwothreethree = new cron.CronJob('0 12 * * 0,3', test => {
  // This runs every Tue and Sun at 18:00:00
  // 1800 local is 1000 
  let huangwu_zh = client.channels.cache.get(`561934025753886721`)
  const attachment = new MessageAttachment("https://cdn.discordapp.com/attachments/672091622619480066/715150933297987604/image0.jpg");
  huangwu_zh.send(attachment)
});

// Abyss reminder in acronym
let acronymAbyss = new cron.CronJob('00 12 * * 0,3', test => {
  // This runs every Tue and Sun at 20:00:00
  // 2000 local is 1200 
  let general_channel = client.channels.cache.get(`486874570532585483`)
  general_channel.send("you need the crystals, climb abyss! " + '<@&721737831357349959>')
  // pings Abyss Ping role
});

/* experimental
let scheduledXdress = new cron.CronJob('* * * * *', test => {
  // This runs every Tue and Sun at 20:00:00
  // 2000 local is 1200 
  let abyss_channel = client.channels.cache.get(`675356163432513536`)
  abyss_channel.send("crossdress <@" + '471300810194681866' + ">")
  // pings hibiki
});
scheduledXdress.start()
*/

scheduledMessage.start()
abyssTwothreethree.start()
acronymAbyss.start()

client.on('message', (receivedMessage) => {
  if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
      return
  } else if (receivedMessage.content.startsWith("&")) { // trigger command
      processCommand(receivedMessage)
  }
  else {
    return
  }
})

function processCommand(receivedMessage) {
  let fullCommand = receivedMessage.content.substr(1) // Remove command prefix &
  let splitCommand = fullCommand.split(" ") // split msg up into pieces for each space
  let keyword = splitCommand[0] // first word after &
  let argument = splitCommand.slice(1) // all others

  if (keyword == "help") {
    helpCommand(receivedMessage, argument) // reply help message
  } else if (keyword == "time") {
    timeCommand(receivedMessage, argument) // input MA time, reply MA score
  } else if (keyword == "score") {
    scoreCommand(receivedMessage, argument) // input MA score, reply MA time
  }
}

function helpCommand(receivedMessage, argument) {
    if(argument == "time") {
    receivedMessage.channel.send("Type &time m:ss (x:xx) for corresponding score") // &time help
  } else if(argument == "swipe") {
    receivedMessage.channel.send("Type &swipe [currency] to spend wisely")
  } else if(argument == "bis") {
    receivedMessage.channel.send("Type &bis to learn about the best build")
  } else if(argument.length > 0) {
    receivedMessage.channel.send("It looks like you might need help with " + argument + ". But that is out of my capability as a novice bot :(")
  } else{
    receivedMessage.channel.send("Type &help [question] for more detailed help\n\nType &time/&score to check Memorial Arena timing\n\nType &swipe to know best offer in game (myr/sgd/php)\n\nType &bis to know the best build") //help message
}
}

// &time (by kamito)
function timeCommand(receivedMessage = null, argument = "5:00"){

  if(argument == "5:00"){ // check whether the argument match time format 5:00
    receivedMessage.channel.send(`${receivedMessage.author} ` + argument + ` is approximately: `+ `${Math.floor(38336 / 1.2) } (UP: 38336)`); 
    return ;
  }

  const time_regex = /^([0-4]):([0-5][0-9])$/; // check whether the argument match time format (from 0: 00 to 4:59)

  if(argument == undefined || !argument || !(time = argument.toString().match(time_regex)) || !("0:00")) {
    receivedMessage.channel.send("That is not a valid time!!"); return ;
  }

  const minutes = time[1];
  const seconds = time[2];
  const total_seconds_spent = 300 - seconds - (minutes * 60);
  const up_score = 38336 - (64 * total_seconds_spent);
  const score = Math.floor(up_score / 1.2); 
  receivedMessage.channel.send(`${receivedMessage.author} ` + argument + ` is approximately: ` + `${score} (UP: ${up_score})`);
  
}

// &score
function scoreCommand(receivedMessage, argument) {
  if (score.toString().includes(argument)) {  // check if argument is in array score
      arrIndex = score.indexOf(score.find(element => element == argument));
      receivedMessage.channel.send(`${receivedMessage.author} ` + "Time is approximately: " + `${times[arrIndex]}, where score is approximately: ` + `${score[arrIndex]}` + " (UP: " + `${UPscore[arrIndex]}` + ")");
    }
  else if (UPscore.toString().includes(argument)) {   // check if argument is in array UPscore
    arrIndex = UPscore.indexOf(UPscore.find(element => element == argument));
    receivedMessage.channel.send(`${receivedMessage.author} ` + "Time is approximately: " + `${times[arrIndex]}, where score is approximately: ` + `${score[arrIndex]}` + " (UP: " + `${UPscore[arrIndex]}` + ")");
  }
  else {
    receivedMessage.channel.send("That is not a valid score!!")
  }
};

// time
const times = ["5:00", "4:59","4:58","4:57","4:56","4:55","4:54","4:53","4:52","4:51","4:50","4:49","4:48","4:47","4:46","4:45","4:44","4:43","4:42","4:41","4:40","4:39","4:38","4:37","4:36","4:35","4:34","4:33","4:32","4:31","4:30","4:29","4:28","4:27","4:26","4:25","4:24","4:23","4:22","4:21","4:20","4:19","4:18","4:17","4:16","4:15","4:14","4:13","4:12","4:11","4:10","4:09","4:08","4:07","4:06","4:05","4:04","4:03","4:02","4:01","4:00","3:59","3:58","3:57","3:56","3:55","3:54","3:53","3:52","3:51","3:50","3:49","3:48","3:47","3:46","3:45","3:44","3:43","3:42","3:41","3:40","3:39","3:38","3:37","3:36","3:35","3:34","3:33","3:32","3:31","3:30","3:29","3:28","3:27","3:26","3:25","3:24","3:23","3:22","3:21","3:20","3:19","3:18","3:17","3:16","3:15","3:14","3:13","3:12","3:11","3:10","3:09","3:08","3:07","3:06","3:05","3:04","3:03","3:02","3:01","3:00","2:59","2:58","2:57","2:56","2:55","2:54","2:53","2:52","2:51","2:50","2:49","2:48","2:47","2:46","2:45","2:44","2:43","2:42","2:41","2:40","2:39","2:38","2:37","2:36","2:35","2:34","2:33","2:32","2:31","2:30","2:29","2:28","2:27","2:26","2:25","2:24","2:23","2:22","2:21","2:20","2:19","2:18","2:17","2:16","2:15","2:14","2:13","2:12","2:11","2:10","2:09","2:08","2:07","2:06","2:05","2:04","2:03","2:02","2:01","2:00","1:59","1:58","1:57","1:56","1:55","1:54","1:53","1:52","1:51","1:50","1:49","1:48","1:47","1:46","1:45","1:44","1:43","1:42","1:41","1:40","1:39","1:38","1:37","1:36","1:35","1:34","1:33","1:32","1:31","1:30","1:29","1:28","1:27","1:26","1:25","1:24","1:23","1:22","1:21","1:20","1:19","1:18","1:17","1:16","1:15","1:14","1:13","1:12","1:11","1:10","1:09","1:08","1:07","1:06","1:05","1:04","1:03","1:02","1:01","1:00","0:59","0:58","0:57","0:56","0:55","0:54","0:53","0:52","0:51","0:50","0:49","0:48","0:47","0:46","0:45","0:44","0:43","0:42","0:41","0:40","0:39","0:38","0:37","0:36","0:35","0:34","0:33","0:32","0:31","0:30","0:29","0:28","0:27","0:26","0:25","0:24","0:23","0:22","0:21","0:20","0:19","0:18","0:17","0:16","0:15","0:14","0:13","0:12","0:11","0:10","0:09","0:08","0:07","0:06","0:05","0:04","0:03","0:02","0:01"]


// score
const score = [31946,31893,31840,31786,31733,31680,31626,31573,31520,31466,31413,31360,31306,31253,31200,31146,31093,31040,30986,30933,30880,30826,30773,30720,30666,30613,30560,30506,30453,30400,30346,30293,30240,30186,30133,30080,30026,29973,29920,29866,29813,29760,29706,29653,29600,29546,29493,29440,29386,29333,29280,29226,29173,29120,29066,29013,28960,28906,28853,28800,28746,28693,28640,28586,28533,28480,28426,28373,28320,28266,28213,28160,28106,28053,28000,27946,27893,27840,27786,27733,27680,27626,27573,27520,27466,27413,27360,27306,27253,27200,27146,27093,27040,26986,26933,26880,26826,26773,26720,26666,26613,26560,26506,26453,26400,26346,26293,26240,26186,26133,26080,26026,25973,25920,25866,25813,25760,25706,25653,25600,25546,25493,25440,25386,25333,25280,25226,25173,25120,25066,25013,24960,24906,24853,24800,24746,24693,24640,24586,24533,24480,24426,24373,24320,24266,24213,24160,24106,24053,24000,23946,23893,23840,23786,23733,23680,23626,23573,23520,23466,23413,23360,23306,23253,23200,23146,23093,23040,22986,22933,22880,22826,22773,22720,22666,22613,22560,22506,22453,22400,22346,22293,22240,22186,22133,22080,22026,21973,21920,21866,21813,21760,21706,21653,21600,21546,21493,21440,21386,21333,21280,21226,21173,21120,21066,21013,20960,20906,20853,20800,20746,20693,20640,20586,20533,20480,20426,20373,20320,20266,20213,20160,20106,20053,20000,19946,19893,19840,19786,19733,19680,19626,19573,19520,19466,19413,19360,19306,19253,19200,19146,19093,19040,18986,18933,18880,18826,18773,18720,18666,18613,18560,18506,18453,18400,18346,18293,18240,18186,18133,18080,18026,17973,17920,17866,17813,17760,17706,17653,17600,17546,17493,17440,17386,17333,17280,17226,17173,17120,17066,17013,16960,16906,16853,16800,16746,16693,16640,16586,16533,16480,16426,16373,16320,16266,16213,16160,16106,16053,16000];

// UP score
const UPscore = [38336,38272,38208,38144,38080,38016,37952,37888,37824,37760,37696,37632,37568,37504,37440,37376,37312,37248,37184,37120,37056,36992,36928,36864,36800,36736,36672,36608,36544,36480,36416,36352,36288,36224,36160,36096,36032,35968,35904,35840,35776,35712,35648,35584,35520,35456,35392,35328,35264,35200,35136,35072,35008,34944,34880,34816,34752,34688,34624,34560,34496,34432,34368,34304,34240,34176,34112,34048,33984,33920,33856,33792,33728,33664,33600,33536,33472,33408,33344,33280,33216,33152,33088,33024,32960,32896,32832,32768,32704,32640,32576,32512,32448,32384,32320,32256,32192,32128,32064,32000,31936,31872,31808,31744,31680,31616,31552,31488,31424,31360,31296,31232,31168,31104,31040,30976,30912,30848,30784,30720,30656,30592,30528,30464,30400,30336,30272,30208,30144,30080,30016,29952,29888,29824,29760,29696,29632,29568,29504,29440,29376,29312,29248,29184,29120,29056,28992,28928,28864,28800,28736,28672,28608,28544,28480,28416,28352,28288,28224,28160,28096,28032,27968,27904,27840,27776,27712,27648,27584,27520,27456,27392,27328,27264,27200,27136,27072,27008,26944,26880,26816,26752,26688,26624,26560,26496,26432,26368,26304,26240,26176,26112,26048,25984,25920,25856,25792,25728,25664,25600,25536,25472,25408,25344,25280,25216,25152,25088,25024,24960,24896,24832,24768,24704,24640,24576,24512,24448,24384,24320,24256,24192,24128,24064,24000,23936,23872,23808,23744,23680,23616,23552,23488,23424,23360,23296,23232,23168,23104,23040,22976,22912,22848,22784,22720,22656,22592,22528,22464,22400,22336,22272,22208,22144,22080,22016,21952,21888,21824,21760,21696,21632,21568,21504,21440,21376,21312,21248,21184,21120,21056,20992,20928,20864,20800,20736,20672,20608,20544,20480,20416,20352,20288,20224,20160,20096,20032,19968,19904,19840,19776,19712,19648,19584,19520,19456,19392,19328,19264,19200];

var arrIndex = 0;
