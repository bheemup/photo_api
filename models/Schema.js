const mongoose= require("mongoose");

const ImageSchema=  mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    image:{
      type:String,
      require:true
      // data:Buffer,
      // contentType:String

    }
})

const ImageModel = mongoose.model('imageModel',ImageSchema)

module.exports=ImageModel;