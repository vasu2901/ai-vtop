import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
const UECredits = () => {
    const [remain, setremain] = useState(21)
    const table = async () => {
        const response = await fetch(`https://aivtop.onrender.com/api/marks/getmarks`, {
            method: 'GET',
            headers: { 'content-type': 'Application/JSON', 'auth-token': localStorage.getItem('token') }
        });
        const json = await response.json();
        const myTable = document.getElementById('myTable');
        const tr = myTable.getElementsByTagName('tr');
        let remaining = 21;
        json.forEach(note => {
            for (let index = 1; index < tr.length; index++) {
                const td0 = tr[index].getElementsByTagName('td')[1];
                if (td0) {
                    let txt1 = td0.textContent || td0.innerHTML;
                    if (txt1 === note.coursename && note.grades !== 'F' && note.grades !== 'N' && note.coursetype === 'UE') {
                        tr[index].style.display = "none";
                        remaining = remaining - note.credit;
                    }
                }
            }
        });
        setremain(remaining);
    }
    useEffect(() => {
        table();
    }, [])

    return (
        <div>
            <Sidebar />
            <div className='table'>
                <table className='mx-auto' style={{ cellspacing: "0" }}>
                    <thead>
                        <tr>
                            <th>

                                CourseId

                            </th>
                            <th>Coursename</th>
                            <th>CourseType</th>
                            <th>Credits</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >

                                MAT2003

                            </td>
                            <td >
                                Applied Numerical Methods

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >

                                MAT3008

                            </td>
                            <td >
                                Computational Game Theory

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td>

                                MAT2004

                            </td>
                            <td >
                                Operations Research

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >

                                MAT2001

                            </td>
                            <td >
                                Differential and Difference Equations

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td  >

                                MAT3004

                            </td>
                            <td >
                                Random Process

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >

                                MAT3016

                            </td>
                            <td >
                                Stochastic Process

                            </td>
                            <td >

                                LP

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >

                                MAT3017

                            </td>
                            <td >
                                Statistical Inferences and Serious of Functions

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >

                                CSG2002

                            </td>
                            <td >
                                Human-Computer Interaction

                            </td>
                            <td >

                                LT

                            </td>
                            <td w>

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >
                            </td>
                            <td >
                                Biometric and Security Systems

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >
                            </td>
                            <td >
                                Sensor and IOT

                            </td>
                            <td>

                                LP

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >
                            </td>
                            <td >
                                Unmanned Aerial Vehicles

                            </td>
                            <td>

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >
                            </td>
                            <td >
                                Body Area Network

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >
                            </td>
                            <td >
                                Digital Fabrication/Mems

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >
                            </td>
                            <td >
                                Bio Inspired Designs

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >
                            </td>
                            <td >
                                Cyber Physical Systems

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >
                            </td>
                            <td >
                                Foundations Of Data Science

                            </td>
                            <td >

                                LP

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >
                            </td>
                            <td >
                                Introduction to Linguistics

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >
                            </td>
                            <td >
                                Intellectual Property Rights

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >
                                HUM1002
                            </td>
                            <td >
                                Emotional Intelligence

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >
                            </td>
                            <td >
                                Anthropology For Engineers

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td  >
                                MGT1001

                            </td>
                            <td >
                                Principles of Management and Organizational Behavior

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >
                            </td>
                            <td >
                                International Business

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >

                                MGT2003

                            </td>
                            <td >
                                Technology Entrepreneurship

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >

                                MGT2004

                            </td>
                            <td >
                                Supply Chain Management

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >
                            </td>
                            <td >
                                Disaster Recovery and Business Continuity Management

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >
                            </td>
                            <td >
                                Judgement and Decision Making

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >
                            </td>
                            <td >
                                Operational Management

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >
                            </td>
                            <td >
                                Engineering Economics and Financial Accounting

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >

                                BMT1013

                            </td>
                            <td >
                                Human Resource Management

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >
                            </td>
                            <td >
                                Information Systems

                            </td>
                            <td >

                                LT

                            </td>
                            <td >

                                3

                            </td>
                        </tr>
                        <tr>
                            <td >

                                -

                            </td>
                            <td  >
                                Elective / Specialization Courses from other Schools

                            </td>
                            <td  >

                                LT

                            </td>
                            <td rowSpan={2} >

                                6

                            </td>
                        </tr>
                        <tr>
                            <td  >

                                -

                            </td>
                            <td  >
                                MOOC / Certification Courses

                            </td>
                            <td >

                                LT

                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>Remaining Credits</td>
                            <td>{remain}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UECredits