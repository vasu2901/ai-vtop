import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2980B9", marginTop: "0px"}}>
        <div className="container-fluid">
          <img src="https://findlogovector.com/wp-content/uploads/2019/03/vit-bhopal-logo-vector.png" alt="logo" style={{ maxWidth: "17.5%", maxHeight: "25%", marginLeft: '5%' }} />
          <Link className="navbar-brand" to="/" style={{ textAlign: "Right", color: "white", fontSize: "200%", marginRight: '5%', marginBottom: '3%' }}>AI-VTOP</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;