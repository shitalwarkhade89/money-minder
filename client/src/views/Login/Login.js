import React, { useEffect, useState } from "react";
import './Login.css';
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import showToast from 'crunchy-toast';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async()=>{
        
        const response = await axios.post("/api/v1/logins", {
            email: email,
            password: password
        });
        // alert(response?.data?.message);
        showToast(response?.data?.message, 'success', 8000);
        if (response?.data?.success) {
            localStorage.setItem("user" || '{}', JSON.stringify(response?.data?.data));
            window.location.href="/";
        }
    }
    
    

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('user') || '{}');
        if (userId?.email) {
          
            showToast("You are alredy loged in" ,'denger',3000);
            window.location.href = '/';
        }

    }, [])

    return(
        <>
            <Navbar />
            <div>
                <form className="login-form">
                    <h1 className="text-center">Money Minder</h1>
                    <div>
                        <label htmlFor="email" className="label">Email :- </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            id="email"
                            value={email}
                            className="input-box"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="label">Password :- </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            id="password"
                            value={password}
                            className="input-box"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <button type="button" className="login-btn" onClick={login}>Login</button>
                    </div>
                   <Link to="/signup"> <p>Create a new account</p></Link>

                </form>
            </div>
        </>

    )
                        }

export default Login;