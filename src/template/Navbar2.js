import React from 'react'
import { Link } from 'react-router-dom'
const Navbar2 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{height: "60px", backgroundColor: "#236fa1e2", zindex: "1"}}>
        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample" style={{marginLeft: "5px"}}>
          <i className="navbar-toggler-icon" style={{color: "black"}}></i>
        </button>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/homewebsite"
            style={{fontSize: "30px", fontFamily: "TimesNewRoman, Times, serif",color: "white"}}><strong>AI-VTOP</strong></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> 
        </div>
    </nav >
    </div >
  )
}

export default Navbar2