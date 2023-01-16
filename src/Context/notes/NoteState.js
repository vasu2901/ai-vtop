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
        setnotes(json);
    };

    const addNotes = async (coursename, courseid, coursetype, grades, credit, facultyname, facultyid) => {
        /*API CALL;*/
        const response = await fetch(`${host}/api/marks/postmarks`,{
            method: 'POST',
            headers: {'content-type': 'Application/JSON','auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYTdlOGQ5ZDAxZTAwNmYyMzUxYTAwIn0sImlhdCI6MTY3MzU0ODcwNH0.c5mR_qmnSSBFRkIOOv1eqPSYxvCxubT1R5qlzX92Fqs'},
            body: JSON.stringify({coursename, courseid, coursetype, grades,  credit,  facultyname, facultyid})
        });
        console.log(response);
        alert("Marks added successfully");
    }

    return (
        <noteContext.Provider value={{ notes: notes, setnotes: setnotes, addNotes: addNotes, fetchNotes: fetchNotes }}>
            {props.children}
        </noteContext.Provider >
    )
}

export default NoteState;