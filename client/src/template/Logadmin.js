import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from "../loginpht1.png"
const Logadmin = () => {
  const [login, setlogin] = useState({ Username: "", Password: "" });
  let history = useNavigate();
  const user = async (e) => {
    e.preventDefault();
    const response = await fetch("https://aivtop.onrender.com/api/stud/loginstud", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ reg_no: login.Username, password: login.Password })
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      history("/adminhome");
    }
  }
  const onchange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    document.body.style.backgroundImage = "url('https://img.freepik.com/free-vector/watercolour-smoke-background_91008-448.jpg?w=740&t=st=1680625830~exp=1680626430~hmac=6b22e1ce5736f4b2136a85358fab50641bd0cac992cf569d2a20e79b38a63bd0')"
    document.body.style.backgroundSize = "cover";
  }, [])
  return (
    <div>
      <Link to='/' style={{ textAlign: "right", color: "white", fontSize: "200%", marginLeft: "85%", marginRight: '0%', marginBottom: '3%', textDecoration: "none" }}>AI-VTOP</Link>
      <div className='container mx-auto my-5' id='loginpage1' style={{ borderTop: "5px solid green" }}>
        <div className='row'>
          <div className='col'>
            <img id="loginpht1" className='mx-auto' src={image} alt="Girl in a jacket" />
          </div>
          <div className='col' id='lgdv1'><p className='text-center' style={{ color: "white", fontSize: "25px" }}>Login for Faculty</p>
            <div>
              <br />
              <form className='loginform1'>
                <label htmlFor="Username" style={{ color: "white" }}>Username : </label><input type="text" id="reg_no" value={login.Username} name="Username" onChange={onchange} />
                <hr />
                <label htmlFor="Password" style={{ color: "white" }}>Password : </label><input type="password" id="password" value={login.Password} name="Password" onChange={onchange} />
                <hr />
                <p style={{ color: "white" }}>Not Registered?<Link to="/FacultySignup" style={{ paddingLeft: "2px", textDecoration: "none", fontSize: "16px", marginLeft: "5%" }}>SignUp</Link></p>
                <p style={{ color: "white" }}><Link to="/forgotpassword" style={{ paddingLeft: "2px", textDecoration: "none", fontSize: "16px" }}>Forgot Password</Link></p>
                <button type="button" id="Login" className="btn btn-outline-danger" style={{ marginLeft: "50%" }} onClick={user}>LogIn</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logadmin