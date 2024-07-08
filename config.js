const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233537808128";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_10_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgODQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM2LFxuICAgICAgICA2NixcbiAgICAgICAgODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDk1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxODIsXG4gICAgICAgIDgxLFxuICAgICAgICA2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk0LFxuICAgICAgICA3MixcbiAgICAgICAgMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDkzLFxuICAgICAgICAzNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExLFxuICAgICAgICA3LFxuICAgICAgICAxMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYzLFxuICAgICAgICA0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MixcbiAgICAgICAgMTMxLFxuICAgICAgICA0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyLFxuICAgICAgICA0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc0LFxuICAgICAgICA1NixcbiAgICAgICAgNjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDU2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI5LFxuICAgICAgICA0LFxuICAgICAgICA5MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVTByd2hxVmE1WkRCTHdCSGs0c056eVlBWXhMOWxDUkxnL29yTmZaS1pzWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzM1Mzc4MDgxMjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU4RTg4NkYwODUxNDQ1REVDQjhGRDdDRUE4QkQyMTMyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDQwNDYxOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKV1ROdVF1QVRMU2Y1RldPTkhTOHN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjE2MTMyYzMzLWY0YjQtNDYyMS05NDk3LTc2YzZmMGUyYmFmZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDAsXG4gICAgICAxNzksXG4gICAgICAzLFxuICAgICAgMTY2LFxuICAgICAgMTI0LFxuICAgICAgMTg0LFxuICAgICAgNzEsXG4gICAgICA1NSxcbiAgICAgIDEyNixcbiAgICAgIDIwNyxcbiAgICAgIDI0NyxcbiAgICAgIDIyNixcbiAgICAgIDg5LFxuICAgICAgMjQ0LFxuICAgICAgMTY4LFxuICAgICAgMjUzLFxuICAgICAgMjEwLFxuICAgICAgMjAyLFxuICAgICAgMTE5LFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDQsXG4gICAgICA5MCxcbiAgICAgIDMwLFxuICAgICAgMTgxLFxuICAgICAgMTU5LFxuICAgICAgOTcsXG4gICAgICAxOTYsXG4gICAgICAxMSxcbiAgICAgIDEwNyxcbiAgICAgIDE3NCxcbiAgICAgIDIxMSxcbiAgICAgIDMzLFxuICAgICAgNyxcbiAgICAgIDEyOSxcbiAgICAgIDU3LFxuICAgICAgMTU5LFxuICAgICAgMjUwLFxuICAgICAgMTMxLFxuICAgICAgMjEyLFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUFg0OUQ4RTRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzUzNzgwODEyODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2NTYyMzI3NTEyMjkxOTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pmRC8vVUVFUCtVcmJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVnV5OUorZUE5UU1ESW5hb0JEMi83WkxHTURPb2hVZE8xVzVBdW5QZjFTbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOOUIwNHByR29SYVRId3kwWDJLOENRQWhPNHhhbyt3cVdIczdrSzZqU01sZnRqck40NVRCcVFPRjBXTGhJNmZxNlh4OWk0eFMxRC8wOW5hanZ5cENEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjeVdwTmFSZWtPOVpaNlNvK2pBTmQwdkxYcHBlaFRmdUdKN214b253Z2o4NDJFdEhlQnQ4MStLVEU4VnFVUTVLQTVYS1ZrNElMZ3dtWjE2cjkrMHdpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1Mzc4MDgxMjg6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDA0NjEyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRm13XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGbXcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0R21kZjErbUlwWlVVclY2NFpqY1BHU3FCaFhOdHlzeDFQWXV2dFZWV3JrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMjExOTc5NzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0MDMwNTEwMjFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
