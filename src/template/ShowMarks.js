import React, { useContext} from 'react'
import Sidebar from './Sidebar'
import notecontext from '../Context/notes/noteContext'

const ShowMarks = () => {
  const context = useContext(notecontext);
  const {notes, setnotes} = context;
  return (
    <div>
        <Sidebar />
        <div className="innerbody" style={{ marginTop: "10px", marginLeft: "100px", backgroundColor: "white", zIndex: "-1", position: "relative",borderTop: "5px solid blue" }} >
        <h3 className="text-center">Result</h3>
        <hr />
        {notes.map((note)=>{
            return note.coursename;
        })}
        </div>
    </div>
  )
}

export default ShowMarks