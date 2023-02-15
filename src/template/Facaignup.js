import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
const Facaignup = () => {
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
      history("/facultylogin");
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
      <Navbar />
      <div style={{ color: "red", backgroundColor: "white", opacity: "0.81245", marginLeft: "375px", marginRight: "375px", marginBottom: "50px", marginTop: "17px", borderTop: "5px solid blue", borderRadius: "10px", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',' Geneva', 'Verdana', 'sans-serif'", paddingBottom: "5px", paddingLeft: "5px", fontWeight: "bold" }}>
        <p className='text-center'>SignUp for Faculty</p>
        <hr />
        <form className='container mx-auto'  onSubmit={check}>
          <label htmlFor="name">Name : </label><input type="text" id="name" name="name" value={details.name} style={{ marginLeft: "84px" }} onChange={onChange} />
          <hr />
          <label htmlFor="reg_no">Faculty Id : </label><input type="text" id="reg_no" value={details.reg_no} name="reg_no" onChange={onChange} style={{ marginLeft: "57px" }} />
          <hr />
          <label htmlFor="mail">Mail Id : </label><input type="text" id="mail" name="mail" value={details.mail} onChange={onChange} style={{ marginLeft: "78px" }} />
          <hr />
          <label htmlFor="Password">Password : </label><input type="password" id="Password" name="Password" value={details.Password} onChange={onChange} style={{ marginLeft: "57px" }} />
          <hr />
          <button type="submit" id="Login" className="btn btn-outline-primary" style={{ marginLeft: "250px" }}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Facaignup