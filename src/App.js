import './App.css';
import React from 'react';
import Logstud from './template/Logstud';
import Logfac from './template/Logfac';
import Logadmin from './template/Logadmin';
import Studsignup from './template/Studsignup';
import Facaignup from './template/Facaignup';
import Adminsignup from './template/Adminsignup';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Main from './template/Main';
function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/studentlogin" element={<Logstud />}></Route>
            <Route path="/facultylogin" element={<Logfac></Logfac>}></Route>
            <Route path="/adminlogin" element={<Logadmin />}></Route>
            <Route path="/Studentsignup" element={<Studsignup />}></Route>
            <Route path="/Facultysignup" element={<Facaignup />}></Route>
            <Route path="/Adminsignup" element={<Adminsignup />} />
          </Routes>
        </Router>
      </div>
  )
}

export default App