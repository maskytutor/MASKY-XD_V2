const { malvin, commands } = require("../masky");

malvin(
  {
    pattern: "dev",
    alias: ["developer", "devinfo"],
    desc: "Developer info",
    category: "dev",
    react: "👨‍💻",
    filename: __filename,
  },
  async (conn, msg, m, { from, reply, pushname }) => {
    try {
      const senderName = pushname || "there";

      // === EDIT THIS PART WITH YOUR DETAILS ===
      const devName = "Masky XD";
      const devJid = "wa.me/2348074548225"; // <-- your WhatsApp number/JID
      const youtubeChannel = "https://youtube.com/@masky_official_tech"; // <-- your YouTube channel
      const profilePic =
        "https://files.catbox.moe/svc26a.png"; // <-- replace with your photo if you want

      const caption = `
╭──『 ${devName} Dev 』───
│
│ 👋 Hello ${senderName},
│ I'm *${devName}*, the creator and developer
│ behind this smart bot.
│
│ 📌 *Developer Info:*
│ ────────────────
│ 👤 *Name:* ${devName}
│ 📱 *WhatsApp:* ${devJid}
│ 📺 *YouTube:* ${youtubeChannel}
╰───────────────────

> ⚡ Powered by ${devName}
      `.trim();

      await conn.sendMessage(
        from,
        {
          image: { url: profilePic },
          caption,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363420007421078@newsletter",
              newsletterName: "🪀『 MASKY-XD 』🪀",
              serverMessageId: 143,
            },
            externalAdReply: {
              title: `${devName} Bot`,
              body: "Created with ❤️ by Masky",
              thumbnailUrl: profilePic,
              mediaType: 1,
              renderSmallerThumbnail: true,
              showAdAttribution: true,
              mediaUrl: youtubeChannel,
              sourceUrl: youtubeChannel,
            },
          },
        },
        { quoted: msg }
      );
    } catch (err) {
      console.error("Error in dev command:", err);
      reply("❌ Error: " + err.message);
    }
  }
);
