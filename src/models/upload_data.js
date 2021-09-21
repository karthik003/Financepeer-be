const mongoose=require("mongoose")

const fileSchema=new mongoose.Schema({
    userId:{
        type:Number
    },
    id:{
        type:Number
    },
    title:{
        type:String
    },
    body:{
        type:String
    },
    user_id:{
        type:mongoose.Schema.ObjectId
    }
})

const File=mongoose.model("File",fileSchema)

module.exports={
    File
}