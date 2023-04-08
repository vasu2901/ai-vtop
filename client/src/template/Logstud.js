import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from "../loginpht1.png"
const Logstud = () => {
    const [login, setlogin] = useState({ reg_no: "", password: "" });
    let history = useNavigate();
    const user = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/stud/loginstud", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ reg_no: login.reg_no, password: login.password })
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            history("/homewebsite");
        }
    }
    const onChange = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        document.body.style.backgroundImage = "url('https://img.freepik.com/free-photo/blue-brushed-painted-abstract-background_23-2148153193.jpg')"
        document.body.style.backgroundSize = "cover";

    }, [])
    // .for facultylogin https://img.freepik.com/free-vector/watercolour-smoke-background_91008-448.jpg?w=740&t=st=1680625830~exp=1680626430~hmac=6b22e1ce5736f4b2136a85358fab50641bd0cac992cf569d2a20e79b38a63bd0


    return (
        <div>
            <Link to='/' style={{ textAlign: "right", color: "white", fontSize: "200%", marginLeft: "85%", marginRight: '0%', marginBottom: '3%', textDecoration: "none" }}>AI-VTOP</Link>
            <div className="container mx-auto" id='loginpage1'>
                <div className='row'>
                    <div className='col'>
                        <img id="loginpht1" className='mx-auto' src={image} alt="Girl in a jacket" />
                    </div>
                    <div className='col' id='lgdv1'><p className='text-center' style={{ color: "white", fontSize: "25px" }}>Login for Students</p>
                        <div>
                            <br />
                            <form className='loginform1'>
                                <label htmlFor="Username" style={{ color: "white" }}>Username : </label><input type="text" id="reg_no" value={login.reg_no} name="reg_no" onChange={onChange} />
                                <hr />
                                <label htmlFor="Password" style={{ color: "white" }}>Password : </label><input type="password" id="password" value={login.password} name="password" onChange={onChange} />
                                <hr />
                                <p style={{ color: "white" }}>Not Registered?<Link to="/Studentsignup" style={{ paddingLeft: "2px",textDecoration: "none", fontSize: "16px", marginLeft: "25%" }}>SignUp</Link></p>
                                <p style={{ color: "white" }}><Link to="/forgotpassword" style={{ paddingLeft: "2px", textDecoration: "none", fontSize: "16px" }}>Forgot Password</Link></p>
                                <button type="button" id="Login" className="btn btn-outline-primary" style={{ marginLeft: "35%"}} onClick={user}>Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logstud