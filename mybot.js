const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    // Exit and stop process
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    if (message.content.startsWith(config.prefix + "ping")) {
        message.channel.send("pong!");
    } else

        if (message.content.startsWith(config.prefix + "Fuck you Temp")) {
            message.channel.send("No Fuck You You Little Fuck!")
        }
});

client.login(config.token);
