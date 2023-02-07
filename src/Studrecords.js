import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import noteContext from './Context/notes/noteContext';
import Navbar3 from './template/Navbar3'
const Studrecords = () => {
    const [search, setsearch] = useState({ reg_no: "", facultyid: "", courseid: "" });
    const context = useContext(noteContext);
    const history = useNavigate('')
    const navigate = useNavigate();
    const sendid = (id0) => {
        navigate('/updatemarks', {
            state: {
                id: id0
            }
        });
    }
    const { teachnote, adminnotes0, deletenote, tl } = context;

    useEffect(() => {
        adminnotes0();
    }, [])
    const [total, settotal] = useState(tl)
    const handleClick = (e) => {
        e.preventDefault();
        const filter0 = search.reg_no;
        const filter1 = search.courseid;
        const filter2 = search.facultyid;
        const myTable = document.getElementById('myTable');
        const tr = myTable.getElementsByTagName('tr');
        if (filter0 !== '' && (filter1 === '' && filter2 === '')) {
            let total0 = 0;

            for (let index = 1; index < tr.length; index++) {
                const td0 = tr[index].getElementsByTagName('td')[2];
                if (td0) {
                    let txt1 = td0.textContent || td0.innerHTML;
                    if (txt1 === filter0) {
                        tr[index].style.display = "";
                        total0 += 1;
                    }
                    else {
                        tr[index].style.display = "none";
                    }
                }
            }
            settotal(total0);
        }
        else if (filter1 !== '' && filter2 !== '' && filter0 === '') {
            let total0 = 0;
            for (let index = 0; index < tr.length; index++) {
                const td0 = tr[index].getElementsByTagName('td')[3];
                const td1 = tr[index].getElementsByTagName('td')[5];
                if (td0 && td1) {
                    let txt1 = td0.textContent || td0.innerHTML;
                    let txt2 = td1.textContent || td1.innerHTML;
                    if (txt1 === filter1 && txt2 === filter2) {
                        tr[index].style.display = "";
                        total0 += 1;
                    }
                    else {
                        tr[index].style.display = "none";
                    }
                }
            }
            settotal(total0)
        }
        else if (filter1 !== '' && filter2 !== '' && filter0 !== '') {
            let total0 = 0;
            for (let index = 0; index < tr.length; index++) {
                const td2 = tr[index].getElementsByTagName('td')[2];
                const td0 = tr[index].getElementsByTagName('td')[3];
                const td1 = tr[index].getElementsByTagName('td')[5];
                if (td0 && td1 && td2) {
                    let txt0 = td2.textContent || td2.innerHTML;
                    let txt1 = td0.textContent || td0.innerHTML;
                    let txt2 = td1.textContent || td1.innerHTML;
                    if (txt1 === filter1 && txt2 === filter2 && txt0 === filter0) {
                        tr[index].style.display = "";
                        total0 += 1;
                    }
                    else {
                        tr[index].style.display = "none";
                    }
                }
            }
            settotal(total0)
        }
        else {
            for (let ind = 0; ind < tr.length; ind++) {
                tr[ind].style.display = "";
            }
            settotal(Object.keys(teachnote).length);

        }
        console.log(total);
    }
    const renderCars = (teachnote, index = 0) => {

        return (
            <tr key={index} colSpan={''}>
                <td style={{ border: "1px solid", }} >{index + 1}</td>
                <td style={{ border: "1px solid", }} >{teachnote.name} </td>
                <td style={{ border: "1px solid", }} >{teachnote.reg_no}</td>
                <td style={{ border: "1px solid", }} >{teachnote.courseid}</td>
                <td style={{ border: "1px solid", }} >{teachnote.coursename}</td>
                <td style={{ border: "1px solid", }} >{teachnote.facultyid}</td>
                <td style={{ border: "1px solid", }} >{teachnote.facultyname}</td>
                <td style={{ border: "1px solid", }} >{teachnote.slot}</td>
                <td style={{ border: "1px solid", }} >{teachnote.grades}</td>
                <td style={{ border: "1px solid", }} >{teachnote.credit}</td>
                <td style={{ border: "1px solid", }} >{teachnote.coursetype}</td>
                <td style={{ border: "1px solid", }} ><i className='fa fa-edit' onClick={()=>{
                    sendid(teachnote._id)
                }}></i></td>
                <td style={{ border: "1px solid", }} ><i className='fa fa-trash' onClick={() => {
                    deletenote(teachnote._id);
                    history('')
                }}></i></td>
            </tr>
        )
    }

    const onchange = (e) => {
        console.log({ [e.target.name]: e.target.value })
        setsearch({ ...search, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Navbar3 />
            <div className='container mx-auto' style={{ color: 'red', backgroundColor: 'white', maxWidth: "35%", marginTop: " 15px", borderTop: "5px solid red", borderRadius: " 10px", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", paddingBottom: "5px", paddingLeft: " 5px", fontWeight: "bold" }}>
                <p className='text-center'>Search for Record</p>
                <hr />
                <form className='text-center'>
                    <label htmlFor="reg_no">Reg. No. : </label><input type="text" id="reg_no" name="reg_no" value={search.reg_no} style={{ marginLeft: "10px" }} onChange={onchange} />
                    <hr />
                    <label htmlFor="facultyid">Faculty Id : </label><input type="text" id="facultyid" name="facultyid" value={search.facultyid} style={{ marginLeft: "10px" }} onChange={onchange} />
                    <label htmlFor="courseid">Course Id : </label><input type="text" id="courseid" name="courseid" value={search.courseid} style={{ marginLeft: "10px", marginTop: "5px" }} onChange={onchange} />
                </form>
                <hr />
                <button type="button" id="Login" className="btn btn-outline-danger" style={{ marginLeft: "50px" }} onClick={handleClick}>Submit</button>
            </div>
            <div className='container my-3 mx-auto'>
                <table id='myTable' className='mx-auto'>
                    <thead>
                        <tr>
                            <th >S. No</th>
                            <th >Name</th>
                            <th >Reg No</th>
                            <th >Courseid</th>
                            <th >Coursename</th>
                            <th >Facultyid</th>
                            <th >Facultyname</th>
                            <th >Slot</th>
                            <th >Grades</th>
                            <th >Credit</th>
                            <th>Coursetype</th>
                            <th >Update</th>
                            <th >Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teachnote.map(renderCars)
                        }
                        <tr>
                            <th colSpan={10}>Total records</th>
                            <th>{total}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Studrecords