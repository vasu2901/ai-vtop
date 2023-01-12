import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
const Logstud = () => {
    const user = () => {
        var username = document.getElementById("Username").value;
        var check = "BAI";
        if (username.indexOf(check) !== -1) {
            alert("Welcome to Dear Student");
            window.location.href = "http://localhost:3000/homewebsite"
        }
        else {
            alert("Sorry you can't logIn");
        }
    }
    return (
        <div>
            <Navbar />
            <div className="container mx-15 my-5" style={{ color: "blue", backgroundColor: "white", maxWidth: "450px",  borderTop: "5px solid blue", borderRadius: "10px", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", paddingBottom: "5px", paddingLeft: "5px", fontWeight: "bold" }}>
                <p className='text-center'>Login for Students</p>
                <hr />
                <form>
                    <label htmlFor="username">Username : </label> <input type="text" id="Username" name="Username" style={{ marginLeft: "10px" }} />
                    <hr />
                    <label htmlFor="Password">Password : </label><input type="password" id="Password" name="Password" style={{ marginLeft: "10%" }} />
                </form>
                <hr />
                <p style={{ color: "red" }}>Not Registered?<Link to="/Studentsignup" style={{ paddingLeft: "2px" }}>SignUp</Link><button type="button" id="Login" className="btn btn-outline-primary" style={{ marginLeft: "50%" }} onClick={user}>LogIn</button></p>
            </div>
        </div>
    )
}

export default Logstud