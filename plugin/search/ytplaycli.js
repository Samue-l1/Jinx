const fs = require('fs');
const path = require('path');
const axios = require('axios');
const yts = require('yt-search');

module.exports = {
    type: 'search',
    command: ['play'],
    operate: async (context) => {
        const { q, sam, m, reply, reaction } = context;

        if (!q) {
            await reply('Please provide a search query!\n\n*Example: play Kosoba by Tope Alabi*');
            await reaction(m.chat, '❗');
            return;
        }

        try {
            await reply(`JINX-V1 IS PROCESSING YOUR REQUEST SONG OF "${q}"...`);
            await reaction(m.chat, '⬇️');

            const { videos } = await yts(q);
            if (!videos.length) {
                await reply('No results found. Please try a different query.');
                await reaction(m.chat, '❌');
                return;
            }

            const videoUrl = videos[0].url;
            const apiUrl = `https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp3v2?url=${encodeURIComponent(videoUrl)}&feature=shared&apikey=gifted`;

            const { data } = await axios.get(apiUrl);
            const downloadUrl = data.url;
            if (!downloadUrl) throw new Error('Failed to retrieve the audio download link.');

            const audioPath = path.join(__dirname, `${videos[0].title}.mp3`);
            const writer = fs.createWriteStream(audioPath);

            (await axios.get(downloadUrl, { responseType: 'stream' })).data.pipe(writer);

            writer.on('finish', async () => {
                const audioBuffer = fs.readFileSync(audioPath);
                await sam.sendMessage(m.chat, {
                        audio: audioBuffer,
                        mimetype: 'audio/mpeg'
                    }, { quoted: m });
                fs.unlinkSync(audioPath);
                await reaction(m.chat, '🦄');
                await sam.sendMessage(m.chat, {text: `PROVIDED BY JINX-V1 🦄\n> ABRO`})
            });

            writer.on('error', async (err) => {
                console.error('Download Error:', err);
                await reply('Failed to download audio. Please try again later.');
                await reaction(m.chat, '❌');
            });
        } catch (error) {
            console.error('Error:', error);
            await reply('An unexpected error occurred. Please try again later.');
            await reaction(m.chat, '❌');
        }
    }
};
