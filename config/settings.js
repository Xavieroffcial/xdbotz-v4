const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6283862006229'] // no own
global.author = 'FenrirXd' // nama author 
global.packname = '©Miku Botz' // nama pack sticker
global.namabot = 'MIKU BOTZ' // nama bot mu
global.group = 'https://chat.whatsapp.com/KV5vkfzBKR65C8gw7xJ5yC' // grup mu
global.pic = 'https://telegra.ph/file/f2da9981aae68c0f9113c.jpg' // logo lu


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
