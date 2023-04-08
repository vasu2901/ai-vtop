import React, {  useState } from 'react'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom'
const Forgotpswrd = () => {
  const history = useNavigate('/')
  const [email, setemail] = useState({ email: "" })
  const onchange = (e) => {
    setemail({ ...email, [e.target.name]: e.target.value })
  }
  const onsubmit = async(e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/stud/forgotpassword", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ email: email.email})
      });
      const json = await response.json();
      if(json.success) {
        emailjs.init("aQMSiHzt-uEep8YCA"); //please encrypted user id for malicious attacks
        //set the parameter as per you template parameter[https://dashboard.emailjs.com/templates]
        var templateParams = {
          email_id: email.email,
          from_name: "vighnesh vasu vats",
          message: json.otp
        };

        emailjs.send('service_wact4ql', 'template_lnwuznk', templateParams)
          .then(function (response) {
            alert('SUCCESS!', response.status, response.text);
            history('/newpassword');
          }, function (error) {
            console.log('FAILED...', error);
          });
      }
      else{
        if(email.email.includes('2021@vitbhopal.ac.in')){
          history('/Studentsignup');
        }
        else{
          history('/Facultysignup');
        }
      }
  }
  return (
    <div>

      <div className="container mx-auto" style={{marginTop: "15%", maxWidth: "30%"}}>
        <form>
          <label for="exampleInputEmail1" className="form-label" style={{fontFamily: '"Georgina", "Times New Roman', color:'black', fontSize:"35px"}}>Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={email.email} aria-describedby="emailHelp" onChange={onchange} />
          <button type="submit" className="btn btn-outline-primary my-5" onClick={onsubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Forgotpswrd