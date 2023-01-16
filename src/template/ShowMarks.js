import React, { useContext, useEffect } from 'react'
import Sidebar from './Sidebar'
import Marksblock from './Marksblock'
import notecontext from '../Context/notes/noteContext'
import { useNavigate } from 'react-router-dom'

const ShowMarks = () => {
  const context = useContext(notecontext);
  let history = useNavigate();
  const { notes, fetchNotes } = context;
  useEffect(() => {
    if (localStorage.getItem('token')) {
      fetchNotes();
    }
    else{
        history('/studentlogin')
    }
  }, [])
  return (
    <div>
      <Sidebar />
      <div className="innerbody" style={{ marginTop: "2.5%", marginLeft: "10%", backgroundColor: "white", position: "relative", borderTop: "5px solid blue", maxWidth: "85%" }} >
        <h3 className="text-center">Result</h3>
        <hr />

        <div className='row my-3'>
          {notes.map((note) => {
            return <Marksblock key={note._id} note={note} />;
          })}
        </div>
      </div>
    </div>
  )
}

export default ShowMarks