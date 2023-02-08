const qrsaxia = "https://telegra.ph/file/551d0ce8a3d0736af1770.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrsaxia, `
┏──「 *Donasi Orang Baik* 」─⬣
│ • Seikhlas nya saja
│ • All Peyment
┗────────⬣
┏──「 *NOTE* 」─⬣
│ SeikhlaSny aja klo bisa 
│ Klo bisa 10k :v
│ Pencet Doang di perkaos owner
│ pencet donasi doang ga donasi
┗────────⬣
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
