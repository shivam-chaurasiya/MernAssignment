const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
  firstname:{
    type:String,
    required:true
  },
  lastname:{
     type:String,
     required:true
  },
  email:{
    type:String,
    required:false
  },
  password:{
    type:String
  },
  role:{
    type:String,
    enum: ["admin" , "user"]
  }
})

module.exports = mongoose.model("User",Userschema);