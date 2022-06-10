const mongoose =require('mongoose')
const RestaurantSchema=mongoose.Schema({
    name:{
        type:String, 
    },
    address:{
        type:String,
    },
    phoneno:{
        type:String,
    },
    rating:{
      type:String,  
    },
    menu:{
        type:Array,
    },
    onlineorder:{
        type:String,
    },

    photo:{
        type:String,
    },
    resttype:{
        type:String,
    },
    booktable:{
        type:String,
    }

    
})
module.exports=mongoose.model('Restaurant',RestaurantSchema)