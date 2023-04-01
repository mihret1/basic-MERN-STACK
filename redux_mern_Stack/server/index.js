import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoute from './src/routes/posrRoute.js'
// require('dotenv').config()
// const MONGO_URL=process.env.MONGO_URL

const PORT=process.env.PORT || 2000
const MONGO_URL="mongodb://localhost/reduxFullStack"

const app=express()

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

app.use('/posts',postRoute)



mongoose.connect(MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>{
    console.log(`backend is running on port ${PORT} and database is connected`)
}))
.catch((error)=>console.log(error.message))




// mongoose.set('useFindAndModify',false)

// app.listen(PORT,()=>{
//     console.log(`backend is running on port ${PORT}`)
// })