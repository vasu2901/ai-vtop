import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Navbar from './Navbar'
export class Logfac extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div style={{color:'red', backgroundColor: 'white', marginLeft: '400px', marginRight: "400px", marginTop:" 15px", borderTop: "5px solid red", borderRadius:" 10px", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", paddingBottom: "5px", paddingLeft:" 5px", fontWeight: "bold"}}>
                    <p><center>Login for Faculty</center></p>
                    <hr />
                        <form>
                            <label htmlFor="username">Username : </label><input type="text" id="Username" name="Username" style={{marginLeft: "10px"}} />
                                <hr />
                                    <label htmlFor="Password">Password : </label><input type="password" id="Password" name="Password" style={{marginLeft: "10px"}} />
                                    </form>
                                        <hr />
                                        <p style={{color: "green"}}>Not Registered?<Link to="/Facultysignup" style={{paddingLeft: "2px"}}>SignUp</Link><button type="button" id="Login" className="btn btn-outline-danger" style={{marginLeft: "50px"}}>LogIn</button></p>
                                    </div>
                                </div>
                                )
  }
}

                                export default Logfac