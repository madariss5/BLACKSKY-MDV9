global.owner = ['4915561048015']  
global.mods = ['4915561048015'] 
global.prems = ['4915561048015']
global.nameowner = 'Lann'
global.numberowner = '4915561048015'
global.mail = 'support@tioprm.eu.org' 
global.gc = 'https://chat.whatsapp.com/G4f1fTpz9zL4EH3FyIcaPR'
global.instagram = 'https://instagram.com/erlanrahmat_14'
global.wm = '© Tio'
global.wait = '_*Bitte warten, wird verarbeitet...*_'
global.eror = '_*Serverfehler*_'
global.stiker_wait = '*⫹⫺ Sticker wird erstellt...*'
global.packname = 'Made With'
global.author = 'BLACKSKY-MD'
global.maxwarn = '3' // Maximum warnings before kick/ban
global.antiporn = true // Auto delete pesan porno (bot harus admin)

//INI WAJIB DI ISI!//
global.lann = 'Btz-jdyXQ' 
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'Btz-jdyXQ'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': global.lann, 
  'https://api.botcahx.eu.org': global.btc //OPSIONAL
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})


