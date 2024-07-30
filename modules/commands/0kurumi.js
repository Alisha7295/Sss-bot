const fs = require("fs-extra");
const axios = require("axios");

// Function to generate random message
function generateRandomMessage(messages) {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

module.exports = {
  config: {
    name: "love you",
    version: "1.0",
    author: "SHANKAR SUMAN",
    countDown: 5,
    role: 0,
    shortDescription: "no-prefix",
    longDescription: "Bot aapko hindi mein jawab dega",
    category: "non-prefix",
    guide: {
      en: "{p}{n}",
    }
  },

  onStart: async function ({ }) { },

  onChat: async function ({ api, event, args, Threads, userData }) {
    const { threadID, senderID } = event;
    // Fetch sender details
    const senderInfo = await api.getUserInfo(senderID);
    // Get sender name from sender details
    const senderName = senderInfo[senderID].name;

    // Trigger words and their corresponding replies and GIF links
    const triggers = {
      "love you": {
        options: ["love", "LOVE", "Love", "pyar"],
        gifLinks: [
          "https://i.ibb.co/mJyQgg0/image.gif",
          "https://i.ibb.co/7t9084v/image.gif",
          "https://i.ibb.co/8jMgJJ8/image.gif",

"https://i.ibb.co/kD7DFmQ/image.gif",

"https://i.ibb.co/Vx8WdJh/image.jpg",

"https://i.ibb.co/Z1Xm7fZ/image.gif",          
          // Add more GIF links here as per your requirement
        ],
        replies: ["आई प्यार यू, " + senderName + " बाबू 🙈😝💋", "I LOVE U, " + senderName + " JAAN🙈💋", "आई लव यू टू, " + senderName + " जान 🙈💋"]
      }
    };

    // Check if message body contains any trigger words
    for (const trigger in triggers) {
      if (triggers[trigger].options.some(option => new RegExp(`\\b${option}\\b`, 'i').test(event.body))) {
        const { gifLinks, replies } = triggers[trigger];

        // Generate random GIF link
        const gifLink = gifLinks[Math.floor(Math.random() * gifLinks.length)];
        // Generate random message
        const replyMessage = generateRandomMessage(replies);

        try {
          // Fetch GIF data
          const gifData = await axios.get(gifLink, { responseType: "stream" });
          // Send GIF and message as attachments
          api.sendMessage({
            attachment: gifData.data,
            body: replyMessage,
            mentions: [{ tag: senderID, id: senderID }]
          }, threadID);
        } catch (error) {
          console.error("GIF fetch karne mein error:", error);
        }

        return; // Message bhejne ke baad loop se bahar nikalna
      }
    }

    // Agar koi trigger word nahi milta, to kuch nahi karna
  }
};