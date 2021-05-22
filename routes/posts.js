const express=require('express');
const router=express.Router();
const {getPost,createPost,searchPost,updatePost,deletePost}=require('../app/controller/post.controller');

//READ
router.get('/',getPost);

//CREATE
router.post('/',createPost);

//SEARCH
router.get('/:postId',searchPost)

//DELETE
router.delete('/:postId',deletePost);

//UPDATE POST TITL
router.patch('/:postId',updatePost)

module.exports=router;