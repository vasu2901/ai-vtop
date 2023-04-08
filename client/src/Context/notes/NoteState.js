import noteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
    const host = "https://aivtop.onrender.com";
    const notesInitial = []
    const [notes, setnotes] = useState(notesInitial);
    const [teachnote, setteachnote] = useState(notesInitial);
    const [tl, settl] = useState(0);
    const fetchNotes = async () => {
        /*API CALL;*/
        const response = await fetch(`${host}/api/marks/getmarks`, {
            method: 'GET',
            headers: { 'content-type': 'Application/JSON', 'auth-token': localStorage.getItem('token') }
        });
        const json = await response.json();
        setnotes(json);
        return json;
    };

    const addNotes = async (coursename, courseid, coursetype, slot, grades, credit, facultyname, facultyid) => {
        /*API CALL;*/
        const response = await fetch(`${host}/api/marks/postmarks`, {
            method: 'POST',
            headers: { 'content-type': 'Application/JSON', 'auth-token': localStorage.getItem('token') },
            body: JSON.stringify({ coursename, courseid, coursetype, slot, grades, credit, facultyname, facultyid })
        });
        const json = await response.json();
        if (json.success) {
            alert("Marks added successfully");
        }
        else {
            alert("Failed to add marks");
        }
    }
    const facnotes = async () => {
        const response = await fetch(`${host}/api/teacher`, {
            method: 'POST',
            headers: { 'content-type': 'Application/JSON', 'auth-token': localStorage.getItem('token') },
        });
        const json = await response.json();
        console.log(json);
        setteachnote(json);
    }
    const adminnotes0 = async () => {
        const response = await fetch(`${host}/api/record`, {
            method: 'GET',
            headers: { 'content-type': 'Application/JSON', 'auth-token': localStorage.getItem('token') },
        });
        const json = await response.json();
        console.log(json);
        setteachnote(json);
        settl(Object.keys(json).length)
    }
    const deletenote = async (id) => {
        const response = await fetch(`${host}/api/marks/deletemarks/${id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'Application/JSON', 'auth-token': localStorage.getItem('token') },
        });
        const json = await response.json();
        if(!json.success)
        {
            alert("Record Deleted Successfully");
        }
        else
        {
            alert("Sorry some error occured")
        }
    }
    const updateNotes = async (id,coursename, courseid, coursetype, slot, grades, credit, facultyname, facultyid) => {
        /*API CALL;*/
        console.log("what is this",id,coursename, courseid, coursetype, slot, grades, id.credit, facultyname, facultyid)
        const response = await fetch(`${host}/api/record/updatemarks/${id}`, {
            method: 'POST',
            headers: { 'content-type': 'Application/JSON', 'auth-token': localStorage.getItem('token') },
            body: JSON.stringify({coursename, courseid, coursetype, slot, grades, credit, facultyname, facultyid })
        });
        const json = await response.json();
        if (json.success) {
            console.log(json)
            alert("Marks updated successfully");
        }
        else {
            alert("Failed to Update marks");
        }
    }
    const failstudent = async()=>{
        const response = await fetch(`${host}/api/record/failstud`, {
            method: 'GET',
            headers: { 'content-type': 'Application/JSON', 'auth-token': localStorage.getItem('token') },
        });
        const json = await response.json();
        if (json.success) {
            setteachnote(json.marks);
        }
        else {
            alert("Failed to Update marks");
        }
    }
    return (
        <noteContext.Provider value={{ notes: notes, setnotes: setnotes, addNotes: addNotes, fetchNotes: fetchNotes, teachnote: teachnote, setteachnote: setteachnote, facnotes: facnotes, adminnotes0: adminnotes0, deletenote: deletenote, tl: tl, updateNotes: updateNotes, failstudent: failstudent }}>
            {props.children}
        </noteContext.Provider >
    )
}

export default NoteState;