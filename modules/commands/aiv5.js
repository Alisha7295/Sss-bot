const axios = require("axios");

const config = {
  name: "aiv5",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Jovan",
  description: " Ai No Prefix",
  commandCategory: "no prefix",
  usages: "...",
  cooldowns: 0
};

const handleEvent = async function ({ api, event, client, __GLOBAL }) {

  if (event.body.indexOf("ai") === 0 || event.body.indexOf("Ai") === 0) {
    const { threadID, messageID } = event;
    const input = event.body;
    const message = input.split(" ");

    if (message.length < 2) {
      api.sendMessage("𝖧𝖾𝗅𝗅𝗈👋 𝖨'𝖺𝗆 Jovanie Ai 𝗉𝗅𝖾𝖺𝗌𝖾 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝗆𝖾 𝖺 (𝖰𝗎𝖾𝗌𝗍𝗂𝗈𝗇)..", event.threadID);
    } else {
      try {
        api.sendMessage(`🔍 | 𝘈𝘯𝘴𝘸𝘦𝘳𝘪𝘯𝘨...`, event.threadID);
        const ris = await axios.get(`https://hazeyy-api-blackbox.kyrinwu.repl.co/ask?q=${encodeURIComponent(query)}`);
        const result = ris.data.result;
        api.sendMessage(`🐰 Ai:${result}`, event.threadID);
      } catch (err) {
        console.error(err);
        api.sendMessage("𝖳𝗁𝖾 𝖠𝖯𝖨 𝗅𝗂𝗇𝗄 𝗒𝗈𝗎 𝗉𝗋𝗈𝗏𝗂𝖽𝖾𝖽 𝗂𝗌 𝗇𝗈𝗍 𝗐𝗈𝗋𝗄𝗂𝗇𝗀😿, 𝖯𝗅𝖾𝖺𝗌𝖾 𝗍𝗋𝗒 𝖺𝗀𝖺𝗂𝗇 𝗅𝖺𝗍𝖾𝗋...", event.threadID);
      }
    }
  }
};

const run = function ({ api, event, client, __GLOBAL }) {
};

module.exports = { config, handleEvent, run };
