const express=require("express");
const router=express.Router();
const Image=require("../models/Image");

router.get('/',async(req,res)=>{
    try{
        const images=await Image.find();
        res.json(images);
    }
    catch(error){
        res.json({message:error});
    }
})
router.get('/:id',async(req,res)=>{
    try{
        const image=await Image.findById(req.params.id);
        let buffer=Buffer.from(image.title,'base64')
        res.set('Content-Type','image/png')
        res.send(buffer)
    }
    catch(error){
        res.json({message:error});
    }
})
router.post('/',async(req,res)=>{
    const image=new Image({
        title:req.body.title
    })
    try {
        const savedImage=await image.save();
        res.json(savedImage);
    } catch (error) {
        res.json({message:error})
    }
})
module.exports=router;
