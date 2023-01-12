import noteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = []
    const [notes, setnotes] = useState(notesInitial);


    const fetchNotes = async () => {
        /*API CALL;*/
        const response = await fetch(`${host}/api/marks/getmarks`,{
            method: 'GET',
            headers: {'content-type': 'Application/JSON','auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYTdlOGQ5ZDAxZTAwNmYyMzUxYTAwIn0sImlhdCI6MTY3MzU0ODcwNH0.c5mR_qmnSSBFRkIOOv1eqPSYxvCxubT1R5qlzX92Fqs'}
        });
        const json = await response.json();

        console.log(json);
        setnotes(notes.concat(json));
    };

    const addNotes = async (coursename, courseid, coursetype, grades, credit, facultyname, facultyid) => {
        /*API CALL;*/
        const response = await fetch(`${host}/api/marks/postmarks`,{
            method: 'POST',
            headers: {'content-type': 'Application/JSON','auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYTdlOGQ5ZDAxZTAwNmYyMzUxYTAwIn0sImlhdCI6MTY3MzU0ODcwNH0.c5mR_qmnSSBFRkIOOv1eqPSYxvCxubT1R5qlzX92Fqs'},
            body: JSON.stringify({coursename, courseid, coursetype, grades,  credit,  facultyname, facultyid})
        });
        console.log(response);
        const note = {
                "_id": "63ba80b79d01e006f2351a17",
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
        setnotes(notes.concat(note));
    }

    return (
        <noteContext.Provider value={{ notes: notes, setnotes: setnotes, addNotes: addNotes, fetchNotes: fetchNotes }}>
            {props.children}
        </noteContext.Provider >
    )
}

export default NoteState;