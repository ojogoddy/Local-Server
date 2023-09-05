// import * as http from "http"

// const server = http.createServer((req:any, res:any)=>{

//     let Kome: string="";
//     let studentLists: any[]=[]
//     req.on("data", (chunk:any)=>{
//         Kome += chunk.toString() //
//         console.log(chunk.toString())
//     })
//     req.on("end", ()=>{
//         let dataReceived:any =JSON.parse(Kome)
//         // console.log("display", dataReceived)
//         studentLists.push(dataReceived)
    
//         // console.log(studentLists)
//         res.setHeader("Content-Type", "application/json")
//         res.write(JSON.stringify(studentLists))
//         res.end()
//     })
// })

// server.on("connection", ()=>{
//     console.log("connection has been made")
// })+

// server.listen(900, ()=>{
//     console.log("server is listening")
// })
import * as http from "http"
import data from "./data.json"
import food from "./food.json"

const server = http.createServer((req:any, res:any)=>{

    let Kome: string="";
    const {url, method} =req
    if (url === "/post" && method === "POST")
    {
        req.on("data", (chunk:any)=>{
            Kome += chunk.toString() 
            // console.log(chunk.toString())
        })
        req.on ("end", ()=>{
            let dataReceived:any =JSON.parse(Kome)
            // console.log("display", dataReceived)
            data.push(dataReceived)
            console.log(data)
            res.setHeader("Content-Type", "application/json")
            res.writeHead(201)
            res.write(JSON.stringify({
                success: 1,
                datalength: data.length,
                message: "data successfully submitted",
                result: dataReceived
                }))
            res.end()
        })
    }else if( url === "/all" && method === "GET")
    {
        res.setHeader("Content-Type", "application/json")
        res.writeHead(200)
        res.write(JSON.stringify(data))
        res.end()
    }else if(url === "/food/post" && method === "POST")
    {
        let foodData: string=""
        req.on("data", ( chunk:any)=>{
            foodData += chunk
        })
        req.on("end", ()=>{
            let parseFood = JSON.parse(foodData)
            parseFood.id=food.length + 1
            food.push(parseFood)
            res.writeHead(201, {"Content-Type": "application/json"})
            res.write(JSON.stringify({
                message: "successfully created",
                success: 1,
                foodLength: food.length,
                result: parseFood
            }))
            res.end()
        })
    }else if(url === "/food/all" && method === "GET")
    {
        res.setHeader("Content-Type", "application/json")
        res.writeHead(200)
        res.write(JSON.stringify(food))
        res.end() 
    }else{
        res.writeHead(404, {"Content-Type":"application/json"})
        res.end(JSON.stringify({
            success: 0,
            result: "wrong url"
        }))
    }         
})


server.on("connection", ()=>{
    console.log("connection has been made")
})+

server.listen(900, ()=>{
    console.log("server is listening")
})