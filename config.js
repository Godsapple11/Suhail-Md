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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349050883922";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_14_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyLFxuICAgICAgICA5OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwLFxuICAgICAgICA4NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyLFxuICAgICAgICA3NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NixcbiAgICAgICAgMTIyLFxuICAgICAgICA0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NixcbiAgICAgICAgODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDYxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3LFxuICAgICAgICA1MSxcbiAgICAgICAgODIsXG4gICAgICAgIDM4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDMzLFxuICAgICAgICA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0LFxuICAgICAgICA1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDksXG4gICAgICAgIDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTksXG4gICAgICAgIDcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5LFxuICAgICAgICA4NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5NixcbiAgICAgICAgNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTczLFxuICAgICAgICAzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm12QjNJY1dwc2w0WGszTE8wQ1N4Z2pJa0tUUU5kckFkZkNWb05ITWk2Y3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA1MDg4MzkyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODdENjEzOEY4NzczQ0I2NDgzQzMwNjkzMzkzMkI2MTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4MzcwODYxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImRVbVZRTlFDUzJhTGZRY2UxcmVhaUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTkzNjRkMDQtYTI5MS00ZDY3LWJiZjEtYzg3YzU4YjU1ZWFmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDAsXG4gICAgICAzMixcbiAgICAgIDE3NyxcbiAgICAgIDIwMixcbiAgICAgIDIyNSxcbiAgICAgIDE4LFxuICAgICAgMjM0LFxuICAgICAgOTIsXG4gICAgICAxMSxcbiAgICAgIDY3LFxuICAgICAgODYsXG4gICAgICAxNTQsXG4gICAgICAyMDQsXG4gICAgICAyMzIsXG4gICAgICAxODYsXG4gICAgICAxMTIsXG4gICAgICAxNzIsXG4gICAgICAyNTMsXG4gICAgICAyNTQsXG4gICAgICAyNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcsXG4gICAgICAxMzIsXG4gICAgICAxODMsXG4gICAgICA1NyxcbiAgICAgIDksXG4gICAgICAxNzEsXG4gICAgICAyNDIsXG4gICAgICAxMzIsXG4gICAgICAyNDAsXG4gICAgICAxOTgsXG4gICAgICAyNTIsXG4gICAgICAxMDIsXG4gICAgICAxNzEsXG4gICAgICA3MixcbiAgICAgIDE4MixcbiAgICAgIDEzNixcbiAgICAgIDE1NyxcbiAgICAgIDU4LFxuICAgICAgMjE3LFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIloyUzhDS1YxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDUwODgzOTIyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc3ODUwODc5MjAxMzM1OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3lRak9NR0VLZUVzYk1HR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1K1ViemdEOUlvUEp6TU5sL0pZNW1DZ2Y5MlRBdzNKRlNrSGltTWtoZGo4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImh5ZnZaeEl0MnhUR0FGWEM2VGYrcXNqT3VpVC9xZ3JGV2M0b3drbFpMYW1sajhMZWZNMGp2djAwZGJzVmJWQlN0dVVscXc5ck00MHpycy9RNkVOekJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktNVnBQY2hrdWNKbkEwaGFMRiszWG5wRVR1YlQ2WCtiZno3SlQxV2ovZW5xZFNqb3lMUTJ4YmFvSmpoTVc4Vi9yOFg1WjZHNmdsbjY1citiVU5CbURRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTA4ODM5MjI6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODM3MDg1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUltWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSW1ZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYUhHME5ZaEkzcjdrTTl2cmRUUWhyTC90TExQSEFEVitXYktHaU5yQy9kaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODE4NDI5NDg0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTcwMTIwOTExNDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
