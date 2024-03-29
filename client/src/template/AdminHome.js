import React, { useContext, useEffect } from "react";
import Navbar3 from "./Navbar3";
import notecontext from '../Context/notes/noteContext'
const Adminhome = () => {
    const context = useContext(notecontext);
    const { teachnote, adminnotes0 } = context;
    const renderCars = (teachnote, index = 0) => {
        return (
            <tr key={index} className={teachnote.courseid + teachnote.slot}>
                <th>{index + 1}</th>
                <th className={teachnote.name}>{teachnote.name}</th>
                <th className={teachnote.reg_no}>{teachnote.reg_no}</th>
                <th>{teachnote.courseid}</th>
                <th className={teachnote.coursename}>{teachnote.coursename}</th>
                <th className={teachnote.facultyid}>{teachnote.facultyid}</th>
                <th className={teachnote.facultyname}>{teachnote.facultyname}</th>
                <th className={teachnote.slot}>{teachnote.slot}</th>
                <th className={teachnote.grades}>{teachnote.grades}</th>
                <th className={teachnote.credit}>{teachnote.credit}</th>
                
                <th className={teachnote.reg_date}>{teachnote.reg_date}</th>
                <th className={teachnote.termend_date}>{teachnote.termend_date}</th>
            </tr>
        )
    }
    useEffect(() => {
        adminnotes0();
    }, [adminnotes0])

    return (
        <div>
            <Navbar3 />
            <div className='container my-3' style={{backgroundColor: "white"}}>
                <table id='myTable' >
                    <thead>
                        <tr>
                            <th style={{ width: "10%" }}>S. No</th>
                            <th style={{ width: "25%" }}>Name</th>
                            <th style={{ width: "25%" }}>Reg No</th>
                            <th style={{ width: "15%" }}>Courseid</th>
                            <th style={{ width: "25%" }}>Coursename</th>
                            <th style={{ width: "25%" }}>Facultyid</th>
                            <th style={{ width: "25%" }}>Facultyname</th>
                            <th style={{ width: "25%" }}>Slot</th>
                            <th style={{ width: "10%" }}>Grades</th>
                            <th style={{ width: "10%" }}>Credit</th>
                            
                            <th style={{ width: "10%" }}>Reg Date</th>
                            <th style={{ width: "10%" }}>Term End Date</th>
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

export default Adminhome