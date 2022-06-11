const Restaurant = require('./Restaurant')
const mongoose =require('mongoose')
const con =require('../database/database')
const OrderSchema=mongoose.Schema({
    bill:{
        type:Number,
    },
    dishes:{
        type:Array,
    },
    restaurant:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Restaurant
    }
})

module.exports=con.db2.model('Order',OrderSchema);