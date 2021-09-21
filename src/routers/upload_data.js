const {
    upload_data,
    read_data   
}=require("../controllers/upload_data")
const express=require("express");

const router=express.Router()

router.post("/data",async(req,res)=>await upload_data(req,res))

router.get("/data",async(req,res)=>await read_data(req,res))

module.exports=router