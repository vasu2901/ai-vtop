import React, { useContext, useEffect } from 'react'
import Sidebar from './Sidebar'
import notecontext from '../Context/notes/noteContext';
const PCcredits = () => {
    const context = useContext(notecontext);
    const { notes, fetchNotes } = context;
    useEffect(() => {
        fetchNotes();
    }, [])
    const count0 = () => {
        let total0 = 0;
        notes.forEach((note) => {
            if(note.coursetype === 'PC')
            {
                total0 += Number(note.credit)
            }
        })
        alert(69 - Number(total0));
        console.log(69 - Number(total0));
    }
    const count1 = () => {
        let total1 = 0;
        notes.forEach((note) => {
            if(note.coursetype === 'UC')
            {
                total1 += Number(note.credit)
            }
        })
        alert(55 - Number(total1));
    }
    const count2 = () => {
        let total2 = 0;
        notes.forEach((note) => {
            if(note.coursetype === 'PE')
            {
                total2 += Number(note.credit)
            }
        })
        alert(21 - Number(total2));
    }
    const count3 = () => {
        let total3 = 0;
        notes.forEach((note) => {
            if(note.coursetype === 'UE')
            {
                total3 += Number(note.credit)
            }
        })
        alert(15 - Number(total3));
    }
    return (
        <div>
            <Sidebar />
            <div style={{ marginTop: "1%", marginLeft: "5%", backgroundColor: "white", borderTop: "5px solid blue", marginRight: "2%", paddingBottom: "1%" }} >
                <h3 className="text-center">Program Core Credits</h3>
                <hr />
            <button className='btn  btn-primary' onClick={count0}>Know Program Core Credits</button>
            <hr />
            <button className='btn  btn-primary' onClick={count1}>Know Uninversity Core Credits</button>
            <hr />
            <button className='btn  btn-primary' onClick={count2}>Know Program Elective Credits</button>
            <hr />
            <button className='btn  btn-primary' onClick={count3}>Know University Elective Credits</button>
            <hr />
            </div>
        </div>
    )
}

export default PCcredits