const fs = require("fs");
module.exports.config = {
  name: "radhe",
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
  if(react.includes("radhe") ||
     react.includes("krishana") ||
     react.includes("radhe radhe") ||
     react.includes("radhey radhey") || react.includes("Radhe") ||
react.includes("राधे राधे") ||
react.includes("कृष्णा")) {
    var msg = {
        body: `${name} 🙏🥀 जय जय श्री राधे श्याम🥀🙏`,attachment: fs.createReadStream(__dirname + `/shankar/radhe.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }