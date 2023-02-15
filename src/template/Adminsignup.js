import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
const Adminsignup = () => {
  const [details, setdetails] = useState({ name: "", reg_no: "", mail: "", Password: "", });
  let history = useNavigate();
  const check = async (e) => {
    e.preventDefault();
    console.log(details);
    const response = await fetch("http://localhost:5000/api/stud/createstud", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name: details.name, reg_no: details.reg_no, email: details.mail, password: details.Password })
    });
    const json = await response.json();
    if (json.success) {
      history("/adminlogin");
      alert("Please Login");
    }
    else {
      alert(json.message);
    }
  }
  const onChange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <div>
        <Navbar />
        <div style={{ color: "green", backgroundColor: "white", opacity: "0.81245", marginLeft: "375px", marginRight: "375px", marginBottom: "50px", marginTop: "17px", borderTop: "5px solid blue", borderRadius: "10px", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',' Geneva', 'Verdana', 'sans-serif'", paddingBottom: "5px", paddingLeft: "5px", fontWeight: "bold" }}>
          <p className='text-center'>SignUp for Admin</p>
          <hr />
          <form >
            <label htmlFor="name">Name : </label><input type="text" id="name" name="name" value={details.name} onChange={onChange} style={{ marginLeft: "84px" }} />
            <hr />
            <label htmlFor="reg_no">Employee Id : </label><input type="text" id="reg_no" name="reg_no"value={details.reg_no} onChange={onChange}style={{ marginLeft: "33px" }} />
            <hr />
            <label htmlFor="mail">Mail Id : </label><input type="text" id="mail" name="mail"value={details.mail} onChange={onChange}style={{ marginLeft: "78px" }} />
            <hr />
            <label htmlFor="Password">Password : </label><input type="password" id="Password" name="Password"value={details.Password} onChange={onChange}style={{ marginLeft: "57px" }} />
            <hr />
            <button type="button" id="Login" class="btn btn-outline-primary" style={{ marginLeft: "250px" }} onClick={check}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Adminsignup