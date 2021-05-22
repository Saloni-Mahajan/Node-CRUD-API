const express=require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv/config');
const bodyParser=require('body-parser');

app.use(express.json());
//Import routes
const postsRoute=require('./routes/posts');
app.use('/posts',postsRoute);

mongoose.connect(
    process.env.DB_CONNECTION,
 { useNewUrlParser: true, useUnifiedTopology: true} ,
()=>{
    console.log('connected to db');
    
})
app.listen(process.env.PORT);