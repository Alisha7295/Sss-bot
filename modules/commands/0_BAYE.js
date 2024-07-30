const fs = require("fs-extra");

module.exports = {
  config: {
    name: "emojibot",
    version: "1.0",
    author: "SHANKAR SUMAN",
    countDown: 5,
    role: 0,
    shortDescription: "no-prefix",
    longDescription: "YAH SCRIPT SHANKAR SUMAN NE BANAYA HAI",
    category: "non-prefix",
    guide: {
      en: "{p}{n}",
    }
  },

  onStart: async function ({  }) { },

  onChat: async function ({ api, event, args, Threads, userData }) {
    const { threadID, messageID, senderID } = event;
    const emojis = ["😀", "😄", "😁", "😆", "😅", "😂", "🤣", "😭", "😉", "😐", "😝", "🤧", "😑", "🥺", "🙊", "🤨", "💋", "😘", "😗", "Kamina", "Chutiya", "Call", "Tharki", "Chup"];

    const replies = {
      "😀": ["सराफत से मुस्कुरा रहे हो 😀😀", "😀😀😀😀"],
      "😄": ["चूहे जैसा मुह मत बना 😆", "😄😄😄😄"],
      "😁": ["लगता है आज पहली बार ब्रश किया है 😁", "कोलगेट का प्रचार कर रहे हो क्या?😂", "ऐसे कौन हस्ता है दोनो दांत चिपका के यार😝👈"],
      "😆": ["आंख बंद करके क्यू हस रहे हो ठरकी 😆", "आंख खोल के हस न मुझे तेरी आंखों में बस जाना है।😝", "😐😐😐😐"],
      "😅": ["तेरे सर से पानी क्यू टपक रहा 😅", "लगता तेरे सर पर ऊपर से कौवा हग दिया है।😂", "😅😅😅😅"],
      "😂": ["इतनी हसी क्यू आ रही है इस हसी के पीछे क्या राज है बताओ बताओ हमसे ना सरमाओ 😂🤤", "हंसना नही आता है तो हसमुखिया देवी से जाकर मिलो😐 सीखा देगी वो🥺", "😂😂😂"],
      "🤣": ["ज्यादा मत हस, एक मुक्के मे सारे दांत तोड़ दूंगा 😂", "🤣🤣🤣"],
      "😭": ["️अरे यार रोते नही पागल किया हुआ है मुझे बताओ बाबू 🥺🥺🥺", "क्या हुआ बाबू क्यूं रो रहे हो ग्रुप में बाढ़ आ जाएगी🥺", "😭😭😭"],
      "😉": ["️आंख क्यूं मार रहे हो 🥺🤟", "सरेआम पब्लिक प्लेस में किसको आंख मार रहे हो बेशरम?🧐", "😉😉😉"],
      "😐": ["कर दिया न तेरी बोलती बंद बहुत बोल रहा था ठरकी😝👈", "अब बोल के दिखा ना हो गई न बोलती बंद🤣👈", "लगता है ये फटीचर विमल खा के आए है इसलिए मुंह नही खोल रहा😐👈", "अब तेरी aआवाज आई न तो अपने टकले से तेरा सर फोड़ दूंगा।😾👈", "ऐसे ही अपना मुंह बंद रखा करो क्यूं की तुम जब भी बोलते हो जहर ही उगलते हो।😾👈"],
      "😝": ["क्या रे ठरकी ये आंख बंद कर के गंदी जुबान दिखा रहे हो।🤧👈", "ये कौन सा मैजिक है बाबू दोनो आंख बंद कर जुबान दिखा रहे हो।🧐", "😝😝😝😝"],
      "🤧": ["क्या हुआ बाबू शर्दी हो गई क्या चलो डॉक्टर के पास🧐👈", "अरे यार उधर जाओ दुसरे ग्रुप में अपना नाक साफ करने🤧👈"],
      "😑": ["ऐसा क्या देख लिया की मुंह के साथ आंखे भी बंद हो गई🧐👈", "ऐसा लग रहा पुरे फेस पर मधुमक्खी ने डस लिया।🤣🤣👈"],
      "🥺": ["क्या हुआ बाबू क्यूं रो रहे मुझे बताओ🥺", "रोते नही बाबू चॉकलेट चाहिए रुको अभी देता हूं लिखो 👉chocolate 👈"],
      "🙊": ["चुप क्यों हो गए? कुछ बोलो, सब को जानने का हक़ है!" 🙊, "अरे यार, इतना चुप क्यों हो? जैसे कोई भूत बोलेगा तो पूरी कहानी खुल जाएगी!" 🙊],
      "🤨": ["अब आपको क्या हुआ? कुछ गड़बड़ है क्या? मैं हवा हवाई करके बताऊं क्या? 🤨", " ये ठरकी जैसे क्या जशुशी कर रहे हो?🤨"],
      "💋": ["लिप्सटिक थोड़ा कम लगाओ तभी किस करूंगा 😝👈", "💋 उम्म्मह बेबी 😝", "💋💋💋💋"],
      "🥰": ["क्या बात है बाबू आज तो तुम बहुत खुश लग रहे हो🥰", "उफ्फ आपकी ये अदाएं मुझे तो मार ही डाला रे 😝👈", "आय हाय बाबू उम्माह 😘"],
      "😘": ["आय हाय बाबू उम्माह उम्माह", "अले बाबू दिल मुंह के बाहर आ गया😂👈"],
      "😗": ["बाहर से शरीफ और और अंदर शैतान हो तुम तो🤐👈", "जाके पढ़ाई करो ये चुम्मी सुम्मी छोड़ो 😾👈"],
      "Kamina": ["तु डबल कमिना😾👈", "तु घनघोर कमिना", "तु है कमिना मैं तो बोट हूं।😾👈अरे चुप कर महा कमिना 😾👈"],
      "Chutiya": ["तु चुतिया तेरा बाप चुतिया।😾👈", "तु है चुतिया मैं तो बोट हूं।😾", "चुप कर चुतिया😾👈", "अभी बोला तो बोला दोबारा मत बोलना😾👈"],
      "Call": ["यार मैं कैसे कॉल आऊं मैं तो बोट हूं।🥺👈", "नंबर दो😝👈", "क्या मिलेगा कॉल पर🙄👈", "अभी बाबू से बात कर रहा हूं।😝👈"],
      "Tharki": ["तु ठरकी तेरा बाप ठरकी तेरा खानदान ठरकी😾👈", "तु है ठरकी मैं तो बोट हूं।😾👈", "दुबारा ठरकी बोला तो उठा के फेक दूंगा।😾👈"],
      "Chup": ["तु चुप कर मैं तो बोलूंगा।😾👈", "क्यूं रहूं चुप तुम कौन होते हो मुझे चुप कराने वाला ठरकी इंसान😾👈"],
      
    };

    // Array to store mentions
    const mentions = [];

    // Check if the message contains any of the emoji keys from replies
    for (const emoji of emojis) {
      if (event.body.includes(emoji)) {
        const reply = replies[emoji];
        // If reply is an array, randomly select one reply
        const randomReply = Array.isArray(reply) ? reply[Math.floor(Math.random() * reply.length)] : reply;
        // Mention sender by getting user info
        const senderInfo = await api.getUserInfo(senderID);
        const senderName = senderInfo[senderID].name;
        const msg = {
          body: `${senderName}, ${randomReply}`,
          mentions: [{
            tag: senderID,
            id: senderID
          }]
        };
        // Send the message with mention
        return api.sendMessage(msg, threadID, messageID);
      }
    }
  }
};

               
