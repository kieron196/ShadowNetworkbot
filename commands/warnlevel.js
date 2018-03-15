const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));


module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES") return message.reply("Can't Do That");
  let wUser = message.guild.member(message.mentions.user.first())|| message.guild.members.get(args[0]);
  if(!WUser) return message.reply("Couldn't find this user");
  let warnlevel = warns[wUser.id].warns;

  message.reply(`<@${wUser.id}> has ${warnleve} Warnings`);
  
}

module.exports.help = {
  name: "WarnLevel"
}
