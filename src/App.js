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
import Fachome from './template/Fachome';
import Adminhome from './template/AdminHome';
import Studrecords from './Studrecords';
import { Updatemarks } from './template/Updatemarks';
import PECredits from './template/PECredits';
import UCCredits from './template/UCCredits';
import UECredits from './template/UECredits';
import Verify from './template/Verify';
import Facrecord from './template/Facrecord';
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
            <Route path="/homewebsite" element={<Homepage />} />
            <Route path="/unicore" element={<Uncore />} />
            <Route path="/unelec" element={<Unelec />} />
            <Route path="/pgcore" element={<Pgcore />} />
            <Route path="/pgelec" element={<Pgelec />} />
            <Route path="/addMarks" element={<AddMarks />} />
            <Route path='/showMarks' element={<ShowMarks />} />
            <Route path='/pccredits' element={<PCcredits />} />
            <Route path='/fachome' element={<Fachome />} />
            <Route path='/adminhome' element={<Adminhome />} />
            <Route path='/studrecord' element={<Studrecords />} />
            <Route path='/updatemarks' element={<Updatemarks />} />
            <Route path='/pecredits' element={<PECredits />} />
            <Route path='/uccredits' element={<UCCredits />} />
            <Route path='/uecredits' element={<UECredits />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/facrecord' element={<Facrecord />} />
          </Routes>
        </Router>
      </NoteState>

    </div>
  )
}

export default App