import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import noteContext from '../Context/notes/noteContext'
import Markstable from './Markstable'
const Fachome = () => {
  const context = useContext(noteContext);
  const { teachnote, facnotes } = context;
  const [search, setsearch] = useState({ courseid: "", slot: "" })
  const handleClick = (e) => {
    e.preventDefault();
    facnotes(search.courseid, search.slot);
  }
  const onchange = (e) => {
    console.log({ [e.target.name]: e.target.value })
    setsearch({ ...search, [e.target.name]: e.target.value })
  }
  let history = useNavigate();
  const onClick = (e) =>{
    e.preventDefault();
    if(localStorage.getItem('token')){
      localStorage.removeItem('token');
      history("/facultylogin");
    }
  }
  return (
    <div>
      <div className='container-expand-lg'>
        <nav className="navbar navbar-expand-fluid" style={{ height: "60px", backgroundColor: "#236fa1e2", zindex: "1" }}>
          <Link className="navbar-brand mx-3" to="/homewebsite"
            style={{ fontSize: "30px", fontFamily: "TimesNewRoman, Times, serif", color: "white" }}><strong>AI-VTOP</strong></Link>
          <button className='btn btn-danger' onClick={onClick} style={{ marginRight: "2%" }}>Log Out</button>
        </nav >
      </div >
      <form>
        <div style={{ color: 'red', backgroundColor: 'white', marginLeft: '400px', marginRight: "400px", marginTop: " 15px", borderTop: "5px solid red", borderRadius: " 10px", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", paddingBottom: "5px", paddingLeft: " 5px", fontWeight: "bold" }}>
          <p><center>Search for Record</center></p>
          <hr />
          <form>
            <label htmlFor="courseid">Courseid : </label><input type="text" id="courseid" name="courseid" value={search.courseid} style={{ marginLeft: "10px" }} onChange={onchange} />
            <hr />
            <label htmlFor="slot">Slot : </label><input type="text" id="slot" name="slot" value={search.slot} style={{ marginLeft: "10px" }} onChange={onchange} />
          </form>
          <hr />
          <button type="button" id="Login" className="btn btn-outline-danger" style={{ marginLeft: "50px" }} onClick={handleClick}>Submit</button>
        </div>
      </form>
      <div className='row my-3' >
        {teachnote.map((note) => {
          return <Markstable key={note._id} note={note} />;
        })}
      </div>

    </div>
  )
}

export default Fachome