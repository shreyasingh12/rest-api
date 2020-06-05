const express = require('express');

const router = express.Router();

const Post  = require('../models/post');
 
//get all the posts
router.get('',async(req,res) =>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

//post all the posts
router.post('/',async(req,res)=>{
    const post = new Post({
        name: req.body.name,
        summary: req.body.summary,
        img:req.body.img,
    })
    try{
        const savedPost = await post.save()
        res.json(savedPost);
    }catch(err ){
            res.json({ message: err});
        }
});


//delete the post

module.exports = router;


