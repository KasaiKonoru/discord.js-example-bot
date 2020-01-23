const Discord = require("discord.js");
const PREFIX = process.env.PREFIX;

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame(`Hi, Im New Bot On Discord!`);
    console.log(`${bot.user.username} is Ready!`);

bot.login(process.env.BOT_TOKEN);

bot.login('NjYyNjc2NTcyNjAzNjc4Nzkx.XinLVw.lzuIMH6N1vWwn3mtBIiMTueSVkk')
