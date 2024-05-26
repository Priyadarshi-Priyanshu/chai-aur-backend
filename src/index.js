// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

import express from "express"
const app = express()






// Effie syntax
// ( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERR : ",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`The server is listening at port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR : ",error)
//         throw err
//     }
// })()