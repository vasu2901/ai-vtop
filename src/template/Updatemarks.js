import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import noteContext from '../Context/notes/noteContext';
import Navbar3 from './Navbar3';
export const Updatemarks = () => {
    const location = useLocation();
    const history = useNavigate()
    const [search, setsearch] = useState({ id: location.state.id, coursename: "", courseid: "",coursetype: "", slot: "", grades: "", credit: "", facultyname: "", facultyid: "" });
    const context = useContext(noteContext);
    const { updateNotes } = context
    const onchange = (e) => {
        setsearch({ ...search, [e.target.name]: e.target.value })
    }
    const handleClick = () => {
        console.log(search)
        updateNotes(search.id,search.coursename, search.courseid, search.coursetype, search.slot, search.grades, search.credit, search.facultyname, search.facultyid);
        history('/studrecord')
    }
    return (
        <div>
            <Navbar3 />
            <div className='container mx-auto' style={{ color: 'red', backgroundColor: 'white', maxWidth: "35%", marginTop: " 15px", borderTop: "5px solid red", borderRadius: " 10px", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", paddingBottom: "5px", paddingLeft: " 5px", fontWeight: "bold" }}>
                <p className='text-center'>Update the Record</p>
                <hr />
                <form >
                    <label htmlFor="coursename">Coursename : </label><input type="text" id="coursename" name="coursename" value={search.coursename} style={{ marginLeft: "10px", marginTop: "5px" }} onChange={onchange} />
                    <hr />
                    <label htmlFor="courseid">Course Id : </label><input type="text" id="courseid" name="courseid" value={search.courseid} style={{ marginLeft: "10px", marginTop: "5px" }} onChange={onchange} />
                    <hr />
                    <label htmlFor="coursetype">Coursetype : </label><input type="text" id="coursetype" name="coursetype" value={search.coursetype} style={{ marginLeft: "10px", marginTop: "5px" }} onChange={onchange} />
                    <hr />
                    <label htmlFor="slot">Slot : </label><input type="text" id="slot" name="slot" value={search.slot} style={{ marginLeft: "10px", marginTop: "5px" }} onChange={onchange} />
                    <hr />
                    <label htmlFor="grades">Grades : </label><input type="text" id="grades" name="grades" value={search.grades} style={{ marginLeft: "10px", marginTop: "5px" }} onChange={onchange} />
                    <hr />
                    <label htmlFor="credit">Credit : </label><input type="text" id="credit" name="credit" value={search.credit} style={{ marginLeft: "10px", marginTop: "5px" }} onChange={onchange} />
                    <hr />
                    <label htmlFor="facultyname">Facultyname : </label><input type="text" id="facultyname" name="facultyname" value={search.facultyname} style={{ marginLeft: "10px", marginTop: "5px" }} onChange={onchange} />
                    <hr />
                    <label htmlFor="facultyid">Facultyid : </label><input type="text" id="facultyid" name="facultyid" value={search.facultyid} style={{ marginLeft: "10px", marginTop: "5px" }} onChange={onchange} />
                    <hr />
                </form>
                <hr />
                <button type="button" id="Login" className="btn btn-outline-danger" style={{ marginLeft: "50px" }} onClick={handleClick}>Submit</button>
            </div>
        </div>
    )
}
