const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on("ready", () => {
  console.log(`Bot 已上线 ${client.user.tag}`);
});

client.on("messageCreate", message => {
  if (message.content === "!ping") {
    message.reply("Pong!");
  }
});

client.login("ODQ2OTY5MDM5NzE2MjIwOTU4.GcuglB.DB55zy6HjJQB8EEp6c7ba_sTpi9Hvsx4NG8oxE");