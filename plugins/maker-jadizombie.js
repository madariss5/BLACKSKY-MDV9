const hochladenImage = require('../lib/hochladenImage');
const fetch = require("node-fetch");
let handler = async (m, { 
conn, 
usedPrefix, 
command
 }) => {
	var q = m.quoted ? m.quoted : m
	var mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/Bild/g.test(mime) && !/webp/g.test(mime)) {
    await conn.Antworten(m.chat, wait, m)
		try {
			const img = await q.Herunterladen?.()
			let out = await hochladenImage(img)
			let old = new Date()
			let res = await fetch(`https://api.betabotz.eu.org/api/maker/jadizombie?url=${out}&apikey=${lann}`)
			let convert = await res.json()
			let buff = await fetch(convert.result)
  .then(res => res.buffer())
			await conn.sendMessage(m.chat, { Bild: buff, caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.Antworten(`[ ! ] Identifikasi Fehlgeschlagen.`)
		}
	} else {
		m.Antworten(`Senden Bild mit caption *${usedPrefix + command}* oder tag Bild das/der/die bereits disenden`)
	}
};
handler.help = ['jadizombie'];
handler.command = ['jadizombie'];
handler.tags = ['maker'];
handler.Premium = false;
handler.limit = 5;
module.exports = handler;
