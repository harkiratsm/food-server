const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const {PORT} =require("./config/config");
const imageRoute=require("./routes/image");
const restaurantRoute=require('./routes/restaurant')
const orderRoute=require('./routes/order')

// Middleware 
app.use(express.json({limit:'50mb'}));
app.use('/image',imageRoute);
app.use('/restaurant',restaurantRoute);
app.use('/order',orderRoute);
// ----------------------
app.get('/',(req,res)=>{
    res.send("Welcome to My Server");

})

app.listen(PORT,(error)=>{
    if(!error) {
        console.log(`App listening at http://localhost:${PORT}`);
    }
    else{
        console.log(error);
    }
})