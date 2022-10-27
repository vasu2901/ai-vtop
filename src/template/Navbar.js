import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2980B9" }}>
                    <div className="container-fluid">
                        <img src="https://findlogovector.com/wp-content/uploads/2019/03/vit-bhopal-logo-vector.png" alt="logo" style={{ maxWidth: "17.5%", maxHeight: "25%", marginLeft: '70px' }} />
                        <Link className="navbar-brand" to="/" style={{ textAlign: "Right", color: "white", fontSize: "40px", marginRight: '24px', marginBottom: '10px' }}>AI-VTOP</Link>
                    </div>
                </nav>
      </div>
    )
  }
}

export default Navbar