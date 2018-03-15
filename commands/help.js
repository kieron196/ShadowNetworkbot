const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let helpembed = new Discord.RichEmbed();

  .addField("Prefix", "The Prefix is S$")
  .addField("Help", "Shows all commands")
  .addField("botinfo", "Shows The Bots info")
  .addField("ServerInfo", "Shows The Server info")
};



module.exports.help = {
  name: "Help"
}
