const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("609820430458552352")
setInterval(function() {
channel.send(`121312`);
}, 30)
})

client.login(process.env.BOT_TOKEN);