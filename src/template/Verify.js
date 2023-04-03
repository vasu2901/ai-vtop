import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
const Verify = () => {
  const [note, setnote] = useState({ email: "", otp: "" })
  const history = useNavigate()
  const verify = async (e) => {
    e.preventDefault()
    if ( note.email.includes('vitbhopal.ac.in')) {
      const response = await fetch("http://localhost:5000/api/stud/verify", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ email: note.email, otp: Number(note.otp) })
      });
      const json = await response.json();
      if (json.success) {
        history("/fachome");
      }
      else {
        console.log("Failed to verify")
      }
    }
    else{
      alert("Sorry, you are not allowed to access this page")
      history("/");
    }
  }
  const onchange = (e) => {
    console.log({ [e.target.name]: e.target.value })
    setnote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <Navbar />
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={note.ema
        } placeholder="name@example.com" onChange={onchange} />
      </div>
      <div className="mb-3" id='otp-form'>
        <h3>An otp has been sent to your registered email.</h3>
        <label htmlFor="exampleFormControlInput1" className="form-label" >OTP</label>
        <input type="number" className="form-control" id="exampleFormControlInput1" name='otp' value={note.otp
        } placeholder="enter the otp" onChange={onchange} />
      </div>
      <button className='btn btn-outline-dark' onClick={verify}>Submit</button>
    </div>
  )
}

export default Verify