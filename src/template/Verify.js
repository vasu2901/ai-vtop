import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import image from '../loginpht1.png'
const Verify = () => {
  const [note, setnote] = useState({ email: "", otp: "" })
  const history = useNavigate()
  const verify = async (e) => {
    e.preventDefault()
    if (note.email.includes('vitbhopal.ac.in')) {
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
        if (json.user.reg_no.includes('BAI')) {
          history('/studentlogin')
        }
        else if (json.user.reg_no.includes('adm')) {
          history('/adminlogin')
        }
        else {
          history("/facultylogin");
        }
      }
      else {
        console.log("Failed to verify")
      }
    }
    else {
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
      <Link to='/' style={{ textAlign: "right", color: "white", fontSize: "200%", marginLeft: "85%", marginRight: '0%', marginBottom: '3%', textDecoration: "none" }}>AI-VTOP</Link>
            <div className="container mx-auto" id='loginpage1'>
                <div className='row'>
                    <div className='col'>
                        <img id="loginpht1" className='mx-auto' src={image} alt="Girl in a jacket" />
                    </div>
                    <div className='col' id='lgdv1'><p className='text-center' style={{ color: "white", fontSize: "25px" }}>Verification</p>
                        <div>
                            <br />
                            <form className='loginform1'>
                                <label htmlFor="Username" style={{ color: "white" }}>Email : </label><input type="text"  id="mail" value={note.email} name="email" onChange={onchange} />
                                <hr />
                                <label htmlFor="Password" style={{ color: "white" }}>otp : </label><input type="text" id="otp" value={note.otp} name="otp" onChange={onchange} />
                                <hr />
                                <button type="button" id="Login" className="btn btn-outline-primary" style={{ marginLeft: "35%"}} onClick={verify}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Verify