const fs = require("fs");
module.exports.config = {
  name: "chocolate",
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
  if(react.includes("chocolate") ||
     react.includes("toffee") ||
     react.includes("choc") ||
     react.includes("chaklet") ||
react.includes("चॉकलेट")) {
    var msg = {
        body: `${name} ये लो बाबू तुम फ्री का चॉकलेट खाओ रोना मत अब।😒👈`,attachment: fs.createReadStream(__dirname + `/shankar/choco.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍫", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }