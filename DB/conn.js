const mongoose =require("mongoose")
const DB = "mongodb+srv://bheem:12345@cluster0.gjurfvz.mongodb.net/photo?retryWrites=true&w=majority"
mongoose.connect(DB,{
    useNewUrlParser: true
}).then(()=>{
    console.log("connection succussful");
   }).catch((err)=>{
    console.log(err)
   })
 