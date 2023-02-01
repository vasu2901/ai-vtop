import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
const Logadmin = () => {
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
            history("/homewebsite");
        }
    }
    const onchange = (e) =>{
        setlogin({...login, [e.target.name]: e.target.value})
    }
  return (
    <div>
      <Navbar />
      <div style={{ color: 'green', backgroundColor: 'white', marginLeft: '400px', marginRight: "400px", marginTop: " 15px", borderTop: "5px solid green", borderRadius: " 10px", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", paddingBottom: "5px", paddingLeft: " 5px", fontWeight: "bold" }}>
        <p className='text-center'>Login for Admin</p>
        <hr />
        <form>
          <label htmlFor="username">Username : </label><input type="text" id="Username" name="Username" value={login.Username} style={{ marginLeft: "10px" }} onChange={onchange}/>
          <hr />
          <label htmlFor="Password">Password : </label><input type="password" id="Password" name="Password" value={login.Password} style={{ marginLeft: "10px" }} onChange={onchange} />
        </form>
        <hr />
        <p style={{ color: "blueviolet" }}>Not Registered?<Link to="/Adminsignup" style={{ paddingLeft: "2px" }}>SignUp</Link><button type="submit" id="Login" class="btn btn-outline-success" style={{ marginLeft: "50px" }} onSubmit={user}>LogIn</button></p>
      </div> </div>
  )
}

export default Logadmin