const express=require("express");
const app=express();
const port=process.env.PORT || 5001;

app.get('/',(req,res)=>{
    res.send("Welcome to My Server");

})
app.listen(port,(error)=>{
    if(!error) {
        console.log(`App listening at http://localhost:${port}`);
    }
    else{
        console.log(error);
    }
})