module.exports.config = {
  name: "log",
  eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
  version: "1.0.0",
  credits: "Mirai Team",
  description: "Ghi lại thông báo các hoạt đông của bot!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Users, Threads }) {
    const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
    let botID = api.getCurrentUserID();
    var allThreadID = global.data.allThreadID;
    for (const singleThread of allThreadID) {
      const thread = global.data.threadData.get(singleThread) || {};
      if (typeof thread["log"] != "undefined" && thread["log"] == false) return;
    } 

    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Kolkata").format("D/MM/YYYY HH:mm:ss");
    //let nameThread = (await Threads.getData(event.threadID)).threadInfo.threadName || "Tên không tồn tại";
    let nameThread = global.data.threadInfo.get(event.threadID).threadName || "Name does not exist"; 

    let threadInfo = await api.getThreadInfo(event.threadID);
    nameThread =threadInfo.threadName;
    const nameUser = global.data.userName.get(event.author) || await Users.getNameUser(event.author);

    console.log(nameThread)

    var formReport = "[⚜️] सुनो शंकर बॉस एक संदेश लाया हु।👈[⚜️]" +
      "\n\n[⚜️] ग्रुप नाम: " + nameThread +
      "\n\n[⚜️] ग्रुप यूआईडी: " + event.threadID +
      "\n\n[⚜️] कार्यवाई: {task}" +
      "\n\n[⚜️] व्यक्ति का नाम: " + nameUser +
      "\n\n[⚜️] यूआईडी: " + event.author +
      "\n\n[⚜️] समय: " + time + "",
        task = "";
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name
            task = "उपयोगकर्ता ने ग्रुप का नाम बदला है।👈: '" + oldName + "' Fort '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "मुझे न्यू ग्रुप में एड किया है😍👈!";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = "मुझे ग्रुप से निकाल दिया है बॉस!🥺🥺👈"
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);

    return api.sendMessage(formReport, global.config.ADMINBOT[0], (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
              }