const { Default_Prefix, Color, Owner, Support, Donate } = require("../../config.js");
const Discord = require("discord.js");
const db = require("wio.db");

module.exports = {
  name: "invite",
  aliases: ["invitelink"],
  category: "Other",
  description: "Give You My Invite Link, Etc!",
  usage: "Invite",
  run: async (client, message, args) => {
    
    const Invite = `https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`, Owne = `<@731952429238714378>`, Dev = `<@788812460303450112>`;
    
    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("⚒Thanks")
    .addField("⚒Invite Me", `[invite](${Invite})`, true)
    .addField("⚒Support Server", `[support](${Support})`, true)
    .addField("⚒Owner", Owne, true)
    .addField("⚒Devloper", Dev)
    .setTimestamp();
    
    return message.channel.send(Embed).catch(() => message.channel.send("Invite Link - " + Invite));
  }
};
