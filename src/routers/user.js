const {
    post_user,
    login_user,
    get_details
}=require("../controllers/data")
const express=require("express")

const router = express.Router();

router.post("/user",async (req, res)=>await post_user(req, res))

router.post("/login",async (req, res)=>await login_user(req,res))

router.post("/details",async(req,res)=>await get_details(req,res))

module.exports=router