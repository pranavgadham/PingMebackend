import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
dotenv.config();
app.use(cors());

const server = http.createServer(app);



// const io = new Server(server,{
//         cors:{
//             origin:"*",
//             method:["GET", "POST"]
//         }
// });

// io.on('connection',(socket)=>{
//     console.log("Connection Made");
//     socket.on('join',async (data) => {
//         const roomid = data.roomid;
//         const userId = data.userId;
//     })
    
// })

export default server;