const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")

const dataSchema=new mongoose.Schema({
    username:{
        type:String,
        required: true
    },
    name:{
        type:String
    },
    password:{
        type:String,
        required: true
    }

},{
    timestamps:true
})

dataSchema.method("generateAuthToken",function(){
    const token=jwt.sign(
        {_id:this._id},
        "karthik"
    );
    return token
})

const Data=mongoose.model('Data',dataSchema)

module.exports={
    Data
}