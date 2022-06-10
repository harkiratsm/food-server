const express=require('express')
const router=express.Router();
const Restaurant=require('../models/Restaurant')

router.get('/',async(req,res)=>{
    try {
        const rest=await Restaurant.find();
        res.json(rest)
    } catch (error) {
        res.json({message:error})
    }
})
router.get('/:resid',async (req,res)=>{
    
    try {
        const rest= await Restaurant.findById(req.params.resid)
        res.send(rest);
    } catch (error) {
        res.json({message:error})
    }
})
router.post('/',async (req,res)=>{
    const rest=new Restaurant({
        name:req.body.name,
        address:req.body.address,
        phoneno:req.body.phoneno,
        rating:req.body.rating,
        menu:req.body.menu,
        onlineorder:req.body.onlineorder,
        photo:req.body.photo,
    })
    try {
        const savedrestaurant = await rest.save()
        res.json(savedrestaurant)
    } catch (error) {
        res.json({message:error})
    }
})
router.patch('/:resid',async (req,res)=>{
   
    try {
        const savedrestaurant = await Restaurant.updateOne({_id:req.params.resid},{$set:req.body})
        res.json(savedrestaurant)
    } catch (error) {
        res.json({message:error})
    }
})

router.delete('/:resid',async (req,res)=>{
    
    try {
        const removedRest= await Restaurant.remove({_id:req.params.resid})
        res.json(removedRest)
    } catch (error) {
        res.json({message:error})
    }
    
})
module.exports=router