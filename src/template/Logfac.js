import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
const Logfac = () => {
    const [login, setlogin] = useState({Username: "", Password: ""});
    let history = useNavigate();
    const user = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/stud/loginstud", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({reg_no: login.Username, password: login.Password})
        });
        const json = await response.json();
        if(json.success)
        {
            localStorage.setItem('token', json.authtoken);
            history("/fachome");
        }
    }
    const onChange = (e) =>{
        setlogin({...login, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <Navbar />
            <div style={{ color: 'red', backgroundColor: 'white', marginLeft: '400px', marginRight: "400px", marginTop: " 15px", borderTop: "5px solid red", borderRadius: " 10px", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", paddingBottom: "5px", paddingLeft: " 5px", fontWeight: "bold" }}>
                <p><center>Login for Faculty</center></p>
                <hr />
                <form>
                    <label htmlFor="username">Username : </label><input type="text" id="Username" name="Username" style={{ marginLeft: "10px" }} onChange={onChange}/>
                    <hr />
                    <label htmlFor="Password">Password : </label><input type="password" id="Password" name="Password" style={{ marginLeft: "10px" }} onChange={onChange} />
                </form>
                <hr />
                <p style={{ color: "green" }}>Not Registered?<Link to="/Facultysignup" style={{ paddingLeft: "2px" }}>SignUp</Link><button type="button" id="Login" className="btn btn-outline-danger" style={{ marginLeft: "50px" }} onClick={user}>LogIn</button></p>
            </div></div>
    )
}

export default Logfac