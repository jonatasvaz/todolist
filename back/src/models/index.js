const mongoose = require('mongoose')


const Auth= new mongoose.Schema({
     name:String,
     email:String,
     description:String
     
})

const newModel= mongoose.model('test',Auth)

module.exports=newModel