import React, {useEffect} from 'react'
import { Link } from "react-router-dom"
import Navbar from './Navbar'

export const Main = () => {
  useEffect(() => {
    document.body.style.backgroundImage = 'url("https://img.freepik.com/free-vector/halftone-gradient-background_53876-90597.jpg?w=740&t=st=1680628840~exp=1680629440~hmac=ef1aa7f9d2e472734baffcf3a218bfd745be3aa63cf6987ae9d84f123140a6d2")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.getElementById('navbar').style.background = "none";
  }, [])
  return (
    <div>
      <Navbar />
        <div className='mainpage' style={{backgroundColor: "white", marginLeft: "5%",maxWidth: "300px",marginTop: "3%",borderTop: "5px solid blue",borderRadius: "10px",paddingLeft: "5px",paddingBottom: "5px",marginBottom: "3%"}}><p><center style={{fontWeight: "bold", fontFamily: "'Lucida Console', 'Courier New', 'monospace'"}}>AI-VTOP for Students</center></p><hr style={{backgroundColor: '#E8E8E8'}} /><p style={{ color: "blue", fontWeight: "bold" }}>With Responsive and Fresh Look and Feel</p><hr  style={{backgroundColor: '#E8E8E8'}} /><button style={{marginLeft: "25%"}}className="btn btn-primary" to="/studentlogin" onClick={()=>{console.log("Hello")}}><Link to="/studentlogin" style={{ color:"white",  fontWeight: "bold" }}>Login For Student</Link></button></div>
        <div className='mainpage' style={{backgroundColor: "white", marginLeft: "5%",maxWidth: "300px",marginTop: "3%",borderTop: "5px solid red",borderRadius: "10px",paddingLeft: "5px",paddingBottom: "5px",marginBottom: "3%"}}><p><center style={{fontWeight: "bold", fontFamily: "'Lucida Console', 'Courier New', 'monospace'"}}>AI-VTOP for Faculty</center></p><hr style={{backgroundColor: '#E8E8E8'}} /><p style={{ color: "red", fontWeight: "bold" }}>With more information about students</p><hr  style={{backgroundColor: '#E8E8E8'}} /><button style={{marginLeft: "25%"}}className="btn btn-danger" to="/facultylogin"><Link to="/facultylogin" style={{ color: "white", fontWeight: "bold" }}>Login For Faculty</Link></button></div>
        <div className='mainpage' style={{backgroundColor: "white", marginLeft: "5%",maxWidth: "300px",marginTop: "3%",borderTop: "5px solid green",borderRadius: "10px",paddingLeft: "5px",paddingBottom: "5px",marginBottom: "3%"}}><p><center style={{fontWeight: "bold", fontFamily: "'Lucida Console', 'Courier New', 'monospace'"}}>AI-VTOP for Administration</center></p><hr style={{backgroundColor: '#E8E8E8'}} /><p style={{ color: "green", fontWeight: "bold" }}>Introduced with Transcript Services</p><hr  style={{backgroundColor: '#E8E8E8'}} /><button style={{marginLeft: "25%"}} className="btn btn-success" to="/adminlogin"><Link to="/adminlogin" style={{ color: "white", fontWeight: "bold"}}>Login For Admin</Link></button></div>
    </div >
  )
}

export default Main;