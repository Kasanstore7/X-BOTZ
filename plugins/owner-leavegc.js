let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('Byee Semua Xia Out Ya👋', m.chat) 
        await conn.delay(1000)
        await conn.groupLeave(group)
        }
    
handler.help = ['group'].map(v => 'leave' + v)
handler.tags = ['group']
handler.command = /^leaveg(c|ro?up)(all|semua)?$/i

handler.rowner = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time)) 
