const express =require("express");
const app =express();
const port =process.env.PORT || 3000;
const multer = require("multer")
const image= require("./models/Schema")
const dotenv = require("dotenv");
dotenv.config();

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.json())

require("./DB/conn")
app.get('/',async(req,res)=>{
    // res.send("hii this is router home page ")
    const data = await image.find()
    return res.send({data:data})
    
})

app.get("/",(req,res)=>{
    res.send("hii")
})
app.post('/upload',(req,res)=>{
    

    const newImage =new image({
        name:"img",
        image:req.body.data
        
    })
            newImage.save().then((res.send({
                message:"image upload successful",
                status:201
            })))
            .catch((err)=>{
                console.log({
                    message:"something went wrong",
                    status:404
                })
            })
           
})
app.listen(port,()=>{
    console.log(`your server is running at port ${port}`);
})