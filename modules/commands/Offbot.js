module.exports.config = {
	name: "offbot2",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HTHB",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = [`100085041682156`,`100085041682156`];
	if (!permission.includes(event.senderID)) return api.sendMessage("You don't have permission to use this command.", event.threadID, event.messageID);
  api.sendMessage(`Hoyy ka Jovan ayoko pa maoff pleeeaseee\n\noh no Jovan /*naoff`,event.threadID, () =>process.exit(0))
      }