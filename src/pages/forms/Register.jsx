import { useState } from "react";
import "./forms.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Register = () => {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [passord, setPassword] = useState("")


    // form submit handler
    const formSubitHandler = (e) => {
        e.preventDefault();
        if (email.trim() === "") return toast.error("Email is required")
        if (username.trim() === "") return toast.error("Username is required")
        if (passord.trim() === "") return toast.error("Password is required")
    }



    return (
        <div className="form-wrapper">
            <ToastContainer theme="colored" />
            <h1 className="form-title">Create new account </h1>
            <form onSubmit={formSubitHandler} className="form">
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />

                <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="Username" />

                <input value={passord} onChange={e => setPassword(e.target.value)} type="password"
                    placeholder="Password" />




                <button className="form-btn">Register</button>
            </form>
            <div className="form-footer">
                Already have an account ? {" "}
                <Link to="/login" className="forms-link"> Login</Link>
            </div>
        </div>
    );
}


export default Register;