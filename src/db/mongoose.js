const mongoose=require('mongoose')
require('dotenv').config()

url='mongodb+srv://testapp:roopesh123@cluster0.2zqrx.mongodb.net/karthik?retryWrites=true&w=majority'
// url="mongodb://localhost:27017/karthik"
mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})