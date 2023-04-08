import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
const PCcredits = () => {
    const [remain, setremain] = useState(55)
    const table = async () => {
        const response = await fetch(`https://aivtop.onrender.com/api/marks/getmarks`, {
            method: 'GET',
            headers: { 'content-type': 'Application/JSON', 'auth-token': localStorage.getItem('token') }
        });
        const json = await response.json();
        console.log(json);
        const myTable = document.getElementById('myTable');
        const tr = myTable.getElementsByTagName('tr');
        let remaining = 55;
        json.forEach(note => {
            for (let index = 1; index < tr.length; index++) {
                const td0 = tr[index].getElementsByTagName('td')[1];
                if (td0) {
                    let txt1 = td0.textContent || td0.innerHTML;
                    if (txt1 === note.coursename && note.grades !== 'F' && note.coursetype === 'PC') {
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
            <div className='table mx-auto' >
                <table className='mx-auto' id='myTable'>
                    <thead>
                        <tr >
                            <th>CourseId </th>
                            <th>Coursename</th>
                            <th>CourseType</th>
                            <th>Credits</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>

                                CSD3009

                            </td>
                            <td>

                                Data Structures and Analysis of Algorithms

                            </td>
                            <td>

                                LTP

                            </td>
                            <td>

                                4

                            </td>
                        </tr>
                        <tr>
                            <td>
                                CSA2003
                            </td>
                            <td>

                                Digital Logic and Computer Architecture

                            </td>
                            <td>

                                LTP

                            </td>
                            <td>

                                4

                            </td>
                        </tr>
                        <tr>
                            <td>

                                CSE3001

                            </td>
                            <td>

                                Database Management Systems
                            </td>
                            <td>
                                LTP
                            </td>
                            <td>

                                4

                            </td>
                        </tr>
                        <tr>
                            <td>

                                CSE2001

                            </td>
                            <td>

                                Object Oriented Programming with C++

                            </td>
                            <td>

                                LTP

                            </td>
                            <td>

                                4

                            </td>
                        </tr>
                        <tr>
                            <td>
                                CSA4002
                            </td>
                            <td>

                                Artificial Neural Networks

                            </td>
                            <td>

                                LTP

                            </td>
                            <td>

                                4

                            </td>
                        </tr>
                        <tr>
                            <td>

                                CSE3003

                            </td>
                            <td>

                                Operating Systems
                            </td>
                            <td>

                                LTP

                            </td>
                            <td>

                                4

                            </td>
                        </tr>
                        <tr>
                            <td>
                                -
                            </td>
                            <td>

                                Reinforcement And Representation Learning

                            </td>
                            <td>

                                LTP

                            </td>
                            <td>

                                4

                            </td>
                        </tr>
                        <tr>
                            <td>
                                CSA4008
                            </td>
                            <td>

                                Applied Machine Learning

                            </td>
                            <td>

                                LTP

                            </td>
                            <td>

                                4

                            </td>
                        </tr>
                        <tr>
                            <td>

                                CSE3006

                            </td>
                            <td>

                                Computer Networks

                            </td>
                            <td>

                                LTP

                            </td>
                            <td>

                                4

                            </td>
                        </tr>
                        <tr>
                            <td>

                                CSA4003

                            </td>
                            <td>

                                Data Mining and Warehousing


                            </td>
                            <td>

                                LTP

                            </td>
                            <td>

                                4

                            </td>
                        </tr>
                        <tr>
                            <td>

                                CSA4006

                            </td>
                            <td>

                                Natural Language Processing

                            </td>
                            <td>

                                LTP

                            </td>
                            <td>

                                4

                            </td>
                        </tr>
                        <tr>
                            <td>
                                CSE3011
                            </td>
                            <td>
                                Python Programming
                            </td>
                            <td>

                                LP

                            </td>
                            <td>

                                3

                            </td>
                        </tr>
                        <tr>
                            <td>
                                CSE2004
                            </td>
                            <td>

                                Theory Of Computation and Compiler Design

                            </td>
                            <td>

                                LT

                            </td>
                            <td>

                                4

                            </td>
                        </tr>
                        <tr>
                            <td>
                                CSA4004
                            </td>
                            <td>

                                Deep Learning

                            </td>
                            <td>

                                LTP

                            </td>
                            <td>

                                4

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

export default PCcredits