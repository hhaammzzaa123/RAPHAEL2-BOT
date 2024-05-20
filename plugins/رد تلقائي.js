
let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^ايتاشي$/i.test(m.text)) { 
     responses = [ 
 '*موجود ف خدمتك*😈🩸'  
     ];
    
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى النقطه*',  
     ];
            
        }else if (/^.مهام$/i.test(m.text)) { 
     responses = [ 
       '*اكتب .المهام*',  
     ];  

    }else if (/^بحبك$/i.test(m.text)) { 
     responses = [ 
       '*حبك برص احول🦎*',  
     ];
    
      }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
       '*بوت ف عينك اسمي ايتاشي*',  
     ];  
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
