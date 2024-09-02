const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
const yts = require('sector-pack')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
module.exports = {
    type: 'search',
    command: ['sonhsg', 'playyu'],
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
    }
};
