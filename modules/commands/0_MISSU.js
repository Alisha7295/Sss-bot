const fs = require("fs");
module.exports.config = {
  name: "miss",
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
  if(react.includes("miss") ||
     react.includes("mis") || react.includes("MISS") || react.includes("Miss") ||
react.includes("mich") ||
react.includes("MICH")) {
    var msg = {
        body: `${name} आई मिस यू टू बाबू बहुत सारा🥺😇👈`,attachment: fs.createReadStream(__dirname + `/shankar/miss.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☀️", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }