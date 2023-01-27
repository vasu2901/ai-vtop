import React from 'react'

const Markstable = (props) => {
    const { note } = props;
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Reg No</th>
                        <th scope="col">Slot</th>
                        <th scope="col">Grades</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{note.name}</td>
                        <td>{note.reg_no}</td>
                        <td>{note.slot}</td>
                        <td>{note.grades}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Markstable