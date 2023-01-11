import noteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "63ba803f9d01e006f2351a0e",
            "stud": "63ba7e8d9d01e006f2351a00",
            "coursename": "Introduction to Python Programming",
            "courseid": "CSE3001",
            "coursetype": "PC",
            "grades": "A",
            "credit": 4,
            "facultyname": "Raja Soundaran",
            "facultyid": "100055",
            "__v": 0
        },
        {
            "_id": "63ba80b79d01e006f2351a13",
            "stud": "63ba7e8d9d01e006f2351a00",
            "coursename": "Python Programming",
            "courseid": "CSE2001",
            "coursetype": "PC",
            "grades": "S",
            "credit": 4,
            "facultyname": "Ashok Patel",
            "facultyid": "100155",
            "__v": 0
        }
    ]
    const [notes, setnotes] = useState(notesInitial);

    
    return (
        <noteContext.Provider value={{ notes: notes, setnotes: setnotes }}>
            {props.children}
        </noteContext.Provider >
    )
}

export default NoteState;