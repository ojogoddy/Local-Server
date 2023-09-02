import * as http from "http"

const server = http.createServer((req:any, res:any)=>{
    req.on("data", ()=>{

    })
})

server.on("connection", ()=>{
    console.log("connection has been made")
})

server.listen(900, ()=>{
    console.log("server is listening")
})