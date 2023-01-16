import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
const Logstud = () => {
    const [login, setlogin] = useState({reg_no: "", password: ""});
    let history = useNavigate();
    const user = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/stud/loginstud", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({reg_no: login.reg_no, password: login.password})
        });
        const json = await response.json();
        if(json.success)
        {
            localStorage.setItem('token', json.authtoken);
            history("/homewebsite");
        }
    }
    const onChange = (e) =>{
        setlogin({...login, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <Navbar />
            <div className="container mx-15 my-5" style={{ color: "blue", backgroundColor: "white", maxWidth: "450px", borderTop: "5px solid blue", borderRadius: "10px", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", paddingBottom: "5px", paddingLeft: "5px", fontWeight: "bold" }}>
                <p className='text-center'>Login for Students</p>
                <hr />
                <form>
                    <label htmlFor="username">Username : </label> <input type="text" id="reg_no" value={login.reg_no} name="reg_no" style={{ marginLeft: "10px" }} onChange={onChange}/>
                    <hr />
                    <label htmlFor="Password">Password : </label><input type="password" id="password" value={login.password} name="password" style={{ marginLeft: "10%" }} onChange={onChange}/>
                
                <hr />
                <p style={{ color: "red" }}>Not Registered?<Link to="/Studentsignup" style={{ paddingLeft: "2px" }}>SignUp</Link><button type="button" id="Login" className="btn btn-outline-primary" style={{ marginLeft: "50%" }} onClick={user}>LogIn</button></p>
                </form>
            </div>
        </div>
    )
}

export default Logstud