const Canvas = require('canvas');
const Discord = require('discord.js')
exports.run = async(client,message,args)=>{
    console.log(args)
    var meme =args[0].split(',')
    const canvas = Canvas.createCanvas(730, 400);
	const ctx = canvas.getContext('2d');

	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage('./commands/boo.jpg');
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 28px sans-serif';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#000000';
	// Actually fill the text with a solid color
	ctx.fillText(meme[0], 60, 150);
    ctx.fillText(meme[1],360,160)
	// Use helpful Attachment class structure to process the file for you
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'boo-meme.png');

	message.channel.send(` `, attachment);

}

exports.help = {
  name : "boo",
  description: "Generate a boo meme",
  aliases: ["b","ghost","scare"],
  usage: "boo/alias  word1,word2 (no-spaces please)",
  permissions:false
};
