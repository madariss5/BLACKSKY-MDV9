let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
try {
  let res = await fetch(`https://api.betabotz.eu.org/api/news/Koranfajar?&apikey=${lann}`);
  let json = await res.json()
  // array berisi result berita
  global.anu = [
       `―KORANFAJAR―\n\nBeritaUrl: ${json.result[0].berita_url}\n\nBerita in hochladen: ${json.result[0].berita_dihochladen}`, 
       `―KORANFAJAR―\n\nBeritaUrl: ${json.result[1].berita_url}\n\nBerita in hochladen: ${json.result[1].berita_dihochladen}`, 
       `―KORANFAJAR―\n\nBeritaUrl: ${json.result[2].berita_url}\n\nBerita in hochladen: ${json.result[2].berita_dihochladen}`, 
       `―KORANFAJAR―\n\nBeritaUrl: ${json.result[3].berita_url}\n\nBerita in hochladen: ${json.result[3].berita_dihochladen}`, 
       `―KORANFAJAR―\n\nBeritaUrl: ${json.result[4].berita_url}\n\nBerita in hochladen: ${json.result[4].berita_dihochladen}`, 
       `―KORANFAJAR―\n\nBeritaUrl: ${json.result[5].berita_url}\n\nBerita in hochladen: ${json.result[5].berita_dihochladen}`, 
       `―KORANFAJAR―\n\nBeritaUrl: ${json.result[6].berita_url}\n\nBerita in hochladen: ${json.result[6].berita_dihochladen}`, 
       `―KORANFAJAR―\n\nBeritaUrl: ${json.result[7].berita_url}\n\nBerita in hochladen: ${json.result[7].berita_dihochladen}`, 
       `―KORANFAJAR―\n\nBeritaUrl: ${json.result[8].berita_url}\n\nBerita in hochladen: ${json.result[8].berita_dihochladen}`, 
    
    ]
//   conn.reply(m.chat, `―CNBC―\n\n"${json.result[0].berita}"`,)
// variabel kann in ändern wenn benötigt
conn.reply(m.chat,`${pickRandom(global.anu)}`);;
} catch (e) {
throw `Internal server eror!`
  }
}
  
    handler.help = ['Koranfajar']
    handler.tags = ['news']
    handler.command = /^(Koranfajar)$/i
    handler.group = true
    
    module.exports = handler

    function pickRandom(list) {
      return list[Math.floor(list.length * Math.random())]
    }
    



    // let anu = `―CNNC―\n\nBerita: ${json.result[0].berita}\n\nBeritaUrl: ${json.result[0].berita_url}`  