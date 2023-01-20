import React from 'react'
import { Link } from 'react-router-dom'
const Navbar2 = () => {
  return (
    <div className='container-expand-lg'>
      <nav className="navbar navbar-expand-fluid" style={{height: "60px", backgroundColor: "#236fa1e2", zindex: "1"}}>
        <button className="btn btn-primary bg-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample" style={{marginLeft: "0.25%", size: "2%"}}>
          <i className="navbar-toggler-icon" style={{color: "black"}}></i>
        </button>
        <Link className="navbar-brand mx-3" to="/homewebsite"
            style={{fontSize: "30px", fontFamily: "TimesNewRoman, Times, serif",color: "white"}}><strong>AI-VTOP</strong></Link>
    </nav >
    </div >
  )
}

export default Navbar2