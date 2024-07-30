const fs = require("fs");
module.exports.config = {
  name: "owner",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("owner") ||
     react.includes("Owner") || react.includes("malik") || react.includes("OWNER") ||
react.includes("oner") ||
react.includes("malik")) {
    var msg = {
        body: `${name} ये लो ऑनर इंफॉर्मेशन 👈
        🔰𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊🔰

  •❅──────✧❅✦❅✧──────❅•                                                   ˚                   ₊· ͟͟͞͞➳.ೃ࿐                                                     
     🅾🆆🅽🅴🆁 ❈ ◦•≫ 𝑺𝑯𝑺𝑵𝑲𝑨𝑹 𝑺𝑼𝑴𝑨𝑵                            •*⁀.ೃ࿐.                            *:;,．       ★ ⌒ ☆                      ・:.,;*.                  *♡+:｡.｡　　                   ｡.｡:+♡* .             ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱ .                     

𝐀𝐠𝐞 : 21

𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 𝐖𝐢𝐭𝐡 : 𝕂𝕆𝕀 ℕ𝕀

𝐅𝐫𝐨𝐦 : 𝐏𝐀𝐓𝐍𝐀☆𝐁𝐈𝐇𝐀𝐑

𝐒𝐭𝐮𝐝𝐲 : 𝗕 𝗧𝗲𝗰𝗵 IN THE FIELD OF 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠

𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 :https://www.facebook.com/shankar.suman.98622733?mibextid=JRoKGi

𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : SECRET H BOSS 

 нαм внι нση gαү вεωαғα кαнεη кιsι кι zιη∂αgι мα!❤🙂♣️`,attachment: fs.createReadStream(__dirname + `/shankar/owner.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }