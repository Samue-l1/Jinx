const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
const yts = require('sector-pack')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
module.exports = {
    type: 'search',
    command: ['ytsearch'],
    operate: async (context) => {
        const { q, sam, m, reply, reaction, crtImg,  } = context;
  let yts = require("secktor-pack");
        if (!text) return m.reply(`Example : ${prefix}yts ${tlang().title} WhatsApp Bot`);
        let search = await yts(text);
        let textt = "*YouTube Search*\n\n Result From " + text + "\n\n───────────────────\n";
        let no = 1;
        for (let i of search.all) {
            textt += `⚡ No : ${no++}\n ❤Title : ${i.title}\n♫ Type : ${
      i.type
    }\n🙈Views : ${i.views}\n⌛Duration : ${
      i.timestamp
    }\n🌟Upload At : ${i.ago}\n👑Author : ${i.author.name}\n🎵Url : ${
      i.url
    }\n\n──────────────\n\n`;
        }
        return sam.sendMessage(m.chat, {
            image: {
                url: search.all[0].thumbnail,
            },
            caption: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
        }, {
            quoted: `JINX - V1`,
        });
    }
)       
module.exports = {
    type: 'search',
    command: ['song', 'play'],
    operate: async (context) => {
        const { q, sam, m, reply, reaction, crtImg,  } = context;

     if (!text) return m.reply(`Use ${command} Back in Black`);
            let yts = require("secktor-pack");
            let search = await yts(text);
            let anu = search.videos[0];
            let buttonMessage = {
                image: {
                    url: anu.thumbnail,
                },
                caption: `
╭───────────────◆
│⿻ ${tlang().title} 
│  *Youtube Player* ✨
│⿻ *Title:* ${anu.title}
│⿻ *Duration:* ${anu.timestamp}
│⿻ *Viewers:* ${anu.views}
│⿻ *Uploaded:* ${anu.ago}
│⿻ *Author:* ${anu.author.name}
╰────────────────◆
⦿ *Url* : ${anu.url}
`,
                footer: tlang().footer,
                headerType: 4,
            };
            return sam.sendMessage(m.chat, buttonMessage, {
                quoted: m,
            });

        }
    )
