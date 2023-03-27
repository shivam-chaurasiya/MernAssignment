import React,  { useState} from "react"
import "./Login.css"
import { Link,useNavigate} from "react-router-dom"
import Register from "../Register/Register"
import axios from "../../axios"


const Login = () => {
    const navigate=useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:"",
    })

    const handleform= (e)=>{
        axios.post('/user/login',user)
        .then(()=>{alert('logged  in successfull');navigate('/Header',{state:{data:user}})})
        

        
    }
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    
    return (
        <div className="login">
           
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <div className="button"  onClick={ handleform }>Login</div>
            <div> OR</div>
            <Link  to = "/register" target="_blank" onClick={()=><Register/>}>Register</Link>
        </div>
    )
}

export default Login