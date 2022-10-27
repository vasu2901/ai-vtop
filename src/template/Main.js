import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Navbar from './Navbar'
export class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{backgroundColor: "white", marginLeft: "35px",marginRight: "810px", marginTop: "15px",borderTop: "5px solid blue",borderRadius: "10px",paddingLeft: "5px",paddingBottom: "5px",marginBottom: "15px"}}><p><center style={{fontWeight: "bold", fontFamily: "'Lucida Console', 'Courier New', 'monospace'"}}>AI-VTOP for Students</center></p><hr style={{backgroundColor: '#E8E8E8'}} /><p style={{ color: "blue", fontWeight: "bold" }}>With Responsive and Fresh Look and Feel</p><hr  style={{backgroundColor: '#E8E8E8'}} /><button style={{marginLeft: "150px"}}className="btn btn-primary" to="/studentlogin"><Link to="/studentlogin" style={{ color:"white",  fontWeight: "bold" }}>Login For Student</Link></button></div>
        <div style={{backgroundColor: "white", marginLeft: "35px",marginRight: "810px", marginTop: "15px",borderTop: "5px solid red",borderRadius: "10px",paddingLeft: "5px",paddingBottom: "5px",marginBottom: "15px"}}><p><center style={{fontWeight: "bold", fontFamily: "'Lucida Console', 'Courier New', 'monospace'"}}>AI-VTOP for Faculty</center></p><hr style={{backgroundColor: '#E8E8E8'}} /><p style={{ color: "red", fontWeight: "bold" }}>With more information about students</p><hr  style={{backgroundColor: '#E8E8E8'}} /><button style={{marginLeft: "150px"}}className="btn btn-danger" to="/facultylogin"><Link to="/facultylogin" style={{ color: "white", fontWeight: "bold" }}>Login For Faculty</Link></button></div>
        <div style={{backgroundColor: "white", marginLeft: "35px",marginRight: "810px", marginTop: "15px",borderTop: "5px solid green",borderRadius: "10px",paddingLeft: "5px",paddingBottom: "5px",marginBottom: "15px"}}><p><center style={{fontWeight: "bold", fontFamily: "'Lucida Console', 'Courier New', 'monospace'"}}>AI-VTOP for Administration</center></p><hr style={{backgroundColor: '#E8E8E8'}} /><p style={{ color: "green", fontWeight: "bold" }}>Introduced with Transcript Services</p><hr  style={{backgroundColor: '#E8E8E8'}} /><button style={{marginLeft: "150px"}} className="btn btn-success" to="/adminlogin"><Link to="/adminlogin" style={{ color: "white", fontWeight: "bold"}}>Login For Admin</Link></button></div>
      </div>

    )
  }
}

export default Main