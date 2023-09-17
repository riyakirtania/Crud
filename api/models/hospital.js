const mongoose=require("mongoose");

const hospitalSchema=new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    email:{
        type:String
    },
    age:{
        type:Number
    }
});

module.exports=mongoose.model("hospital",hospitalSchema)