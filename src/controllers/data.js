const {
    Data
}=require("../models/data")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const post_user=async(req,res)=>{
    let user=await Data.findOne({
        username:req.body.username
    })
    if(user){
        res.status(400).send("Username is aldredy taken")
    }
    user=new Data(req.body)
    const salt=await bcrypt.genSalt(13)
    user.password=await bcrypt.hash(user.password,salt)
    user=await user.save()
    const token=user.generateAuthToken();
    res
        .status(200)
        // .header("x-auth-token",token)
        .send(token)
}

const login_user=async (req,res)=>{
    let user=await Data.findOne({
        username:req.body.username
    })
    if(!user){
        res.status(400).send("No user with this username please try to register")
    }

    const validPassword=await bcrypt.compare(
        req.body.password,
        user.password
    )
    if(!validPassword) res.status(400).send("Incorrect password")
    const token=user.generateAuthToken()
    res.status(200).send(token)
}

const get_details=async (req,res)=>{
    const token=req.body.data
    if(!token) res.status(400).send("No token provided")
    const decoded = jwt.verify(token, "karthik");
    let user=await Data.findById(decoded)
    res.status(200).send(user)
}

module.exports={
    post_user,
    login_user,
    get_details   
}