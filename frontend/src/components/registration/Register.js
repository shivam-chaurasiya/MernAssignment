import React,  { useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "../../axios"
import "./Register.css"


const Register = () => {
    
    const navigate=useNavigate()
    const [ user, setUser] = useState({
        firstname: "",
        lastname:"",
        email:"",
        password:"",
        role: ""
    })

    const handleform=async (e)=>{
        console.log('userssssssssss',user)
        await axios.post('user/register/',user)
        .then(()=>{console.log('registered');navigate('/header',{state:{email:user.email}})})
        .catch(err =>console.log('invalid',err))
    }

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    
    return (
        <div className="register">
            {console.log('User', user)}
            <h1>Register</h1>
            <input type="text" name="firstname" value={user.firstname}  placeholder="Your First Name" onChange={ handleChange }></input>
            <input type="text" name="lastname" value={user.lastname} placeholder="Your Last Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <div >
            <input type="radio" value="admin" name="role" onChange={ handleChange }/>
            <label >Admin</label>
            <input type="radio" value="user"  name="role" onChange={ handleChange }/>
            <label >User</label></div>
            <div className="button" onClick={handleform} >Register</div>
            <div>or</div>
            <div className="button" onClick={()=> navigate('/')}>Login</div>
        </div>
    )
}
export default Register