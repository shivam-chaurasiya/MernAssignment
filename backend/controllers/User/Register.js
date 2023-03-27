const bcrypt = require("bcrypt");
const User = require('../../model/User')

require("dotenv").config();



const RegisterUser = async (req,res) => {
    const {firstname, lastname, email , password , role} = req.body;
    if(!firstname || !lastname || !email || !password || !role){
        res.status(400).json({
            message : "All fields are required"
        })
    }
    
    const Existingemail = await User.findOne({ email });
    if(Existingemail){
        res.status(400).json({
            message : "Email already exist"
        })
    }

    const saltRound = parseInt(process.env.SALTROUND);
    const hashedPassword = await bcrypt.hash(password, saltRound);

    const user = new User({
        firstname,
        lastname,
        email,
        password : hashedPassword,
        role
       })
     await user.save()
    .then(result =>{
        res.status(200).json({
            newuser : result
        })
     })
     .catch(err => {
        res.status(500).json({
            error:err
        })
     })
}

  module.exports = { RegisterUser };