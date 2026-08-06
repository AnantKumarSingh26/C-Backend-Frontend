import app from './src/app.js'
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  console.log("New Connection Created")

  socket.on("message",(msg)=>{
    console.log("User Fired Message Event")
    console.log(msg)
    io.emit("abc")
  })
});


httpServer.listen(3000,()=>{
    console.log("Server is running on PORT 3000 ")
});

// app.listen(3000,()=>{
//     console.log('Server running on PORT 3000')
// })

//! io => Sever
//! socket => Single User
//! on => Event ko Listen Krna
//! emit => Event ko Fire Krna


// ?    Socket.emit()
//?     Socket.broadcast().emit
//?     io.emit