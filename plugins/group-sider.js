let handler = async (m, {
    conn,
    text,
    groupMetadata
}) => {
await conn.sendPresenceUpdate('composing', m.chat)
    var lama = 86400000 * 7
    const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    const milliseconds = new Date(now).getTime();

    let member = groupMetadata.participants.map(v => v.id)
    if (!text) {
        var nachricht = "Bitte seid in der Gruppe aktiv, da regelmäßig inaktive Mitglieder entfernt werden"
    } else {
        var nachricht = text
    }
    var sum
    sum = member.length
    var total = 0
    var sider = []
    for (let i = 0; i < sum; i++) {
        let users = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
        if ((typeof global.db.data.users[member[i]] == 'undefined' || milliseconds * 1 - global.db.data.users[member[i]].lastseen > lama) && !users.isAdmin && !users.isSuperAdmin) {
            if (typeof global.db.data.users[member[i]] !== 'undefined') {
                if (global.db.data.users[member[i]].banned == true) {
                    total++
                    sider.push(member[i])
                }
            } else {
                total++
                sider.push(member[i])
            }
        }
    }
    if (total == 0) return conn.reply(m.chat, `*In dieser Gruppe gibt es keine inaktiven Mitglieder.*`, m)
    conn.reply(m.chat, `*${total}/${sum}* Mitglieder der Gruppe *${await conn.getName(m.chat)}* sind inaktiv aus folgenden Gründen:\n1. Nicht aktiv seit mehr als 7 Tagen\n2. Neu beigetreten aber nie kommuniziert\n\n_"${nachricht}"_\n\n*LISTE DER INAKTIVEN MITGLIEDER:*\n${sider.map(v => '  ○ @' + v.replace(/@.+/, '' + typeof global.db.data.users[v] == "undefined" ? ' Inaktiv ' : ' Offline ' + msToDate(milliseconds * 1 - global.db.data.users[v].lastseen))).join('\n')}`, m, {
        contextInfo: {
            mentionedJid: sider
        }
    })
}
handler.help = ['gcsider', 'inaktivemitglieder']
handler.tags = ['group']
handler.command = /^(gcsider|inaktivemitglieder)$/i
handler.group = true
handler.botAdmin = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)


function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  if (d == 0 && h == 0 && m == 0) {
        return "Gerade eben"
    } else {
        return [d, 'T ', h, 'Std '].map(v => v.toString().padStart(2, 0)).join('')
    }
  
}
