const express=require("express")
require('./src/db/mongoose')
const morgan = require('morgan');
const bodyParser=require('body-parser')
const path=require('path');
const users=require("./src/routers/user")
const data=require("./src/routers/upload_data")
var cors = require('cors')
const nodemailer = require("nodemailer");
const connect_db=require("./src/db/mongoose")

const app=express()
app.use(morgan('dev'));
app.use(cors())
const port =process.env.PORT || 3001

app.use(express.static(path.join(__dirname,'client/public')))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(users)
app.use(data)

app.listen(port,()=>{
    console.log("Server is up on the port "+port)
})