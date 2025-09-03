/*
Project Name : MASKY XD
Creator      :   𝐌𝐚𝐬𝐤𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐓𝐞𝐜𝐡 👺
Repo         : https://github.com/MaskyOfficialTech/MASKY-XD_V2
Support      : wa.me/2348074548225
*/

const config = require('../settings');
const { malvin } = require('../masky');
const { runtime } = require('../lib/functions');

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

malvin({
    pattern: "support",
    alias: ["follow", "links"],
    desc: "Display support and follow links",
    category: "main",
    react: "📡",
    filename: __filename
}, 
async (conn, mek, m, {
    from, reply, pushname
}) => {
    try {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const uptimeFormatted = runtime(process.uptime());

        const message = `
╭─『 *MASKY-XD SUPPORT* 』─
│ 👤 *Developer* : 🅼🅰🆂🅺🆈 Ⓞ🅵🅵🅸🅲🅸🅰🅻 🆃🅴🅲🅷
│ ⚙️ *Mode*      : ${config.MODE}
│ ⏱️ *Uptime*    : ${uptimeFormatted}
│ 💠 *Prefix*    : ${config.PREFIX}
│ 🔖 *Version*   : ${config.version}
│ 🕰️ *Time*      : ${currentTime}
╰─────────────

📢 *Follow & Support MASKY XD* ${readMore}

🔔 *Official WhatsApp Channel*
https://whatsapp.com/channel/0029VbBeOQt7j6g5YFBmKR1o
🎬 *YouTube Channel*
https://youtube.com/@luckytechhub-i9u

👨‍💻 *Developer Contact*
wa.me/2348074548225?text=Hi%20Masky,%20I%20need%20support!

>💡Powered By   𝐌𝐚𝐬𝐤𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐓𝐞𝐜𝐡 👺
        `.trim();

        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/w58wuv.png' },
            caption: message,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363420007421078@newsletter',
                    newsletterName: '🪀『 MASKY-XD 』🪀',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Support Cmd Error:", e);
        reply(`⚠️ An error occurred:\n${e.message}`);
    }
});
