import React, { Component } from 'react'
import Navbar from './Navbar'
export class Facaignup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{color: "red", backgroundColor: "white",opacity: "0.81245", marginLeft: "375px", marginRight: "375px",marginBottom: "50px", marginTop: "17px", borderTop: "5px solid blue", borderRadius:"10px", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',' Geneva', 'Verdana', 'sans-serif'",paddingBottom: "5px", paddingLeft: "5px", fontWeight: "bold"}}>
            <p><center>SignUp for Faculty</center></p>
            <hr />
            <form>
                <label htmlFor="name">Name : </label><input type="text" id="name" name="name" style={{marginLeft: "84px"}} />
                <hr />
                <label htmlFor="reg_no">Employee Id : </label><input type="text" id="reg_no" name="reg_no" style={{marginLeft: "10px"}} />
                <hr />
                <label htmlFor="mail">Mail Id : </label><input type="text" id="mail" name="mail" style={{marginLeft: "78px"}} />
                <hr />
                <label htmlFor="contact">Contact No : </label><input type="text" id="contact" name="contact" style={{marginLeft: "43px"}} />
                <hr />
                <label htmlFor="Password">Password : </label><input type="password" id="Password" name="Password" style={{marginLeft: "57px"}} />
                <hr />
                <button type="button" id="Login"  class="btn btn-outline-primary" style={{marginLeft:"250px"}}>Submit</button>
            </form>
        </div>
      </div>
    )
  }
}

export default Facaignup