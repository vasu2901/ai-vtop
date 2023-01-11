import React, {useContext} from 'react'
import Sidebar from './Sidebar'
import notecontext from '../Context/notes/noteContext'
const AddMarks = () => {
  
  const context = useContext(notecontext);
  const {notes, setnotes} = context;
  console.log(notes);
  return (
    <div>
        <Sidebar />
        <div className="innerbody" style={{ marginTop: "10px", marginLeft: "100px", backgroundColor: "white", zIndex: "-1", position: "relative",borderTop: "5px solid blue" }} >
        <h3 className="text-center">Add Your Marks</h3>
        <hr />
        <h1>

        </h1>
        </div>
    </div>
  )
}

export default AddMarks