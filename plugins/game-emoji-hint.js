let handler = async (m, { conn }) => {
    conn.tebakemoji = conn.tebakemoji ? conn.tebakemoji : {}
    let id = m.chat
    if (!(id in conn.tebakemoji)) throw false
    let json = conn.tebakemoji[id][1]
    conn.reply(m.chat, '```' + json.Antwort.replace(/[AIUEOaiueo]/ig, '_') + '```', m)
}
handler.command = /^(hemo|emojihilfe|emojitipp)/i

handler.limit = true

module.exports = handler

//danaputra133