const mongoose=require('mongoose');
const imageSchema=mongoose.Schema({
    title:{
        type:String,
    }
})
module.exports=mongoose.model('Image',imageSchema);