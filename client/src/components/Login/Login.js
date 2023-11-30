import React, { useState } from "react";
import './Login.css';
import Navbar from "../Navbar/Navbar";
import axios from "axios";
function Login() {
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");

    const login = async () => {

        const response = await axios.post("/api/v1/logins", {
            email:email,
            password:password
        })
        alert(response?.data?.message );
        if(response?.data?.success){
            localStorage.setItem("user", JSON.stringify(response?.data?.data));
            window.location.hrf ='/';
        }
    }
    return (
        <>
            <Navbar />
            <div>
                <form className="login-form">
                    <h1 className="text-center">Login</h1>
                    <div>
                        <label htmlFor="email" className="label">Email :- </label>
                        <input
                            type="text"
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
                </form>
            </div>
        </>

    )
}

export default Login;