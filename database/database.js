const mongoose=require('mongoose');
mongoose.connect(process.env.DB1_URL,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Successfully connected to DB1");
})
mongoose.db2= mongoose.createConnection(process.env.DB2_URL,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Successfully connected to DB2");
})
module.exports=mongoose;