import { useState } from "react";
import "./forms.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Login = () => {

    const [email,setEmail]=useState("")
    const [passord,setPassword]=useState("")
    const [showPassword,setShowPassword]=useState(false)

 // form submit handler
 const formSubitHandler=(e)=>{
   e.preventDefault();
   if(email.trim()==="")return toast.error("Email is required")
   if(passord.trim()==="")return toast.error("Password is required")
 }



 // show password handler
 const showPasswordHandler=()=>{
    setShowPassword(prev=>!prev)
 }

    return ( 
        <div className="form-wrapper">
            <ToastContainer theme="colored"/>
            <h1 className="form-title">Login to your account </h1>
            <form onSubmit={formSubitHandler} className="form">
                <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email"/>
                <input value={passord} onChange={e=>setPassword(e.target.value)} type={showPassword?"text":"password"}
                 placeholder="Password"/>
                
                {showPassword?
                <i onClick={showPasswordHandler} className="bi bi-eye-slash-fill show-password-icon"></i>
                :<i onClick={showPasswordHandler} className="bi bi-eye-fill show-password-icon"></i>}
                
                
                <button className="form-btn">Login</button>
            </form>
            <div className="form-footer">
                Don't have an account ? {" "}
                <Link to="/register" className="forms-link"> Register</Link>
            </div>
        </div>
     );
}
 
export default Login;