import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import image from "../forgotpswrd1.png"
const Newpassword = () => {
    const [details, setdetails] = useState({ email: "", otp: "", password: "", })
    const History = useNavigate("/")
    const onsubmit = async (e) => {
        e.preventDefault();
        if (details.email.includes("vitbhopal.ac.in")) {

            const response = await fetch("https://aivtop.onrender.com/api/stud/newpassword", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ email: details.email, otp: Number(details.otp), password: details.password })
            });
            const json = await response.json();
            if (json.success) {
                alert("Password updated successfully")
                if (details.email.includes("2021@vitbhopal.ac.in")) {
                    History("/studentlogin")
                }
                else {
                    History("/facultylogin")
                }
            }
            else {
                alert(json.message);
                if (details.email.includes("2021@vitbhopal.ac.in")) {
                    History("/studentlogin")
                }
                else {
                    History("/facultylogin")
                }
            }
        }
        else {
            alert("Sorry you are not allowed to access this page");
        }
    }
    const onchange= (e) => {
        e.preventDefault();
        setdetails({...details, [e.target.name ]: e.target.value})
    }
    return (
        <div>
            <Link to='/' style={{ textAlign: "right", color: "black", fontSize: "200%", marginLeft: "85%", marginRight: '0%', marginBottom: '3%', textDecoration: "none" }}>AI-VTOP</Link>
            <div className="container mx-auto" id='signuppage1'>
                <div className='row'>
                    <div className='col'>
                    <img id="loginpht1" className='mx-auto' src={image} alt="Girl in a jacket" />
                    </div>
                    <div className='col' id='lgdv1'><p className='text-center' style={{ color: "black", fontSize: "25px" }}>Forgot Password</p>
                        <div>
                            <br />
                            <form className='loginform1'>
                                <hr />
                                <label htmlFor="mail" style={{ color: "black" }}>Email Id : </label><input type="text" id="mail" name="email" value={details.email} onChange={onchange} />
                                <hr />
                                
                                <label htmlFor="mail" style={{ color: "black" }}>otp: </label><input type="text" name="otp" value={details.otp} onChange={onchange} />
                                <hr />
                                <label htmlFor="Password" style={{ color: "black" }}>Password : </label><input type="password" id="password" value={details.password} name="password" onChange={onchange} />
                                <hr />
                                <button type="button" id="Login" className="btn btn-outline-primary" style={{ marginLeft: "35%" }} onClick={onsubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newpassword