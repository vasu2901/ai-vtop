import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar3 = () => {
    const history = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            history('/adminlogin')
        }
    }, [history])

    const onClick = () => {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
            history('/adminlogin')
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ height: "60px", backgroundColor: "#236fa1e2", zindex: "1" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand mx-3" to="/adminhome"
                        style={{ fontSize: "30px", fontFamily: "TimesNewRoman, Times, serif", color: "white" }}><strong>AI-VTOP</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/studrecord" style={{ fontSize: "20px", fontFamily: "TimesNewRoman, Times, serif", color: "white" }}>Student</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/facrecord" style={{ fontSize: "20px", fontFamily: "TimesNewRoman, Times, serif", color: "white" }}>Faculty</Link>
                            </li>
                        </ul>
                        <button className='btn btn-dark' onClick={onClick} style={{ marginRight: "2%" }}>Log Out <i className='fa fa-power-off'></i></button>
                    </div>
                </div>
            </nav >

        </div>
    )
}

export default Navbar3