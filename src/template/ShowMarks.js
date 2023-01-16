import React, { useContext, useEffect } from 'react'
import Sidebar from './Sidebar'
import Marksblock from './Marksblock'
import notecontext from '../Context/notes/noteContext'

const ShowMarks = () => {
  const context = useContext(notecontext);
  const { notes, fetchNotes } = context;
  useEffect(()=>{
    fetchNotes();
  },[])
  return (
    <div>
      <Sidebar />
      <div className="innerbody" style={{ marginTop: "10px", marginLeft: "50px", backgroundColor: "white", position: "relative", borderTop: "5px solid blue", maxWidth: "94%"}} >
        <h3 className="text-center">Result</h3>
        <hr />

        <div className='row my-3'>
          {notes.map((note) => {
            return <Marksblock key={note._id}note={note} />;
          })}
        </div>
      </div>
    </div>
  )
}

export default ShowMarks