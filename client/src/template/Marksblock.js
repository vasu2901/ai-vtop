import React from 'react'

const Marksblock = (props) => {
  const { note } = props;
  return (
    <div className='col-md-3'>
      <div className="card my-3" style={{color: "black", backgroundColor: "#89CFF0"}}>
        <div className="card-body">
          <p className="card-text">Name of Course: {note.coursename}({note.courseid})</p>
          <p className="card-text">Coure Type: {note.coursetype}</p>
          <p className="card-text">Credits: {note.credit}</p>
          <p className="card-text">Grades: {note.grades}</p>
          <p className="card-text">Faculty: {note.facultyname}({note.facultyid})</p>
          <p className="card-text"></p>
        </div>
      </div>
    </div>
  )
}

export default Marksblock