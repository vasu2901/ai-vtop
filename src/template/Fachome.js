import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import noteContext from '../Context/notes/noteContext'
const Fachome = () => {
  const context = useContext(noteContext);
  const { teachnote, facnotes } = context;
  const [search, setsearch] = useState({ courseid: "", slot: "" })
  const handleClick = (e) => {
    e.preventDefault();
    // const all = document.getElementsByClassName();
    // for (let i = 0; i < all.length; i++) {
    //   all[i].style.backgroundColor = "transparent";
    //   all[i].style.color = "black";
    // }
    const boxes = document.getElementsByClassName(`${search.courseid+search.slot}`);
    console.log(boxes.length);
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.backgroundColor = "red";
      boxes[i].style.color = "white";
    }
  }
  useEffect(() => {
    facnotes();
  }, [])
  const renderCars = (teachnote, index = 0) => {
    return (
      <tr key={index} className={teachnote.courseid+teachnote.slot}>
        <td>{index + 1}</td>
        <td className={teachnote.name}>{teachnote.name}</td>
        <td className={teachnote.reg_no}>{teachnote.reg_no}</td>
        <td>{teachnote.courseid}</td>
        <td className={teachnote.coursename}>{teachnote.coursename}</td>
        <td className={teachnote.slot}>{teachnote.slot}</td>
        <td className={teachnote.grades}>{teachnote.grades}</td>
        <td className={teachnote.credit}>{teachnote.credit}</td>
      </tr>
    )
  }

  const onchange = (e) => {
    console.log({ [e.target.name]: e.target.value })
    setsearch({ ...search, [e.target.name]: e.target.value })
  }
  let history = useNavigate();
  const onClick = (e) => {
    e.preventDefault();
    if (localStorage.getItem('token')) {
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
      <div className='container my-3'>
        <table>
          <thead>
            <tr>
              <th>S. No</th>
              <th>Name</th>
              <th>Reg No</th>
              <th>Courseid</th>
              <th>Coursename</th>
              <th>Slot</th>
              <th>Grades</th>
              <th>Credit</th>
              <hr />
            </tr>
          </thead>
          <tbody>
            {
              teachnote.map(renderCars)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Fachome