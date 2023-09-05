// import * as http from "http"
// import data from "./data.json"
// import food from "./food.json"
// import status from "./status.json"

// const port:number =8080

// const server = http.createServer((request:any, response:any)=>{

//     // const user={
//     //     name: "Okon",
//     //     score: 677
//     // }
//     if(request.url === "/food")
//     {
//     response.setHeader("content-type", "applicaton/json")
//     response.writeHead(404)
//     response.write(JSON.stringify(food))
//     response.end()
//     }else if(request.url === "/status")
//     {
//     response.setHeader("content-type", "applicaton/json")
//     response.writeHead(404)
//     response.write(JSON.stringify(status))
//     response.end()
//     } 
//     else if(request.url === "data")
//     {
//     response.setHeader("content-type", "applicaton/json")
//     response.writeHead(404)
//     response.write(JSON.stringify(data))
//     response.end()
//     } else{
//         response.writeHead(404)
//         response.end(JSON.stringify({message: "invalid url"}))
//     }
// })
// server.on("connection", ()=>{
//     console.log("connection has been made")
// })
// server.listen(port, ()=>{
//     console.log("server number port", food, status, data)
// })


// const port:number = 7000;
// const server = http.createServer((request:any, response:any)=>{
//     // console.log("this is the request data", res)
//     response.setHeader("content-type", "text/plain")
//     response.writeHead(404)
//     response.write("hello world people of this country; as coup dey plenty for African countries dey go, Nigeria is next... but i no want make military rule cos i no know how their rule dey be")
//     response.end()
// })

// server.on("connection", ()=>{
//     console.log("connection has been made")
// })

// server.listen(port, ()=>{
//     console.log("server number port", port)
// })



// const portss:number = 3400
// http.createServer().listen(portss, ()=>{
//     console.log("server number port", portss)
// })

import * as http from "http"
import data from "./data.json"
import food from "./food.json"
import student from "./student.json"

// const port: number = 8080
// const server= http.createServer((req:any, res:any)=>{
//     if(req.url === "/food")
//     {
//         res.setHeader("content-type", "application/json")
//         res.writeHead(200)
//         res.write(JSON.stringify(food))
//         res.end()
//     }else if(req.url === "/data.json")
//     {
//         res.setHeader("content-type", "application/json")
//         res.writeHead(200)
//         res.write(JSON.stringify(data))
//         res.end()
//     }else{
//         res.writeHead(404)
//         res.end(JSON.stringify({message:"invalid url"}))
//     }
   
// })

// server.on("connection", ()=>{
//     console.log("connection has been made")
// })
// server.listen(port, ()=>{
//     console.log("server", food, data)
// })

const port:number =8090
const server = http.createServer((req:any, res:any)=>{
    if(req.url === "/food" && req.method === "GET")
    {
        
        res.setHeader("content-type", "application/json")
        res.writeHead(200)
        res.write(JSON.stringify(food))
        res.end()
    }else if(req.url === "/data" && req.method === "GET")
    {
        res.setHeader("content-type", "application/json")
        res.writehead(200)
        res.write(JSON.stringify(data))
        res.end()   
    }else{
        res.writeHead(404)
        res.end(JSON.stringify({message:"invalid url"}))
    }
})

server.on("connection", ()=>{
    console.log("connection established")
})
server.listen(port, ()=>{
    console.log("server number port", data, food)
})

const ports = 9000
const servers = http.createServer((req:any, res:any)=>{
switch(req.url){
    case "/food":
        res.setHeader("content-type", "application/json")
        res.writeHead(200)
        res.write(JSON.stringify(food))
        res.end()
        break;
    case"/data" :
        res.setHeader("content-type", "application/json")
        res.writeHead(200)
        res.write(JSON.stringify(data))
        res.end()
        break;
    default:
        res.setHeader("content-type", "application/json")
        res.writeHead(404)
        res.end("not found")
        break
    }
}) 
servers.listen(ports, ()=>{
    console.log("server is running at port ", ports)
})

// const port =8080
// const routeHandlers= new Map()
// routeHandlers.set("/food", (req: any, res:any) =>{
//     res.setHeader("content-type", "application/json")
//     res.writeHead(404)
//     res.write(JSON.stringify(food))
//     res.end()
// })
// routeHandlers.set("/data", (res:any, req:any)=>{
//     res.setHeader("content-type", "application/json")
//     res.writeHead(404)
//     res.write(JSON.stringify(data))
//     res.end()
// })
// const server=http.createServer((res:any, req:any)=>{
//     const handler = routeHandlers.get(req.url) || notFound;

//     handler(req, res)
// })
// function notFound(req:any, res:any){
//     res.setHeader("content-type", "application/json")
//     res.writeHead(404)
//     res.end()
// }
// server.listen(port, ()=>{
//     console.log("server is running at port ", port)
// })
// const port = 1000
// const server = http.createServer((req:any, res:any)=>{
//     switch(req.url){
//         case"/food":
//         res.setHeader("content-type", "application/json")
//         res.writeHead(200)
//         res.write(JSON.stringify(food))
//         res.end()
//         break;
//         case"/data":
//         res.setHeader("content-type", "application/json")
//         res.writeHead(200)
//         res.write(JSON.stringify(food))
//         res.end()
//         break;
//         case("/student"):
//         res.setHeader("content-type", "application/json")
//         res.writeHead(200)
//         res.write(JSON.stringify(student))
//         res.end()
//         break;
//         default:
//             res.setHeader("content-type", "application/json")
//             res.writeHead(404)
//             res.end()
//             break;
//     }
// })

// server.listen(port, ()=>{
//     console.log("this server is running at port: ", port)
// })