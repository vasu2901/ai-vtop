import React from 'react'
import { Link } from 'react-router-dom'
import Navbar2 from './Navbar2'
const Sidebar = () => {
    return (
        <><div>
            <Navbar2 />
            <div>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel" style={{ marginTop: "61px", width: "180px", marginBottom: "340px" }}>
                    <div className="btn-group dropend">
                        <button type="button" className="btn btn-light bg-light" data-bs-toggle="dropdown" aria-expanded="false"
                            style={{ marginLeft: "-15px", width: "45px" }}>
                            <i className="fa fa-briefcase" style={{ color: "black", marginLeft: "-15px" }}>My Info </i>
                        </button>
                        <ul className="dropdown-menu">
                            <li className="dropdown-header">
                                <h5>My Info</h5>
                            </li>

                            <li><Link className="dropdown-item" to="/">Profile</Link></li>
                            <li><Link className="dropdown-item" to="/">VIT Gmail Credentials</Link></li>
                            <li><Link className="dropdown-item" to="/">Student Bank Info</Link></li>
                        </ul>
                    </div>
                    <div className="btn-group dropend">
                        <button type="button" className="btn btn-light bg-light" data-bs-toggle="dropdown" aria-expanded="false"
                            style={{ marginLeft: "-15px", width: "45px" }}>
                            <i className="fa fa-info-circle" style={{ color: "black" }}>Info Corner</i>
                        </button>
                        <ul className="dropdown-menu">

                            <li className="dropdown-header">
                                <h5>Info Corner</h5>
                            </li>
                            <li><Link className="dropdown-item" to="/"> FAQ</Link></li>
                            <li><Link className="dropdown-item" to="/">Spotlight</Link></li>
                            <li><Link className="dropdown-item" to="/">Circulars</Link></li>
                        </ul>
                    </div>
                    <div className="btn-group dropend">
                        <button type="button" className="btn btn-light bg-light" data-bs-toggle="dropdown" aria-expanded="false"
                            style={{ marginLeft: "-15px", width: "45px" }}>
                            <i className="fa fa-graduation-cap" style={{ color: "black" }}> Courses</i>
                        </button>
                        <ul className="dropdown-menu">

                            <li className="dropdown-header">
                                <h5>Courses</h5>
                            </li>
                            <li><Link className="dropdown-item" to="/">Program Core</Link></li>
                            <li><Link className="dropdown-item" to="/">Program Elective</Link></li>
                            <li><Link className="dropdown-item" to="/unicore">University Core</Link></li>
                            <li><Link className="dropdown-item" to="/unelec">University Elective</Link></li>
                            <li><Link className="dropdown-item" to="/">Open Elective</Link></li>
                        </ul>
                    </div>
                    <div className="btn-group dropend">
                        <button type="button" className="btn btn-light bg-light" data-bs-toggle="dropdown" aria-expanded="false"
                            style={{ marginLeft: "-15px", width: "45px" }}>
                            <i className="fa fa-bank" style={{ color: "black" }}>Research</i>
                        </button>
                        <ul className="dropdown-menu">

                            <li className="dropdown-header">
                                <h5>Research</h5>
                            </li>
                            <li><Link className="dropdown-item" to="/">Internship</Link></li>
                            <li><Link className="dropdown-item" to="/">Project</Link></li>
                            <li><Link className="dropdown-item" to="/">Extra Curriculars</Link></li>
                        </ul>
                    </div>
                    <div className="btn-group dropend">
                        <button type="button" className="btn btn-light bg-light" data-bs-toggle="dropdown" aria-expanded="false"
                            style={{ marginLeft: "-15px", width: "45px" }}>
                            <i className="fa fa-id-card" style={{ color: "black" }}>Credits Earned</i>
                        </button>
                        <ul className="dropdown-menu">

                            <li className="dropdown-header">
                                <h5>Credits Earned</h5>
                            </li>
                            <li><Link className="dropdown-item" to="/addMarks">Add Your Marks</Link></li>
                            <li><Link className="dropdown-item" to="/">Action two</Link></li>
                            <li><Link className="dropdown-item" to="/">Action three</Link></li>
                        </ul>
                    </div>
                    <div className="btn-group dropend">
                        <button type="button" className="btn btn-light bg-light" data-bs-toggle="dropdown" aria-expanded="false"
                            style={{ marginLeft: "-15px", width: "45px" }}>
                            <i className="fa fa-book" style={{ color: "black" }}>Credits Remaining</i>
                        </button>
                        <ul className="dropdown-menu">

                            <li className="dropdown-header">
                                <h5>Credits Remaining</h5>
                            </li>
                            <li><Link className="dropdown-item" to="/PCcredits">Program Core</Link></li>
                        </ul>
                    </div>
                    <div className="btn-group dropend">
                        <button type="button" className="btn btn-light bg-light" data-bs-toggle="dropdown" aria-expanded="false"
                            style={{ marginLeft: "-15px", width: "45px" }}>
                            <i className="fa fa-certificate" style={{ color: "black" }}>Result Corner</i>
                        </button>
                        <ul className="dropdown-menu">

                            <li className="dropdown-header">
                                <h5>Result Corner</h5>
                            </li>
                            <li><Link className="dropdown-item" to="/showMarks">Result</Link></li>
                            <li><Link className="dropdown-item" to="/">Action two</Link></li>
                            <li><Link className="dropdown-item" to="/">Action three</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            <div className="container-fluid"
                style={{ marginLeft: "0px", marginRight: "900px", width: "30px", backgroundColor: "white", zIndex: "5", position: "absolute" }}>
                <div>
                    <div className="btn-group dropend">
                        <button type="button" className="btn btn-light bg-light" data-bs-toggle="dropdown" aria-expanded="false"
                            style={{ marginLeft: "-15px", width: "45px" }}>
                            <i className="fa fa-briefcase" style={{ color: "black" }}></i>
                        </button>
                        <ul className="dropdown-menu">
                            <li className="dropdown-header">
                                <h5>My Info</h5>
                            </li>

                            <li><Link className="dropdown-item" to="/">Profile</Link></li>
                            <li><Link className="dropdown-item" to="/">VIT Gmail Credentials</Link></li>
                            <li><Link className="dropdown-item" to="/">Student Bank Info</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="btn-group dropend">
                        <button type="button" className="btn btn-light bg-light" data-bs-toggle="dropdown" aria-expanded="false"
                            style={{ marginLeft: "-15px", width: "45px" }}>
                            <i className="fa fa-info-circle" style={{ color: "black" }}></i>
                        </button>
                        <ul className="dropdown-menu">

                            <li className="dropdown-header">
                                <h5>Info Corner</h5>
                            </li>
                            <li><Link className="dropdown-item" to="/"> FAQ</Link></li>
                            <li><Link className="dropdown-item" to="/">Spotlight</Link></li>
                            <li><Link className="dropdown-item" to="/">Circulars</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="btn-group dropend">
                        <button type="button" className="btn btn-light bg-light" data-bs-toggle="dropdown" aria-expanded="false"
                            style={{ marginLeft: "-15px", width: "45px" }}>
                            <i className="fa fa-graduation-cap" style={{ color: "black" }}></i>
                        </button>
                        <ul className="dropdown-menu">

                            <li className="dropdown-header">
                                <h5>Courses</h5>
                            </li>
                            <li><Link className="dropdown-item" to="/template/pg_core.html">Program Core</Link></li>
                            <li><Link className="dropdown-item" to="/template/pg_elec.html">Program Elective</Link></li>
                            <li><Link className="dropdown-item" to="/unicore">University Core</Link></li>
                            <li><Link className="dropdown-item" to="/unelec">University Elective</Link></li>
                            <li><Link className="dropdown-item" to="/">Open Elective</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="btn-group dropend">
                        <button type="button" className="btn btn-light bg-light" data-bs-toggle="dropdown" aria-expanded="false"
                            style={{ marginLeft: "-15px", width: "45px" }}>
                            <i className="fa fa-bank" style={{ color: "black" }}></i>
                        </button>
                        <ul className="dropdown-menu">

                            <li className="dropdown-header">
                                <h5>Research</h5>
                            </li>
                            <li><Link className="dropdown-item" to="/">Internship</Link></li>
                            <li><Link className="dropdown-item" to="/">Project</Link></li>
                            <li><Link className="dropdown-item" to="/">Extra Curriculars</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="btn-group dropend">
                        <button type="button" className="btn btn-light bg-light" data-bs-toggle="dropdown" aria-expanded="false"
                            style={{ marginLeft: "-15px", width: "45px" }}>
                            <i className="fa fa-id-card" style={{ color: "black" }}></i>
                        </button>
                        <ul className="dropdown-menu">

                            <li className="dropdown-header">
                                <h5>Credits Earned</h5>
                            </li>
                            <li><Link className="dropdown-item" to="/addMarks">Add Your Marks</Link></li>
                            <li><Link className="dropdown-item" to="/">Action two</Link></li>
                            <li><Link className="dropdown-item" to="/">Action three</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="btn-group dropend">
                        <button type="button" className="btn btn-light bg-light" data-bs-toggle="dropdown" aria-expanded="false"
                            style={{ marginLeft: "-15px", width: "45px" }}>
                            <i className="fa fa-book" style={{ color: "black" }}></i>
                        </button>
                        <ul className="dropdown-menu">

                            <li className="dropdown-header">
                                <h5>Credits Remaining</h5>
                            </li>
                            <li><Link className="dropdown-item" to="/PCcredits">Program Core</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="btn-group dropend">
                        <button type="button" className="btn btn-light bg-light" data-bs-toggle="dropdown" aria-expanded="false"
                            style={{ marginLeft: "-15px", width: "45px" }}>
                            <i className="fa fa-certificate" style={{ color: "black" }}></i>
                        </button>
                        <ul className="dropdown-menu">

                            <li className="dropdown-header">
                                <h5>Result Corner</h5>
                            </li>
                            <li><Link className="dropdown-item" to="/showMarks">Result</Link></li>
                            <li><Link className="dropdown-item" to="/">Action two</Link></li>
                            <li><Link className="dropdown-item" to="/">Action three</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar