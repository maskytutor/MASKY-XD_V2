
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "masky~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUNidG16NUtSUnBxWmlnNmlvaVFORFgrRnk0THR5S0JJUGpIN0J3bGwwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEgyZFdTSUJObFBibTVaNW5LdjU5RFVRaDRVMjhGZWhGWnZWL0xQQzZrVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTDNaNGowMnpqc1hBVHZxUEhZVWZIS2FodUNJUzFMU2grSkRWQ09sZGxrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOMDR1cFlGNll6Mjh0czJCLzhIS3M3V2VUbEVmclNrK0lHOFZBMUZ2NFZNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNFWFBQYVdZYitNaHlrVlF5TEtHMGoxS3pQNXM3RjI2VXE3bVhwNVF5bFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9Bem5qTUVjWXpnTUhYN1cxRWhYV2hqZGV0YmQ5bU83OUZjZjVxcUN6RDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMksxNkNjUUJSdDhGUUk0RDdSNnlJdVJGeEsvcmdneFpOMzc3bFJZMitGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2NzNjgxc2ZWSjBCYXNnNmxzdHJudVhSUmZxZkZrWksxb0cvRko3K2ZnYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNpd2x1d2ZlT0hzRGx5TkI1enpIdTlvck1TNWNvS25WRTV3SmRJbmNMOStxTUdvN2t6Z0ZpVW1BRE9Lbk8vSUlwdVBMUWlaazBxM2c5dFhCbkQrQ2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiJxZjFmNjA1WWE4YXFaejRoTmJ4UDZHWkZvNHJCYmFKOW5QTU5laElsSG5nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwNzQ1NDgyMjVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjE0MDE3MEIwN0JGMjQ4QkE5MjE2NERDRjhEMDMzODAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzQ5NzAyNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicHlMR3drRG5TZjYxSlJhZXN2Y3p4dyIsInBob25lSWQiOiI5NjhhNjBmMy03M2Y4LTQ4ZGMtOWViZi04YjQ2YzIzNDMzZjEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlZjdjNMcmN4TVJ0MUZtblhBdllXYWNvbTl3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt0NFNvWHMzd05FSlo5bGZEWE9iQnBhcndYVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNUk1BTFZJTiIsIm1lIjp7ImlkIjoiMjM0ODA3NDU0ODIyNTo0MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIxMjc0NzU5Nzk2MzQ5OTo0MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tlRGlvMENFSzJOaGNZR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkJZNjVmVmUwdTNwcUpqbHQzOHFmVTJjMmM0ck9JWWNPM3A5azYwTHorbVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImRKcmdFWUUvbG5JTFdjN3NCRGpFUGUvMlBlK0VuVmMvYWpHWDdQWHF5NFZUUEtxZnpDeDNiZUE3dDlQS01HZ1puVkFGblNKU0lmejF6T0tXYURzMkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0aUQzem9HaHh0VGVrV0lKNVlKTjNzdFVEMlJLa25yNTlBclJVTUFXc3hhdm1ZZW1xcWNTS215OS9RUmlEaC9zYjBSMU5xNEdxalpBU3ZyaFJCemxodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNzQ1NDgyMjU6NDFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUVdPdVgxWHRMdDZhaVk1YmQvS24xTm5Obk9LemlHSER0NmZaT3RDOC9wayJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3NDk3MDIwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpYOSJ9",
// add your Session Id make sure it starts with lucky~
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "MASKY-XD",
// add bot name here for menu
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆*",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/svc26a.png",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/0gh0x5.png",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦MASKY-XD✦ ғʀᴏᴍ Masky Official Tech ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/MaskyOfficialTech/MASKY-XD_V2",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "MASKY-XD",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "2348074548225",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "",
// add bot owner name

              DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Masky Official Tech*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
                ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  

            ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 

        AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

              AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

        ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 

         PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod

        AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing 
  
   READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

     DEV: process.env.DEV || "2348074548225",
//replace with your whatsapp number    
    
    ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

      ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox/ same if you want to resend deleted message in same chat 

      AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

version: process.env.version || "0.0.9",

};
