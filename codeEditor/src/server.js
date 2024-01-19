const express=require('express')
const {Server}=require('socket.io')
const app=express()
const http=require('http')
const server=http.createServer(app)

const io=new Server(server)

io.on('connection',(socket)=>console.log("socket connected",socket.id))

const port=process.env.port||3000
server.listen(port,()=>console.log(`server running on port${port}` ))
