const express=require('express');
require('dotenv').config()
const app=express();
const connection=require('./config/db')
app.use(express.json())


const user=require("./routes/user.route")
const flight=require('./routes/flight.route')
const book=require('./routes/book.routes')

app.use("/api",user)
app.use("/api",book)
app.use("/api/flight",flight)

app.get('/',(req,res)=>{
    res.status(200).send("Welcome to Air ticket booking ")
})

const PORT= process.env.port||1010
app.listen(PORT,()=>{
    try{
        connection;
        console.log(`connected to the port ${PORT}`)
    }
    catch(err){
        console.log(err.message)
    }
})

