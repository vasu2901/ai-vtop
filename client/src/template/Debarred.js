import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import noteContext from '../Context/notes/noteContext'
const Debarred = () => {
    const context = useContext(noteContext)
    let history = useNavigate();
    const { teachnote, debarred } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            debarred()
        }
        else {
            history('/facultylogin')
        }
    }, [debarred, history])
    const [search, setsearch] = useState({ courseid: "", slot: "" })
    const handleClick = (e) => {
        e.preventDefault();
        const filter0 = search.courseid;
        const filter1 = search.slot;
        console.log(filter0)
        console.log(filter1);
        const myTable = document.getElementById('myTable');
        const tr = myTable.getElementsByTagName('tr');
        if (filter0 !== '' && filter1 !== '') {
            for (let index = 0; index < tr.length; index++) {
                const td0 = tr[index].getElementsByTagName('td')[3];
                const td1 = tr[index].getElementsByTagName('td')[5];

                if (td0 && td1) {
                    let txt1 = td0.textContent || td0.innerHTML;
                    let txt2 = td1.textContent || td1.innerHTML;
                    if (txt1 === filter0 && txt2 === filter1) {
                        tr[index].style.display = "";
                    }
                    else {
                        tr[index].style.display = "none";
                    }
                }
            }
        }
        else {
            for (let ind = 0; ind < tr.length; ind++) {
                tr[ind].style.display = "";
            }
        }
    }
    const renderCars = (teachnote, index = 0) => {
        return (
            <tr key={index} className={teachnote.courseid + teachnote.slot}>
                <td>{index + 1}</td>
                <td className={teachnote.name}>{teachnote.name}</td>
                <td className={teachnote.reg_no}>{teachnote.reg_no}</td>
                <td>{teachnote.courseid}</td>
                <td className={teachnote.coursename}>{teachnote.coursename}</td>
                <td className={teachnote.slot}>{teachnote.slot}</td>
                <td className={teachnote.grades}>{teachnote.grades}</td>
                <td className={teachnote.credit}>{teachnote.credit}</td>
                <td className={teachnote.reg_date}>{teachnote.reg_date}</td>
                <td className={teachnote.termend_date}>{teachnote.termend_date}</td>
            </tr>
        )
    }
    const onchange = (e) => {
        console.log({ [e.target.name]: e.target.value })
        setsearch({ ...search, [e.target.name]: e.target.value })
    }
    const onClick = (e) => {
        e.preventDefault();
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
            history("/facultylogin");
        }
    }

    return (
        <div>
            <div className='containerfluid'>
                <nav className="navbar navbar-expand-fluid" style={{ height: "60px", backgroundColor: "#236fa1e2", zindex: "1" }}>
                    <Link className="navbar-brand mx-3" to="/fachome"
                        style={{ fontSize: "30px", fontFamily: "TimesNewRoman, Times, serif", color: "white" }}><strong>AI VTOP</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/failstudents0" style={{ fontSize: "20px", fontFamily: "TimesNewRoman, Times, serif", color: "white" }}>Failed</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/reregisterstudents" style={{ fontSize: "20px", fontFamily: "TimesNewRoman, Times, serif", color: "white" }}>Debarred</Link>
                            </li>
                        </ul>
                    </div>
                    <button className='btn btn-success' onClick={onClick} style={{ marginRight: "2%" }}>Log Out  <i className='fa fa-power-off'></i></button>
                </nav >
            </div >
            <div style={{ color: 'red', backgroundColor: 'white', marginLeft: '400px', marginRight: "400px", marginTop: " 15px", borderTop: "5px solid red", borderRadius: " 10px", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", paddingBottom: "5px", paddingLeft: " 5px", fontWeight: "bold" }}>
                <p className='text-center'>Search for Record</p>
                <hr />
                <form className='text-center'>
                    <label htmlFor="courseid">Courseid : </label><input type="text" id="courseid" name="courseid" value={search.courseid} style={{ marginLeft: "10px" }} onChange={onchange} />
                    <hr />
                    <label htmlFor="slot">Slot : </label><input type="text" id="slot" name="slot" value={search.slot} style={{ marginLeft: "10px" }} onChange={onchange} />
                </form>
                <hr />
                <button type="button" id="Login" className="btn btn-outline-danger" style={{ marginLeft: "50px" }} onClick={handleClick}>Submit</button>
            </div>
            <div className='container my-3'>
                <table id='myTable' style={{ backgroundColor: "white" }}>
                    <thead>
                        <tr>
                            <th style={{ width: "10%" }}>S. No</th>
                            <th style={{ width: "25%" }}>Name</th>
                            <th style={{ width: "25%" }}>Reg No</th>
                            <th style={{ width: "15%" }}>Courseid</th>
                            <th style={{ width: "25%" }}>Coursename</th>
                            <th style={{ width: "25%" }}>Slot</th>
                            <th style={{ width: "10%" }}>Grades</th>
                            <th style={{ width: "10%" }}>Credit</th>
                            <th style={{ width: "10%" }}>Reg. Date</th>
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

export default Debarred