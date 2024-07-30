const axios = require("axios");
const fs = require("fs-extra");

module.exports = {
    config: {
        name: "pair",
        aliases: [],
        version: "1.0",
        author: "SHANKAR SUMAN",
        countDown: 5,
        role: 0,
        shortDescription: "",
        longDescription: "",
        category: "love",
        guide: "{pn}"
    },

    onStart: async function({ api, event, threadsData, usersData }) {
        const { threadID, senderID } = event;
        const { participantIDs } = await api.getThreadInfo(threadID);
        const botID = api.getCurrentUserID();
        const listUserID = participantIDs.filter(ID => ID !== botID && ID !== senderID);
        const pairedUserID = listUserID[Math.floor(Math.random() * listUserID.length)];

        const senderName = (await usersData.get(senderID)).name;
        const pairedUserName = (await usersData.get(pairedUserID)).name;

        const arraytag = [
            { id: senderID, tag: senderName },
            { id: pairedUserID, tag: pairedUserName }
        ];

        try {
            const [avatarResponse, gifResponse, pairedAvatarResponse] = await Promise.all([
                axios.get(`https://graph.facebook.com/${senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" }),
                axios.get(getRandomGifURL(), { responseType: "arraybuffer" }),
                axios.get(`https://graph.facebook.com/${pairedUserID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" })
            ]);

            fs.writeFileSync(__dirname + "/cache/avt.png", Buffer.from(avatarResponse.data, "utf-8"));
            fs.writeFileSync(__dirname + "/cache/giflove.png", Buffer.from(gifResponse.data, "utf-8"));
            fs.writeFileSync(__dirname + "/cache/avt2.png", Buffer.from(pairedAvatarResponse.data, "utf-8"));

            const imglove = [
                fs.createReadStream(__dirname + "/cache/avt.png"),
                fs.createReadStream(__dirname + "/cache/giflove.png"),
                fs.createReadStream(__dirname + "/cache/avt2.png")
            ];

            const tle = Math.floor(Math.random() * 101);
            const message = {
                body: `🥰लो मिल गया आपका जीवन साथी 🙂🖐️\nअब बार-बार मत बोलना सेटिंग करवाने को 😒👈\nआप दोनो का प्यार 👉: ${tle}% है।🤐👈\n${senderName} 💓 ${pairedUserName}`,
                mentions: arraytag,
                attachment: imglove
            };

            return api.sendMessage(message, threadID);
        } catch (error) {
            console.error("Error:", error);
            // Handle error
        }
    }
};

function getRandomGifURL() {
    const gifURLs = [
        "https://i.ibb.co/M1ZTpdh/image.gif",
        "https://i.ibb.co/V96bXRs/image.gif",
        "https://i.ibb.co/JdsG7jd/image.gif",
        "https://i.ibb.co/RQwL3n4/image.gif",
        "https://i.ibb.co/CbngWXt/image.gif"
    ];
    return gifURLs[Math.floor(Math.random() * gifURLs.length)];
}
