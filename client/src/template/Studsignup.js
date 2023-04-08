import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import image from '../loginpht2.png'
import "../App.css"
const Studsignup = () => {
  const [details, setdetails] = useState({ name: "", reg_no: "", mail: "", Password: "", });
  let history = useNavigate();
  const check = async (e) => {
    e.preventDefault();
    console.log(details);
    if (details.mail.includes("vitbhopal.ac.in")) {

      const response = await fetch("https://aivtop.onrender.com/api/stud/createstud", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ name: details.name, reg_no: details.reg_no, email: details.mail, password: details.Password })
      });
      const json = await response.json();
      if (json.success) {
        localStorage.setItem('token', json.authtoken);
        emailjs.init("aQMSiHzt-uEep8YCA"); //please encrypted user id for malicious attacks
        //set the parameter as per you template parameter[https://dashboard.emailjs.com/templates]
        var templateParams = {
          email_id: details.mail,
          from_name: "vighnesh vasu vats",
          message: json.otp
        };

        emailjs.send('service_wact4ql', 'template_lnwuznk', templateParams)
          .then(function (response) {
            alert('SUCCESS!', response.status, response.text);
            history('/verify');
          }, function (error) {
            console.log('FAILED...', error);
          });
      }
      else {
        alert(json.message);
        History('/')
      }
    }
    else {
      alert("Sorry you are not allowed to access this page");
      history('/home');
    }
  }
  const onChange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    document.body.style.backgroundImage = "url('https://img.freepik.com/free-photo/blue-brushed-painted-abstract-background_23-2148153193.jpg')"
    document.body.style.backgroundSize = "cover";

  }, [])
  return (
    <div>
      <Link to='/' style={{ textAlign: "right", color: "white", fontSize: "200%", marginLeft: "85%", marginRight: '0%', marginBottom: '3%', textDecoration: "none" }}>AI-VTOP</Link>
      <div className="container mx-auto" id='signuppage1'>
        <div className='row'>
          <div className='col'>
            <img id="signuppht1" className='mx-auto' src={image} alt="Girl in a jacket" />
          </div>
          <div className='col' id='lgdv1'><p className='text-center' style={{ color: "white", fontSize: "25px" }}>Sign Up for Students</p>
            <div>
              <br />
              <form className='loginform1'>
                <label htmlFor="Name" style={{ color: "white" }}>Name : </label><input type="text" id="name" value={details.name} name="name" onChange={onChange} />
                <hr />
                <label htmlFor="reg_no" style={{ color: "white" }}>Registration No. : </label><input type="text" id="reg_no" value={details.reg_no} name="reg_no" onChange={onChange} />
                <hr />
                <label htmlFor="mail" style={{ color: "white" }}>Email Id : </label><input type="text" id="mail" name="mail" value={details.mail} onChange={onChange} />
                <hr />
                <label htmlFor="Password" style={{ color: "white" }}>Password : </label><input type="password" id="Password" value={details.Password} name="Password" onChange={onChange} />
                <hr />
                <button type="button" id="Login" className="btn btn-outline-primary" style={{ marginLeft: "35%" }} onClick={check}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Studsignup