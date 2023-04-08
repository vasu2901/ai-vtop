import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
const UCCredits = () => {
    const [remain, setremain] = useState(69)
    const table = async () => {
        const response = await fetch(`https://aivtop.onrender.com/api/marks/getmarks`, {
            method: 'GET',
            headers: { 'content-type': 'Application/JSON', 'auth-token': localStorage.getItem('token') }
        });
        const json = await response.json();
        console.log(json);
        const myTable = document.getElementById('myTable');
        const tr = myTable.getElementsByTagName('tr');
        let remaining = 69;
        json.forEach(note => {
            for (let index = 1; index < tr.length; index++) {
                const td0 = tr[index].getElementsByTagName('td')[1];
                if (td0) {
                    let txt1 = td0.textContent || td0.innerHTML;
                    if (txt1 === note.coursename && note.grades !== 'F' && note.coursetype === 'UC') {
                        tr[index].style.display = "none";
                        remaining = remaining - note.credit;
                    }
                }
            }
        });
        console.log(remaining)
        setremain(remaining);
    }
    useEffect(() => {
        table();
    }, [])

    return (
        <div>
            <Sidebar />
            <table id={'myTable'} className="table mx-auto my-auto" style={{ cellspacing: "0", maxWidth: "45%" }}>
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
                        <td >

                            PHY1001

                        </td>
                        <td >

                            Engineering Physics

                        </td>
                        <td >

                            LTP

                        </td>
                        <td >

                            4

                        </td>
                    </tr>
                    <tr>
                        <td >

                            CHY1005

                        </td>
                        <td >

                            Introduction To Computational Chemistry

                        </td>
                        <td >

                            LTP

                        </td>
                        <td >

                            4

                        </td>
                    </tr>
                    <tr>
                        <td >

                            MAT1001

                        </td>
                        <td >

                            Calculus And Laplace Transforms

                        </td>
                        <td >

                            LT

                        </td>
                        <td >

                            4

                        </td>
                    </tr>
                    <tr>
                        <td >

                            MAT3002

                        </td>
                        <td >

                            Applied Linear Algebra

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

                            MAT3003

                        </td>
                        <td >

                            Probability, Statistics and Reliability

                        </td>
                        <td >

                            LT

                        </td>
                        <td >

                            4

                        </td>
                    </tr>
                    <tr>
                        <td  >

                            MAT2002

                        </td>
                        <td >
                            Discrete Mathematics and Graph Theory

                        </td>
                        <td >

                            LT

                        </td>
                        <td >

                            4

                        </td>
                    </tr>
                    <tr>
                        <td >
                        </td>
                        <td >
                            Engineering Design and Modeling

                        </td>
                        <td >

                            LTP

                        </td>
                        <td >

                            4

                        </td>
                    </tr>
                    <tr>
                        <td >

                            EEE1001

                        </td>
                        <td >
                            Electric Circuits and Systems

                        </td>
                        <td >

                            LTP

                        </td>
                        <td >

                            4

                        </td>
                    </tr>
                    <tr>
                        <td >

                            CSA2001

                        </td>
                        <td >
                            Fundamentals Of AI and ML

                        </td>
                        <td >

                            LTP

                        </td>
                        <td >

                            4

                        </td>
                    </tr>

                    <tr>
                        <td >

                            CSE1021

                        </td>
                        <td >

                            Introduction To Problem Solving and Programming

                        </td>
                        <td >

                            LP

                        </td>
                        <td >

                            4

                        </td>
                    </tr>
                    <tr>
                        <td >

                            CSE3002

                        </td>
                        <td >

                            Programming In Java

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

                            Competitive Coding Practices

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

                            Skills For Employment

                        </td>
                        <td >

                            P

                        </td>
                        <td >

                            1

                        </td>
                    </tr>
                    <tr>
                        <td >
                        </td>
                        <td >

                            Quantitative Skills

                        </td>
                        <td >

                            LT

                        </td>
                        <td >

                            2

                        </td>
                    </tr>

                    <tr>
                        <td >

                            ENG1004

                        </td>
                        <td >

                            Effective Communication

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

                            ENG2005

                        </td>
                        <td >

                            Advanced Technical Communication Skills

                        </td>
                        <td >

                            LT

                        </td>
                        <td >

                            2

                        </td>
                    </tr>
                    <tr>
                        <td >

                            CHY1006

                        </td>
                        <td >

                            Environmental Sustainability

                        </td>
                        <td >

                            LT

                        </td>
                        <td >

                            2

                        </td>
                    </tr>
                    <tr>
                        <td >

                            DSN2098

                        </td>
                        <td >

                            Project Exhibition - I

                        </td>
                        <td >
                            PJ

                        </td>
                        <td >

                            1

                        </td>
                    </tr>
                    <tr>
                        <td >

                            DSN2099

                        </td>
                        <td >

                            Project Exhibition - II

                        </td>
                        <td >
                            PJ

                        </td>
                        <td >

                            1

                        </td>
                    </tr>
                    <tr>
                        <td >

                            DSN3099

                        </td>
                        <td >

                            Engineering Project in Community Service

                        </td>
                        <td >

                            PJ

                        </td>
                        <td >

                            2

                        </td>
                    </tr>
                    <tr>
                        <td >
                        </td>
                        <td >

                            Summer Industrial Internship

                        </td>
                        <td >

                            PJ

                        </td>
                        <td >

                            1

                        </td>
                    </tr>
                    <tr>
                        <td >
                        </td>
                        <td >

                            Semester Internship

                        </td>
                        <td>

                            PJ

                        </td>
                        <td>

                            4

                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>

                            Capstone Project

                        </td>
                        <td>

                            PJ

                        </td>
                        <td>

                            5

                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            Remaining Credits
                        </td>
                        <td>{remain}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default UCCredits