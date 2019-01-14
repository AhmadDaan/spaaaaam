const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("520650566175817750")
setInterval(function() {
channel.send(`Sppam.`);
}, 30)
})

client2.on("ready", () => {
let channel =     client.channels.get("520650566175817750")
setInterval(function() {
channel.send(`Sppam.`);
}, 30)
})


client3.on("ready", () => {
let channel =     client.channels.get("520650566175817750")
setInterval(function() {
channel.send(`Sppam.`);
}, 30)
})



client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN2);
client3.login(process.env.BOT_TOKEN3);