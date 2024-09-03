/*


# Owner ? : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖓


*/
const {
samConnect,
downloadContentFromMessage,
emitGroupParticipantsUpdate,
emitGroupUpdate,
generateWAMessageContent,
generateWAMessage,
makeInMemoryStore,
prepareWAMessageMedia,
generateWAMessageFromContent,
MediaType,
areJidsSameUser,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
GroupMetadata,
initInMemoryKeyStore,
getContentType,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
proto,
WAGroupMetadata,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WAGroupInviteMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WA_DEFAULT_EPHEMERAL,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
GroupSettingChange,
DisconnectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
fetchLatestBaileysVersion,
templateMessage,
InteractiveMessage,
Header
} = require("@whiskeysockets/baileys")
//=================================================//
const axios = require("axios")
const os = require("os").cpus().length
const util = require("util")
const jimp = require("jimp")
const fetch = require("node-fetch")
const speed = require("performance-now")
const moment = require("moment-timezone")
const pino = require("pino")
const { spawn: spawn, exec } = require("child_process")
const { Primbon } = require("scrape-primbon")
const primbon = new Primbon()
const fg = require("api-dylux")
const path = require("path")
const cheerio = require("cheerio")
const ytdl = require("ytdl-core")
const chalk = require("chalk")
const { color } = require("./lib/color")
const FormData = require("form-data")
const crypto = require("crypto")
const yts = require("yt-search")
const bochil = require("@bochilteam/scraper")
const fakeUA = require("fake-useragent")
const randomUA = fakeUA().toString()
const fs = require("fs")
module.exports = sam = handler = async (sam, m, chatUpdate, store) => {
try {
//=================================================//
var body = m.mtype === "conversation" ? m.message.conversation : m.mtype === "imageMessage" ? m.message.imageMessage.caption : m.mtype === "videoMessage" ? m.message.videoMessage.caption : m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.message.interactiveResponseMessage?.nativeFlowResponseMessage || m.text : ""
//=================================================//
require("./config")
const {
smsg,
getGroupAdmins,
formatp,
h2k,
tanggal,
formatDate,
getTime,
isUrl,
sleep,
clockString,
msToDate,
sort,
toNumber,
enumGetKey,
runtime,
fetchJson,
getBuffer,
jsonformat,
delay,
format,
logic,
generateProfilePicture,
parseMention,
getRandom,
pickRandom
} = require("./lib/myfunction")
const { remini } = require("./lib/remini")
const { toPTT, toAudio } = require("./lib/converter")
const { UploadFileUgu, webp2mp4File, floNime, TelegraPh } = require("./lib/uploader")
const { toTelegra } = require("./lib/upload")
//=================================================//
const { groupMembers } = m
var budy = (typeof m.text == "string" ? m.text : "")
const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/
const prefix = prefa && prefixRegex.test(body) ? body.match(prefixRegex)[0] : (prefa ?? global.prefix)
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : ""
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == "buttonsMessage") ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == "templateMessage") ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == "product") ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ""
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
//User
const botNumber = await sam.decodeJid(sam.user.id)
const itsMe = m.sender == botNumber ? true : false
const itsOrkay = JSON.parse(fs.readFileSync(path.resolve(__dirname, './premium.json'), 'utf8'))
const kontributor = JSON.parse(fs.readFileSync(path.resolve(__dirname, './owner.json'), 'utf8'))
const isDeveloper = [ botNumber, ...kontributor, ...global.ownMain ].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
const isPremium = [ botNumber, ...kontributor, ...itsOrkay, ...global.ownMain ].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
//=================================================//
//Group
const groupMetadata = m.isGroup ? await sam.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroup = m.chat.endsWith('@g.us')
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
//=================================================//
const samido = fs.readFileSync(path.resolve(__dirname, './derived/menu.mp3'))
const jinx = fs.readFileSync(path.resolve(__dirname, './derived/jinx.jpg'))
//=================================================//
const from = m.chat;
//
const time = moment().tz("Africa/Nairobi").format("HH:mm:ss")
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "𝐈𝐦 𝐍𝐨𝐭 𝐖𝐞𝐚𝐤 𝐀𝐧𝐝 𝐈𝐦 𝐍𝐨𝐭 𝐆𝐨𝐧𝐧𝐚 𝐒𝐡𝐨𝐰 𝐀𝐧𝐲𝐨𝐧𝐞 🦋"
} else if (time >= "15:00:00" && time < "19:00:00") {
ucapanWaktu = "𝐘𝐨𝐮 𝐀𝐫𝐞 𝐓𝐡𝐞 𝐑𝐞𝐚𝐬𝐨𝐧 𝐈𝐦 𝐒𝐭𝐢𝐥𝐥 𝐀𝐥𝐢𝐯𝐞 🕊️"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "𝐈 𝐅𝐞𝐞𝐥 𝐋𝐢𝐤𝐞 𝐘𝐨𝐮 𝐀𝐧𝐝 𝐈 𝐆𝐨𝐭 𝐎𝐟𝐟 𝐎𝐧 𝐓𝐡𝐞 𝐖𝐫𝐨𝐧𝐠 𝐀𝐫𝐦 🦄"
} else if (time >= "06:00:00" && time < "11:00:00") {
ucapanWaktu = "..𝐁𝐥𝐚𝐡, 𝐁𝐥𝐚𝐡, 𝐁𝐥𝐚𝐡, 𝐃𝐢𝐝 𝐈 𝐦𝐢𝐬𝐬 𝐚𝐧𝐲𝐭𝐡𝐢𝐧𝐠 ? 🦈"
} else {
ucapanWaktu = "𝐈 𝐑𝐮𝐢𝐧𝐞𝐝 𝐄𝐯𝐞𝐫𝐭𝐡𝐢𝐧𝐠 𝐀𝐧𝐝 𝐈 𝐖𝐢𝐥𝐥 𝐀𝐥𝐰𝐚𝐲𝐬 𝐃𝐨... 💥"
}
const wib = moment(Date.now()).tz("Africa/Nairobi").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Africa/Nairobi").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Africa/Nairobi").locale("id").format("HH:mm:ss z")
const salam = moment(Date.now()).tz("Africa/Nairobi").locale("id").format("a")
let d = new Date
let gmt = new Date(0).getTime() - new Date("1 January 2024").getTime()
let weton = ["hello", "Bro", "Say", "Hi", "👋"][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString("id", {
weekday: "long"
})
let calender = d.toLocaleDateString("id", {
day: "numeric",
month: "long",
year: "numeric"
})
//=================================================//
if (!sam.public) {
    if (!isDeveloper) return
}
let rn = ['recording'] 
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
sam.sendPresenceUpdate(jd, from)
console.log(chalk.black(chalk.bgWhite('[ Client ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Message'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
//sam.public = false
//=================================================//
async function exifAvatar(buffer, packname, author, categories = [''], extra = {}) {
    const {
        default: {
            Image
        }
    } = await import('node-webpmux')
    const img = new Image()
    const json = {
        'sticker-pack-id': 'parel-kntll',
        'sticker-pack-name': packname,
        'sticker-pack-publisher': author,
        'emojis': categories,
        'is-avatar-sticker': 1,
        ...extra
    }
    let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
    let exif = Buffer.concat([exifAttr, jsonBuffer])
    exif.writeUIntLE(jsonBuffer.length, 14, 4)
    await img.load(buffer)
    img.exif = exif
    return await img.save(null)
}
//=================================================//
async function addExif(webpSticker, packname, author, categories = [''], extra = {}) {
    const img = new webp.Image()
    const stickerPackId = Crypto.randomBytes(32).toString('hex')
    const json = {
        'sticker-pack-id': stickerPackId,
        'sticker-pack-name': packname,
        'sticker-pack-publisher': author,
        'emojis': categories,
        ...extra
    }
    let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
    let exif = Buffer.concat([exifAttr, jsonBuffer])
    exif.writeUIntLE(jsonBuffer.length, 14, 4)
    await img.load(webpSticker)
    img.exif = exif
    return await img.save(null)
}
//=================================================//
async function addExifAvatar(buffer, packname, author, categories = ["🥀"], extra = {}, ) {
    const {
        default: {
            Image
        },
    } = await import("node-webpmux")
    const img = new Image()
    const json = {
        "sticker-pack-id": "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2",
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
        emojis: categories,
        "is-ai-sticker": 1,
        "android-app-store-link": 'https://play.google.com/store/apps/details?id=com.snowcorp.stickerly.android',
        "ios-app-store-link": 'https://play.google.com/store/apps/details?id=com.snowcorp.stickerly.android',
        ...extra,
    }
    let exifAttr = Buffer.from([
        0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57,
        0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00,
    ])
    let jsonBuffer = Buffer.from(JSON.stringify(json), "utf8")
    let exif = Buffer.concat([exifAttr, jsonBuffer])
    exif.writeUIntLE(jsonBuffer.length, 14, 4)
    await img.load(buffer)
    img.exif = exif
    return await img.save(null)
}
//=================================================//
let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}
//=================================================//
const reaction = async (jidss, emoji) => {
    sam.sendMessage(jidss, {
        react: {
            text: emoji,
            key: m.key
        }
    })
}
//=================================================//
async function crtImg(url) {
    const { imageMessage } = await generateWAMessageContent({
        image: { url }
        }, {
            upload: sam.waUploadToServer
        })
    return imageMessage
}
//=================================================//
async function loadings () {
var lod = [
"> 𝐇𝐞𝐥𝐥𝐨 𝐇𝐮𝐦𝐚𝐧 🇰🇪",
"> 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐦𝐲 𝐆𝐫𝐞𝐚𝐭𝐞𝐬𝐭 𝐌𝐚𝐬𝐭𝐞𝐫 🕊️",
"> 𝐇𝐚𝐩𝐩𝐲 𝐓𝐨 𝐒𝐞𝐫𝐯𝐞 𝐘𝐨𝐮 🦋",
"> 𝐌𝐲 𝐍𝐚𝐦𝐞 𝐈𝐬 .......𝐉𝐢𝐧𝐱 🦄",
]
let { key } = await sam.sendMessage(from, {text: ''})

for (let i = 0; i < lod.length; i++) {
await sam.sendMessage(from, {text: lod[i], edit: key });
}
	 }
//================================================//
async function crtVid(url) {
    const { videoMessage } = await generateWAMessageContent({
        image: { url }
        }, {
            upload: sam.waUploadToServer
        })
    return videoMessage
}
//=================================================//
async function prM(params) {
    return await prepareWAMessageMedia(params, { upload: sam.waUploadToServer })
}
//=================================================//
const reply = async (teks) => {
    await sleep(500)
    return sam.sendMessage(m.chat, {
        contextInfo: {
            mentionedJid: [
                m.sender
            ],
            externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: false,
                title: `𝐉𝐢𝐧𝐱🦄`,
                body: `𝐛𝐲 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                previewType: "VIDEO",
                thumbnailUrl: `https://telegra.ph/file/551afec95ef19903d1a75.jpg`,
                sourceUrl: `${global.url1}`,
                mediaUrl: `${global.url1}`
            }
        },
        text: teks
    }, {
        quoted: m
    })
    await sleep(500)
}
//=================================================//
const dust = {
    "key": {
        "remoteJid": "status@broadcast",
        "participant": "0@s.whatsapp.net",
        "fromMe": false
    },
    "message": {
        "interactiveMessage": {
            "header": {
                "title": ""
            },
            "body": {
                "text": "𝐉𝐈𝐍𝐗"
            },
            "footer": {
                "text": "by - 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒"
            },
            "nativeFlowMessage": {
                "messageParamsJson": "" //.repeat(850000)
            }
        }
    }
}
const troll = {
    key: {
        fromMe: false,
        participant: '0@s.whatsapp.net',
        remoteJid: "status@broadcast"
    },
    message: {
        orderMessage: {
            orderId: "2029",
            thumbnail: null,
            itemCount: 909,
            status: "INQUIRY",
            surface: "CATALOG",
            message: `MsG - ${m.body || m.mtype}`,
            token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
        }
    },
    contextInfo: {
        mentionedJid: m.sender.split,
        forwardingScore: 999,
        isForwarded: true
    }
}
const qpay = {
    key: {
        remoteJid: '',
        fromMe: false,
        participant: '0@s.whatsapp.net'
    },
    message: {
        paymentInviteMessage: {
            serviceType: 1,
            expiryTimestamp: 2
        }
    }
}
const vidq = {
    key: {
        remoteJid: '0@s.whatsapp.net',
        fromMe: false,
        participant: '0@s.whatsapp.net'
    },
    message: {
        videoMessage: {
            caption: "#𝐉𝐈𝐍𝐗",
            jpegThumbnail: '',
        }
    }
}
//=================================================//
// Ngambil semua plugin dari direktori dan subdirektori
const loadPlugins = (directory) => {
    let plugins = []
    const folders = fs.readdirSync(directory)
    folders.forEach(folder => {
        const folderPath = path.join(directory, folder)
        if (fs.lstatSync(folderPath).isDirectory()) {
            const files = fs.readdirSync(folderPath)
            files.forEach(file => {
                const filePath = path.join(folderPath, file)
                if (filePath.endsWith(".js")) {
try {
    delete require.cache[require.resolve(filePath)]
    const plugin = require(filePath)
    plugin.filePath = filePath
    plugins.push(plugin)
} catch (error) {
    console.error(`Error loading plugin at ${filePath}:`, error)
}
                }
            })
        }
    })
    return plugins
}
// Ngambil semua plugin dari direktori plugin
const plugins = loadPlugins(path.resolve(__dirname, "./plugin"))
const context = { sam, m, chatUpdate, store, body, require, smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, groupMembers, budy, prefixRegex, prefix, isCmd, command, args, pushname, text, q, fatkuns, quoted, mime, qmsg, isMedia, botNumber, itsMe, itsOrkay, kontributor, isDeveloper, isPremium, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, isGroup, groupOwner, isGroupOwner, time, ucapanWaktu, wib, wita, wit, salam, d, gmt, weton, week, calender, dust, reaction, reply, TelegraPh, toTelegra, resize, remini, crtImg, crtVid, addExifAvatar, addExif, exifAvatar, prM }
// Kode ini ngeliat plugin satu per satu, kalo nemu plugin yang cocok ama command yang diterima, dia langsung manggil fungsi operate-nya dan berhenti.
let handled = false
for (const plugin of plugins) {
    if (plugin.command.includes(command)) {
        try {
            await plugin.operate(context)
            handled = true
        } catch (error) {
            console.error(`Error executing plugin ${plugin.filePath}:`, error)
        }
        break
    }
}
//=================================================//
if (m.message) {
    console.log(chalk.green.bgHex("#e74c3c").bold(`\n💫 ${ucapanWaktu} 💫`))
    console.log(chalk.green.bgHex("#e74c3c").bold(`✉️ Message`))
    console.log(chalk.black.bgHex("#00FF00")(`📅 Date: ${new Date().toLocaleString()} \n💬 Message: ${m.body || m.mtype} \n🗣️ From: ${m.pushName} \n🔢 User JID: ${m.sender}`))
    if (m.isGroup) {
        console.log(chalk.black.bgHex("#00FF00")(`🏷️ Grup: ${groupName}`))
        console.log(chalk.black.bgHex("#00FF00")(`🧷 GroupJid: ${m.chat}`))
    }
    //await sleep(1000)
    //await console.log(JSON.stringify(m.message))
}

/*if (!isGroup) {
    if (JSON.stringify(m.message).includes('"listType":"PRODUCT_LIST","productListInfo":{"productSections":[')) {
        sam.updateBlockStatus(m.sender, 'block')
        sam.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.sender)
    }

    if (JSON.stringify(m.message).includes('":{"message":{"interactiveMessage":{"header":{"') && /\\u0000|\\u0001|\\u0002|\\u0003/.test(JSON.stringify(m.message))) {
        sam.updateBlockStatus(m.sender, 'block')
        sam.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.sender)
    }
}*/

if (!handled) {
switch (command) {
//=================================================//
case 'menu': case 'test':{
await loadings()
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let nest = ` 
     🦄 𝗝𝗜𝗡𝗫━𝗩1 🦄
   ━━━━━━━━━━━━━━━━━
   ▣ ${ucapanWaktu} 

   ◉ ${m.pushName}
  ━━━━━━━━━━━━━━━━━━
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ➢ 𝐏𝐫𝐞𝐟𝐢𝐱 : ${prefix}
 ┃ ➣ 𝐉𝐢𝐧𝐱 𝐒𝐩𝐞𝐞𝐝 : ${latensi.toFixed(4)}
 ┃ ➣ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${run}
 ┗━━━━━━━━━━━━━━━━━◈
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ✰ 𝐨𝐰𝐧𝐞𝐫𝐦𝐞𝐧𝐮
 ┃ ✰ 𝐩𝐢𝐧𝐠
 ┃ ✰ 𝐉𝐢𝐧𝐱
 ┃ ✰ 𝐠𝐞𝐧𝐢𝐮𝐬-𝐣𝐢𝐧𝐱
 ┃ ✰ 𝐣𝐢𝐧𝐱-𝐝𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐬
 ┃ ✰ 𝐣𝐢𝐧𝐱-𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐬
 ┗━━━━━━━━━━━━━━━━━◈
> 𝐁𝐘 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: nest,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝐉𝐈𝐍𝐗`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/d945b02dab1726a2bc763.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await sam.sendMessage(m.chat, {
audio: samido,
mimetype: 'audio/mpeg'
}, { quoted: m
})
}
break
        /*
case 'samii':{
await loading ()
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())

//Button Menu
let kingsam = {
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": 'By 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒',
"serverMessageId": 1
},
},
"header": {
"title": nest,
...(await prepareWAMessageMedia({ image: jinx }, { upload: sam.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "⿻  By 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒 ⿻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "single_select",
"buttonParamsJson": `{ "title": "⿻Kyoja+⿻", "sections": [{ "title": "# !-Choose One Of Them", "highlight_label": "🌏General Commands🗨️", "rows": [{ "header": "JINX MAIN COMMANDS", "title": "Show All Command", "id": ".test" }, { "header": "Owner", "title": "Displays Owner Number", "id": ".owner" }, { "header": "Bot Info", "title": "Displays Information About Bots", "id": ".botstatus" }] }, { "title": "🦠 SpeCiaL - ComManD ❌", "highlight_label": " #SpeCial ", "rows": [{ "header": "Special - Menu", "title": "displays all special commands", "id": ".spesialmenu" }] }] }`
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"Saluran WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadBczKI1rcayqzQ2n0e\",\"merchant_url\":\"https://whatsapp.com/channel/0029VadBczKI1rcayqzQ2n0e\"}"
}
],
"messageParamsJson": ""
}
}
}
}
};

let kontollurus = {
image: njix,
caption: `Demon`,
contextInfo:{externalAdReply:{
title: 'JINX V1',
body: `👤 名前 : ${m.pushName}\n🕑${ucapanWaktu}`, 
showAdAttribution: true,
thumbnail: ``,
mediaType: 4,
MediaUrl:``,
sourceUrl:``,
}}
};

}

}
break */

case 'ownermenu':{
await loadings()
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let nesy = ` 
   🦄 𝗝𝗜𝗡𝗫━𝗩1 🦄
  ━━━━━━━━━━━━━━━━
  ▣ ${ucapanWaktu} 
 
  ◉ ${m.pushName}
  ━━━━━━━━━━━━━━━━
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ➢ 𝐏𝐫𝐞𝐟𝐢𝐱 : ${prefix}
 ┃ ➣ 𝐉𝐢𝐧𝐱 𝐒𝐩𝐞𝐞𝐝 : ${latensi.toFixed(4)}
 ┃ ➣ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${run}
 ┗━━━━━━━━━━━━━━━━━◈
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ✰ 𝐩𝐮𝐛𝐥𝐢𝐜
 ┃ ✰ 𝐬𝐞𝐥𝐟
 ┃ ✰ 𝐛𝐥𝐨𝐜𝐤
 ┃ ✰ 𝐮𝐧𝐛𝐥𝐨𝐜𝐤
 ┃ ✰ 𝐥𝐢𝐬𝐭𝐛𝐥𝐨𝐜𝐤
 ┗━━━━━━━━━━━━━━━━━◈
> 𝐉𝐢𝐧𝐱 𝐰𝐚𝐬 𝐢𝐧𝐯𝐞𝐧𝐭𝐞𝐝 ® 2024 
> 𝐁𝐘 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: nesy,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝐉𝐈𝐍𝐗`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/d945b02dab1726a2bc763.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
case 'jinx-downloads':{
await loadings()
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let nesy = ` 
   🦄 𝗝𝗜𝗡𝗫━𝗩1 🦄
  ━━━━━━━━━━━━━━━━
  ▣ ${ucapanWaktu} 
 
  ◉ ${m.pushName}
  ━━━━━━━━━━━━━━━━
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ➢ 𝐏𝐫𝐞𝐟𝐢𝐱 : ${prefix}
 ┃ ➣ 𝐉𝐢𝐧𝐱 𝐒𝐩𝐞𝐞𝐝 : ${latensi.toFixed(4)}
 ┃ ➣ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${run}
 ┗━━━━━━━━━━━━━━━━━◈
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ✰ 𝐩𝐥𝐚𝐲
 ┃ ✰ 𝐲𝐭𝐦𝐩3
 ┃ ✰ 𝐲𝐭𝐦𝐩4
 ┃ ✰ 𝐦𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞
 ┃ ✰ 𝐢𝐠
 ┃ ✰ 𝐠𝐢𝐭𝐜𝐥𝐨𝐧𝐞
 ┗━━━━━━━━━━━━━━━━━◈
"> 𝐉𝐢𝐧𝐱 𝐰𝐚𝐬 𝐢𝐧𝐯𝐞𝐧𝐭𝐞𝐝 ® 2024",
> 𝐁𝐘 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: nesy,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝐉𝐈𝐍𝐗`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/d945b02dab1726a2bc763.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
 case 'genius-jinx':{
await loadings()
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let kesy = ` 
   🦄 𝗝𝗜𝗡𝗫━𝗩1 🦄
  ━━━━━━━━━━━━━━━━
  ▣ ${ucapanWaktu} 
 
  ◉ ${m.pushName}
  ━━━━━━━━━━━━━━━━
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ➢ 𝐏𝐫𝐞𝐟𝐢𝐱 : ${prefix}
 ┃ ➣ 𝐉𝐢𝐧𝐱 𝐒𝐩𝐞𝐞𝐝 : ${latensi.toFixed(4)}
 ┃ ➣ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${run}
 ┗━━━━━━━━━━━━━━━━━◈
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ✰ 𝐣𝐢𝐧𝐱-𝐚𝐢
 ┃ ✰ 𝐛𝐫𝐚𝐢𝐧-𝐚𝐢
 ┃ ✰ 𝐚𝐢
 ┃ ✰ 𝐚𝐥𝐞𝐱𝐚
 ┗━━━━━━━━━━━━━━━━━◈
"> 𝐉𝐢𝐧𝐱 𝐰𝐚𝐬 𝐢𝐧𝐯𝐞𝐧𝐭𝐞𝐝 ® 2024",
> 𝐁𝐘 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: kesy,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝐉𝐈𝐍𝐗`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/d945b02dab1726a2bc763.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
  case 'jinx-convert':{
await loadings()
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let pesy = ` 
   🦄 𝗝𝗜𝗡𝗫━𝗩1 🦄
  ━━━━━━━━━━━━━━━━
  ▣ ${ucapanWaktu} 
 
  ◉ ${m.pushName}
  ━━━━━━━━━━━━━━━━
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ➢ 𝐏𝐫𝐞𝐟𝐢𝐱 : ${prefix}
 ┃ ➣ 𝐉𝐢𝐧𝐱 𝐒𝐩𝐞𝐞𝐝 : ${latensi.toFixed(4)}
 ┃ ➣ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${run}
 ┗━━━━━━━━━━━━━━━━━◈
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ✰ 𝐜𝐚𝐥𝐜
 ┃ ✰ 𝐫𝐞𝐦𝐢𝐧𝐢
 ┃ ✰ 𝐫𝐦𝐛𝐠
 ┃ ✰ 𝐬𝐡𝐨𝐮𝐫𝐭𝐮𝐫𝐥
 ┃ ✰ 𝐬𝐭𝐢𝐜𝐤𝐞𝐫
 ┃ ✰ 𝐬𝐦𝐞𝐦𝐞
 ┃ ✰ 𝐭𝐞𝐱𝐭𝐦𝐚𝐤𝐞𝐫
 ┃ ✰ 𝐬𝐭𝐭
 ┃ ✰ 𝐭𝐨𝐢𝐦𝐚𝐠𝐞
 ┃ ✰ 𝐭𝐨𝐚𝐮𝐝𝐢𝐨
 ┃ ✰ 𝐭𝐭𝐩
 ┃ ✰ 𝐭𝐨𝐪𝐫
 ┃ ✰ 𝐭𝐭𝐬
 ┗━━━━━━━━━━━━━━━━━◈
> 𝐉𝐢𝐧𝐱 𝐰𝐚𝐬 𝐢𝐧𝐯𝐞𝐧𝐭𝐞𝐝 ® 2024 
> 𝐁𝐘 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: pesy,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝐉𝐈𝐍𝐗`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/d945b02dab1726a2bc763.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
//======================================//
case "ping": case "speed": { 
let timestamp = speed()
let latensi = speed() - timestamp

         m.reply (`\n\━━━━━━━━━━━━━━━━━\n\✫ ${ucapanWaktu}\n\━━━━━━━━━━━━━━━━━\n\◉ ${m.pushName}\n\━━━━━━━━━━━━━━━━━\n\◈ 𝐉𝐢𝐧𝐱 𝐒𝐩𝐞𝐞𝐝 : ${latensi.toFixed(4)} 𝐌𝐒\n\━━━━━━━━━━━━━━━━━`); 
         } 
 break; 
//=====≠==================================//
case "jinx": { 
  
 sam.sendMessage(m.chat, { video: { url: 'https://telegra.ph/file/615f4fe0243119de98dad.mp4' }, caption: `🦋${ucapanWaktu} \n🦄 𝐇𝐞𝐥𝐥𝐨 *${m.pushName}*, \n🦄 𝐈𝐭 𝐢𝐬 𝐦𝐞 𝐉𝐢𝐧𝐱\n🦄 𝐒𝐞𝐫𝐯𝐢𝐧𝐠 𝐚𝐭 𝐦𝐲 𝐛𝐞𝐬𝐭 \n🦄 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,fileLength: "9999999999898989899999999" }, { quoted: m });
 }
break;
//========================================//
case 'public': {
if (!isDeveloper) return
sam.public = true
await reaction(m.chat, "💫")
}
break
case 'self': {
if (!isDeveloper) return
sam.public = false
await reaction(m.chat, "💫")
}
break
case 'block': {
if (!isDeveloper) return
await reaction(m.chat, "🔥")
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'; /**/ users = users || m.chat
if (users.includes('@g.us')) return xreply("Loh, @g.us ? 🧐")
await sam.updateBlockStatus(users, 'block').then((res) => xreply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
await reaction(m.chat, "✅")
}
break
case 'unblock':
if (!isDeveloper) return
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(isGroup){
if(users){
await sam.updateBlockStatus(users, "unblock")
await reply(`Succeful unblocked user`)
} else if(!q){
reply("Reply to targets text 🦄")
}
} else if(!isGroup){
if(q){
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("07")) return xreply("Start the number with 254")
if(!woke.startsWith("254")) return xreply("Please reply to the message or tag or enter the number you want to blockk")
await sam.updateBlockStatus(woke, "unblock")
reply(`Succes unblocked ${woke}`)
} else if(!q){
reply("Enter the number you want to unblock")
}

}
break
case 'listblock':{
let block = await tdx.fetchBlocklist()
reply('✫ 𝐉𝐈𝐍𝐗 𝐁𝐋𝐎𝐂𝐊𝐄𝐃 𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐒 ⦾ :\n\n' + `➤𝐓𝐨𝐭𝐚𝐥 : ${block == undefined ? '➵ 𝐁𝐥𝐨𝐜𝐤𝐞𝐝' : '*' + block.length + '* 𝐅𝐮𝐜𝐤 𝐘𝐨𝐮 𝐁𝐥𝐨𝐜𝐤𝐞𝐝 𝐂𝐨𝐧𝐭𝐚𝐜𝐭𝐬'}\n` + block.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
}
break
//========================================//
 
default:
}
}
if (budy.startsWith("=>")) {
if (!isDeveloper) return
try {
const result = await eval(`(async () => { return ${budy.slice(3)} })()`)
m.reply(util.format(result))
} catch (e) {
m.reply(String(e))
}
}
if (budy.startsWith(">")) {
if (!isDeveloper) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== "string") evaled = require("util").inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
if (budy.startsWith("$")) {
if (!isDeveloper) return
exec(budy.slice(2),
(err, stdout) => {
if (err) return m.reply(err.toString())
if (stdout) return m.reply(stdout.toString())
})
}
} catch (err) {
const handleError = async () => {
sam.sendMessage(global.ownMain + "@s.whatsapp.net", {
text: require("util").format(err)
}, {
quoted: m
})
new Promise(resolve => setTimeout(resolve, 2000))
/*m.reply(`!Eror, error details will be sent to bot contributors ✓

${util.format(err)}`)*/
console.log(util.format(err))
}
handleError()
}
}
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(color(`Update ${__filename}`, "green"))
delete require.cache[file];
require(file);
});