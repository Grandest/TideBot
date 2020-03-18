const Discord = require("discord.js")
exports.run = async(client, message, args) => {

 const exampleEmbed = new Discord.RichEmbed()
  .setColor('#0099ff')
  .setAuthor('Tide Gaming',client.user.displayAvatarURL)

  .setThumbnail(client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter('Developed by Tide Gaming', client.user.displayAvatarURL);
  if(args.length<=0){
    client.commands.forEach((cmd)=>{
      if(cmd.help.name !== "help"){
        if(cmd.help.permissions){
          if(message.member.roles.some(r=>cmd.help.roles.includes(r.name)) ){
            exampleEmbed.addField("✅`"+cmd.help.name+"`",cmd.help.description,true)
          }
          else
            exampleEmbed.addField("❌`"+cmd.help.name+"`",cmd.help.description,true)
      }
      else
        exampleEmbed.addField("✅`"+cmd.help.name+"`",cmd.help.description,true)
      }
    })
  }
  else{
    let hlp = client.commands.get(args[0])

    exampleEmbed.addField('Name',hlp.help.name,true)
    exampleEmbed.addField('Description',hlp.help.description,true)
    exampleEmbed.addField('Aliases',hlp.help.aliases,true)
    exampleEmbed.addField('Usage',hlp.help.usage,true)
  }
message.channel.send(exampleEmbed);

}
exports.help = {
  name : "help",
  description: "Command Description",
  aliases: ["h"],
  usage: "command <argument>"
};
