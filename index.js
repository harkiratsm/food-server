const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const {PORT} =require("./config/config");
const imageRoute=require("./routes/image");
app.use(express.json({limit:'50mb'}));
app.use('/image',imageRoute);
app.get('/',(req,res)=>{
    res.send("Welcome to My Server");

})
const mongoose=require("./database/database");
app.listen(PORT,(error)=>{
    if(!error) {
        console.log(`App listening at http://localhost:${PORT}`);
    }
    else{
        console.log(error);
    }
})