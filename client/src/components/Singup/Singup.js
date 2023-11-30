import react from "react";
import React, { useState } from "react";
import './Singup.css';
import Navbar from "../Navbar/Navbar";
function Singup() {

    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [gender, setgender] = useState("female");
    const [mobile, setMobile] = useState(" ");
    return (
        <>
            <Navbar />
            <div>
                <form className="singup-form">
                    <h1 className="singup-heading">Singup</h1>
                    <div>


                        <label htmlFor="name" className="label">Name :- </label>
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            id="name"
                            value={name}
                            className="input-box"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>
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
                        <label htmlFor="mobile" className="label">Mobile :- </label>
                        <input
                            type="text"
                            placeholder="Enter your mobile No."
                            id="mobile"
                            value={mobile}
                            className="input-box"
                            onChange={(e) => {
                                setMobile(e.target.value);
                            }}
                        />
                    </div>

                    <div className="gender-container">
                        <input type="radio"
                            id="male"
                            name="gender"
                            className="gender"
                            checked={gender === "male"}
                            onClick={() => {
                                setgender("male");
                            }}
                        />
                        <label htmlFor="male" className="gender">Male</label>
                        <input
                            type="radio"
                            id="female"
                            className="gender"
                            checked=
                            {gender === "female"}
                            onClick={() => {
                                setgender("female");
                            }}
                        />
                        <label htmlFor="female" className="gender">Female</label>
                    </div>
                    <div>
                        <button type="button" className="btn-singup">
                         Singup</button>
                    </div>
                </form>

            </div>



        </>
    )
}

export default Singup;