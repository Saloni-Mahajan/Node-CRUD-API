const Post=require('../../models/Post');

const getPost=async (req,res)=>{
    try{
        const posts= await Post.find();
        res.status(200).json(posts);
    }
    catch(err){
        res.json({message:err})
    }
}

const createPost=async (req,res)=>{
    const post=new Post({
    title:req.body.title,
    description:req.body.description
    });
    // post.save()
    // .then(data=>{
    //     res.status(200).json(data)    //this is promise
    // })
    // .catch(err=>{
    //     res.json({message:err})
    // })
    try{
        const savedPost= await post.save();
        res.status(200).json(savedPost)
    }
    catch(err){
        res.json({message:err})
    }
}

const searchPost=async (req,res)=>{
    try{
        const post= await Post.findById(req.params.postId);
        res.status(200).json(post);
    }
    catch(err){
        res.json({message:err});
    }
}

const updatePost=async (req,res)=>{
    try{
        const updatedPost= await Post.updateOne({_id:req.params.postId},{$set:{title:req.body.title}});
        res.status(200).json(updatedPost);
    }
    catch(err){
        res.json({message:err});
    }
}


const deletePost=async (req,res)=>{
    try{
        const removedPost= await Post.deleteMany({_id:req.params.postId});
        res.status(200).json(removedPost);
    }
    catch(err){
        res.json({message:err});
    }
}

module.exports={getPost,createPost,searchPost,updatePost,deletePost};