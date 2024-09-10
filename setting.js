const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const Fichan = new require('./lib/functions')
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

// SETTINGS IS BAILEYS \\
global.baileys = require('@whiskeysockets/baileys') // Biarin Ae Jir
global.api = 'yn3mOtHb' 
global.logic = 'Kamu adalah Ai';
global.linkapikey = 'https://api.betabotz.eu.org' // kalian ambil aja apikeynya di situ daftar gratis tar tinggal copy aja apikeynya
// abistu masukin ke yang global.api
// ====================== \\

/* SETTING IS PAIRING CODE 
True To Pairing Code
False To Scan QR
*/
global.usePairingCode = true 
// ====================== \\

// SETTING IN SALURAN WHATSAPP \\
global.saluran = 'https://whatsapp.com/channel/0029VaYrPmgATRSmekpfTD3t'
global.idsal = "https://chat.whatsapp.com/H1uN96mq6Ht4HXYohBx4BF"
// ====================== \\

// SETTING IN OWNER NAME AND NUMBER OWNER \\
global.ownername = 'Meta Bot' // Owner Name
global.owner = ['6283122692749'] // Nomor Owner
global.botname = 'Meta Bot' // Nama Bot
// ====================== \\

// SETTING IN WM \\
global.packname = 'Meta Bot' // Name Sticker
global.author = `Meta Bot` // Name Sticker 
global.hiasan = `	◦  ` // Biarin ,, Klo Ubah Eror Ga Nanggung 
global.prefa = ['','!','.',',','🐤','🗿'] // Biarin Juga
global.sessionName = 'inisession' // Gausah
global.sp = '⭔' // Jangan
global.wlcm = []
global.wlcmm = []
global.versi = '5.0.0'
global.gris = '`'
global.wm = `Meta Bot` // Ubah Ae
global.namaStore = 'Meta Bot' // Ubah Ae
global.ownerStore = 'Meta Bot' // Ubah Ae
global.autobio = true // True Jika Langsung On False Jika Off
global.autoread = true // True Jika Langsung On False Jika On
global.thumbnail = 'https://telegra.ph/file/30b6ef9b8be0b9c1e4cd1.jpg'
// ====================== \\

// SETTING IN APIKEY CPANEL \\
global.footer2 = Styles('CREATED FERNAZER')
global.domain = 'https://metabot.daanoffc.my.id' // Isi Domain Lu
global.apikey2 = 'ptla_J7VD00646gkRFYYn90UahSub824g1rYBJUnUuAWIdvj' // Isi Apikey Plta Lu
global.capikey2 = 'ptlc_8avHAStGdwMxyar1I73GQ0kfMuj9Hgzne2GsRKWaO3z' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yankai
global.location = '1' // id location
// ====================== \\

// SETTING IN CREAT LINODE \\
global.apilinode = ''
global.apitokendo = ''
// ====================== \\

// MESSAGE OTOMATISED \\
global.Func = Fichan
global.systemN = `*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ*`
global.mess = {
    ban: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ʟᴜ ᴅɪ ʙᴀɴᴅ ᴏᴡɴᴇʀ'),
    badm: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴊᴀᴅɪɪɪɴ ʙᴏᴛ ᴀᴅᴍɪɴ ᴅᴜʟᴜ ʟᴀʜ ʙᴀʀᴜ ʙɪsᴀ ɢᴜɴᴀɪɴ ɴɪʜ ғɪᴛᴜʀᴇ'),
    regis: Styles(`*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ .ᴅᴀғᴛᴀʀ`),
    premium: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴋʜᴜsᴜs ᴜsᴇʀ ᴘʀᴇᴍ ʙᴜʏ ᴘʀᴇᴍ ᴋᴇ ᴏᴡɴᴇʀ'),
    search: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴏᴛᴡ sᴇᴀʀᴄʜ....'),
    done: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴅᴏɴᴇ ʏᴀ ᴡɪʀ...'),
    success: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* sᴜᴄᴄᴇs....!!'),
    admin: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ғɪᴛᴜʀᴇ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ'),
    owner: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴋʜᴜsᴜs ᴏᴡɴᴇʀ sᴀᴊᴀ ʏᴀ'),
    group: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ᴋʜᴜsᴜs ɢʀᴏᴜᴘ sᴀᴊᴀ ʏᴀ'),
    private: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴄᴍᴅ ɪɴɪ ᴋʜᴜsᴜs ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ'),
    bot: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴏɴʟʏ ʙᴏᴛ ᴜsᴇʀ'),
    wait: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴡᴀɪᴛɪɴɢ ᴏᴛᴡ ᴘʀᴏsᴇs...'),
    getdata: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* Scraping metadata . . .'),
    fail: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* Can\'t get metadata!'),
    error: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ʟᴀɢɪ ᴀᴅᴀ ᴋᴇɴᴅᴀʟᴀ ᴋᴀᴋ sᴏʀʏ ʏᴀ'),
    errorF: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* this feature is in error.'),
}
//=================================================//
// SETTING IN LIMITED \\
global.limitawal = {
    premium: "Infinity",
    free: 15
    }
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})