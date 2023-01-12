import React, { useContext, useState } from 'react'
import Sidebar from './Sidebar'
import notecontext from '../Context/notes/noteContext'
const AddMarks = () => {

  const context = useContext(notecontext);
  const { addNotes } = context;
  const [note, setnote] = useState({coursename: "", courseid : "", coursetype: "",  credit: "",grades: "",facultyname : "",facultyid: ""})
  const handleClick = (e) =>
  { 
      e.preventDefault();
      console.log(note);
      addNotes(note.coursename, note.courseid, note.coursetype, note.grades, note.credit, note.facultyname,  note.facultyid);
  }
  const onchange = (e) =>
  {
    console.log({ [e.target.name]: e.target.value})  
    setnote({...note, [e.target.name]: e.target.value})
  }
  return (
    <div>
      <Sidebar />
      <div style={{ marginTop: "1%", marginLeft: "5%", backgroundColor: "white", borderTop: "5px solid blue", marginRight: "2%", paddingBottom: "1%" }} >
        <h3 className="text-center">Add Your Marks</h3>
        <hr />
        <div className='container mx-2'>
          <select className="form-select" name='coursename' aria-label="Default select example" style={{ backgroundColor: "#007FFF", color: "white" }} onChange={onchange}>
            <option defaultValue>Course Name</option>
            <option value="Introduction to  Python Programming">Introduction to  Python Programming</option>
            <option value="Python Programming">Python Programming</option>
            <option value="DataBase Management System">DataBase Management System</option>
          </select>
          <hr />
          <select className="form-select" name='courseid' aria-label="Default select example" style={{ backgroundColor: "#007FFF", color: "white" }} onChange={onchange}>
            <option defaultValue>Course Code</option>
            <option value="CSE2001">CSE2001</option>
            <option value="CSE3001">CSE3001</option>
            <option value="CSE3002">CSE3002</option>
          </select>
          <hr />
          <select className="form-select" name='coursetype' aria-label="Default select example" style={{ backgroundColor: "#007FFF", color: "white" }} onChange={onchange}>
            <option defaultValue>Course Type</option>
            <option value="UC">University Core</option>
            <option value="UE">Uninversity Elective</option>
            <option value="PC">Program Core</option>
            <option value="PE">Program Elective</option>
            <option value="OE">Open Elective</option>
          </select>
          <hr />
          <select className="form-select" name='credit' aria-label="Default select example" style={{ backgroundColor: "#007FFF", color: "white" }} onChange={onchange}>
            <option defaultValue>Credits</option>
            <option value="0">Zero</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
          </select>
          <hr />
          <select className="form-select" name='grades' aria-label="Default select example" style={{ backgroundColor: "#007FFF", color: "white" }} onChange={onchange}>
            <option defaultValue>Grades</option>
            <option value="S">S</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="N">N</option>
            <option value="P">P</option>
          </select>
          <hr />
          <select className="form-select" name='facultyname' aria-label="Default select example" style={{ backgroundColor: "#007FFF", color: "white" }} onChange={onchange}>
            <option defaultValue>Name of the Faculty</option>
            <option value="Raja Soundaran">Raja Soundaran</option>
            <option value="Ashok Patel">Ashok Patel</option>
            <option value="Sashmita Padhy">Sashmita Padhy</option>
          </select>
          <hr />
          <select className="form-select" name='facultyid' aria-label="Default select example" style={{ backgroundColor: "#007FFF", color: "white" }} onChange={onchange}>
            <option defaultValue>Faculty Id</option>
            <option value="100155">100155</option>
            <option value="100155">100055</option>
            <option value="100255">100255</option>
          </select>
          <hr />
          <button type="submit" className="btn btn-outline-primary" onClick={handleClick} onChange={onchange}>Submit</button>
        </div>
      </div>
    </div >
  )
}

export default AddMarks