const kontol = "https://telegra.ph/file/551d0ce8a3d0736af1770.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, kontol, `
Silahkan scan barcode di atas untuk melakukan transaksi, wajib menyertakan bukti transfer
`.trim(), wm, 'Owner', usedPrefix + 'owner', m) // Tambah sendiri kalo mau
handler.help = ['bayar']
handler.tags = ['main', 'utama']
handler.command = /^(bayar)$/i

module.exports = handler
