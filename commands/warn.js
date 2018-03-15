const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("I am unable to do that");
  let wUser = message.guild.member(message.mentions.user.first())|| message.guild.members.get(args[0]);
  if(!WUser) return message.reply("Couldn't find this user");
  if(wUser.hasPermission("MANAGE_MEMBERS")) return message.reply("unable to do this");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;1

  fs.writeFile("./warnings.json", JSON.stringify(warns) (err) => {
    if (err) console.log(err);
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Warned User", wUSer.tag)
  .addField("Warned In", message.channel)
  .addField("Number of Warnings", warns[wUser.id].warns)
  .addField("Reason", reason);

  let warnchannel = message.guild.channels.find(`name`, "incidents");
  if(!warnchannel) return message.reply("Couldn't find Channel");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("Create Muted Role");

    let mutetime = "10s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`${wUser.tag} has been temporarily muted`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.channel.reply(`${wUSer.tag} has been unmuted`)
    })
  }
  if(warns[wUser.id].warns == 3){
    message.guild.member(wUSer).ban(reason);
    message.channel.send(`${wUser.tag} has been banned`);

  }

}

module.exports.help = {
  name: "Warn"
}
