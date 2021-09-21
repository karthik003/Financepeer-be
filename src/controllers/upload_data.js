const {
    File
}=require("../models/upload_data")
// const auth=require("./auth")

const upload_data=async(req,res)=>{
    data=req.body
    for(var i=0;i<data.length;i++){
        // console.log(data[i])
        sample=new File(data[i])
        await sample.save()
    }
    res.status(200).send("Data uploaded sucessfully")
}

const read_data=async(req,res)=>{
    const readdata=await File.find()
    res.status(200).send(readdata)
}

module.exports={
    upload_data,
    read_data
}