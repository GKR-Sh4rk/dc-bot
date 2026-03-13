const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// Bot 启动事件
client.on("ready", () => {
  console.log(`Bot 已上线 ${client.user.tag}`);
});

// 测试命令
client.on("messageCreate", message => {
  if (message.author.bot) return;
  if (message.content === "!ping") message.reply("Pong!");
});

client.login(process.env.DISCORD_TOKEN); // ✅ 安全读取环境变量
