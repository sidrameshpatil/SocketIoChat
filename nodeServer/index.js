const  io = require("socket.io")(7000)

const users= {}

io.on("connection", (socket)=>{
     socket.on("new user joined",name=>{
         users[socket.id]=name
         socket.broadcast.emit("user joined", name)
         console.log(name+" joined")
     })
     socket.on("send",(messege)=>{
         socket.broadcast.emit("receive", {msg:messege, name:users[socket.id]})
     })
})