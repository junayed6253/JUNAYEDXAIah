module.exports = {
    config: {
        name: "chat",
        version: "1.0",
        author: "junayed",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "gd m9") return message.reply("m9 too 😊");
}
};
