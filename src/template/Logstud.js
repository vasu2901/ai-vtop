import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
const Logstud = () => {
    const user = () => {
        var username = document.getElementById("Username").value;
        var check = "BAI";
        if (username.indexOf(check) !== -1) {
            alert("Hello Dear Student");

        }
        else {
            alert("Sorry you can't logIn");
        }
    }
    return (
        <div>
            <Navbar />
            <div style={{ color: "blue", backgroundColor: "white", marginLeft: "400px", marginRight: "400px", marginTop: "15px", borderTop: "5px solid blue", borderRadius: "10px", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", paddingBottom: "5px", paddingLeft: "5px", fontWeight: "bold" }}>
                <p className='text-center'>Login for Students</p>
                <hr />
                <form>
                    <label htmlFor="username">Username : </label> <input type="text" id="Username" name="Username" style={{ marginLeft: "10px" }} />
                    <hr />
                    <label htmlFor="Password">Password : </label><input type="password" id="Password" name="Password" style={{ marginLeft: "10px" }} />
                </form>
                <hr />
                <p style={{ color: "red" }}>Not Registered?<Link to="/Studentsignup" style={{ paddingLeft: "2px" }}>SignUp</Link><button type="button" id="Login" className="btn btn-outline-primary" style={{ marginLeft: "50px" }} onClick={user}>LogIn</button></p>
            </div>
        </div>
    )
}

export default Logstud