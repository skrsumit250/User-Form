const express=require('express');
const mongoose=require('mongoose');
const cors = require('cors');
const path = require('path')
const user=require('./models/data.js');

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const URI='mongodb://127.0.0.1:27017/Form';  // Connection String
const PORT=5000;
mongoose.connect(URI)
.then((result)=>{
    console.log('DB Connected');
    app.listen(PORT,()=>{
        console.log('server is listening on http://localhost:'+PORT);
    });
})
.catch((err)=>{
    console.log(err)
});

app.post("/",async(req,res)=>{
    try{
        const data=new user(req.body);
        const result=await data.save();
        res.send(result);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
});
