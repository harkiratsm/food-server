const express=require('express')
const router=express.Router();
const Order =require('../models/Order');
const Restaurant = require('../models/Restaurant');

router.get('/',async(req,res)=>{
    try {
        const orderId=await Order.find();
        res.send(orderId)
    } catch (error) {
        res.json({message:error})
    }
})
router.get('/:orderid',async (req,res)=>{
    try {
        const orderId=await Order.findById(req.params.orderid)
        const resid=await Restaurant.findById(orderId.restaurant)
        res.send({orderId:orderId,resid:resid})
    
        
        res.end()
        
    } catch (error) {
        res.json({message:error})
    }
})
router.post('/',async(req,res)=>{
    const resat=new Restaurant({
        name:req.body.restaurant.name,
        address:req.body.restaurant.address,
        phoneno:req.body.restaurant.phoneno,
        rating:req.body.restaurant.rating,
        menu:req.body.restaurant.menu,
        onlineorder:req.body.restaurant.onlineorder,
        photo:req.body.restaurant.photo,
    })
    const order =new Order({
        bill:req.body.bill,
        dishes:req.body.dishes,
        restaurant:resat,
    })
    try {
        const savedres=await resat.save()
        const savedorder = await order.save()
        res.json(savedorder)
        
    } catch (error) {
        res.json({message:error})
        console.log(error)
    }
})
module.exports=router