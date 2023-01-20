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
import Homepage from './template/Homepage';
import Uncore from './template/Uncore';
import AddMarks from './template/AddMarks';
import NoteState from './Context/notes/NoteState';
import ShowMarks from './template/ShowMarks';
import PCcredits from './template/PCcredits';
import Unelec from './template/Unelec';
import Pgcore from './template/Pgcore';
import Pgelec from './template/Pgelec';
function App() {
  return (
    <div>
      <NoteState>
        <Router>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/studentlogin" element={<Logstud />}></Route>
            <Route path="/facultylogin" element={<Logfac></Logfac>}></Route>
            <Route path="/adminlogin" element={<Logadmin />}></Route>
            <Route path="/Studentsignup" element={<Studsignup />}></Route>
            <Route path="/Facultysignup" element={<Facaignup />}></Route>
            <Route path="/Adminsignup" element={<Adminsignup />} />
            <Route path= "/homewebsite" element={<Homepage />} />
            <Route path="/unicore" element={<Uncore />} />
            <Route path="/unelec" element={<Unelec />} />
            <Route path="/pgcore" element={<Pgcore />} />
            <Route path="/pgelec" element={<Pgelec />} />
            <Route path="/addMarks" element={<AddMarks />} />
            <Route path='/showMarks' element={<ShowMarks />} />
            <Route path='/remcredits' element={<PCcredits />} />
          </Routes>
        </Router>
        </NoteState>
        
      </div>
  )
}

export default App