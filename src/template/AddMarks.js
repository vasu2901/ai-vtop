import React, { useContext, useState } from 'react'
import Sidebar from './Sidebar'
import notecontext from '../Context/notes/noteContext'
const AddMarks = () => {

  const context = useContext(notecontext);
  const { addNotes } = context;
  const [note, setnote] = useState({ coursename: "", courseid: "", coursetype: "",slot: "", grades: "", credit: "", facultyname: "", facultyid: "" })
  const handleClick = (e) => {
    e.preventDefault();
    console.log(note);
    addNotes(note.coursename, note.courseid, note.coursetype,note.slot, note.grades, note.credit, note.facultyname, note.facultyid);
  }
  const onchange = (e) => {
    console.log({ [e.target.name]: e.target.value })
    setnote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <Sidebar />
      <div style={{ marginTop: "1%", marginLeft: "5%", backgroundColor: "white", borderTop: "5px solid blue", marginRight: "2%", paddingBottom: "1%" }} >
        <h3 className="text-center">Add Your Marks</h3>
        <hr />
        <div className='container mx-2'>
          <select className="form-select" name='coursename' aria-label="Default select example" style={{ backgroundColor: "#007FFF", color: "white" }} onChange={onchange}>
            <option defaultValue>Course Name</option>
            <option value='Data Structures and Analysis of Algorithms'>Data Structures and Analysis of Algorithms</option>
            <option value='Digital Logic and Computer Architecture'>Digital Logic and Computer Architecture</option>
            <option value='Database Management Systems'>Database Management Systems</option>
            <option value='Object Oriented Programming with C++'>Object Oriented Programming with C++</option>
            <option value='Artificial Neural Networks'>Artificial Neural Networks</option>
            <option value='Operating Systems'>Operating Systems</option>
            <option value='Reinforcement And Representation Learning'>Reinforcement And Representation Learning</option>
            <option value='Applied Machine Learning'>Applied Machine Learning</option>
            <option value='Computer Networks'>Computer Networks</option>
            <option value='Data Mining and Warehousing'>Data Mining and Warehousing</option>
            <option value='Natural Language Processing'>Natural Language Processing</option>
            <option value='Python Programming'>Python Programming</option>
            <option value='Theory Of Computation and Compiler Design'>Theory Of Computation and Compiler Design</option>
            <option value='Deep Learning'>Deep Learning</option>
            <option value='Data Visualization'>Data Visualization</option>
            <option value='Machine Learning with Big Data'>Machine Learning with Big Data</option>
            <option value='Hardware Architectures for Machine Learning'>Hardware Architectures for Machine Learning</option>
            <option value='Expert Systems and Fuzzy Logic'>Expert Systems and Fuzzy Logic</option>
            <option value='GPU Programming and Architecture'>GPU Programming and Architecture</option>
            <option value='Agent Based Intelligent System'>Agent Based Intelligent System</option>
            <option value='Convex Optimization'>Convex Optimization</option>
            <option value='Bayesian Data Analysis'>Bayesian Data Analysis</option>
            <option value='Information Retrieval and Web Search'>Information Retrieval and Web Search</option>
            <option value='Introduction to Brain and Neuro Science'>Introduction to Brain and Neuro Science</option>
            <option value='Computational Intelligence'>Computational Intelligence</option>
            <option value='Knowledge Engineering'>Knowledge Engineering</option>
            <option value='Theoretical and Computational Neuroscience'>Theoretical and Computational Neuroscience</option>
            <option value='Introduction to Vision and Robotics'>Introduction to Vision and Robotics</option>
            <option value='Robotics and Control'>Robotics and Control</option>
            <option value='Kinematics and Kinetics for Robotics'>Kinematics and Kinetics for Robotics</option>
            <option value='Robotics Operating System'>Robotics Operating System</option>
            <option value='Introduction to Drones'>Introduction to Drones</option>
            <option value='Computer Vision'>Computer Vision</option>
            <option value='Human Computer Interaction'>Human Computer Interaction</option>
            <option value='Speech Systems'>Speech Systems</option>
            <option value='Surveillance Video Analytics and Image Processing'>Surveillance Video Analytics and Image Processing</option>
            <option value='Computer Vision for Autonomous Vehicles'>Computer Vision for Autonomous Vehicles</option>
            <option value='Immersive Multimedia'>Immersive Multimedia</option>
            <option value='Pattern Recognition and Image Analysis'>Pattern Recognition and Image Analysis</option>
            <option value='AI In Bitcoins and Cryptocurrencies'>AI In Bitcoins and Cryptocurrencies</option>
            <option value='AI In Game Development'>AI In Game Development</option>
            <option value=' Pervasive AI for IOT Applications'> Pervasive AI for IOT Applications</option>
            <option value='Game AI'>Game AI</option>
            <option value='AI In Industry 4.0'>AI In Industry 4.0</option>
            <option value='Cloud Analytics & Automation'>Cloud Analytics & Automation</option>
            <option value='Nasscom Future Skills - Associative Data Analyst'>Nasscom Future Skills - Associative Data Analyst</option>
            <option value='Nasscom Future Skills ï¿½ Advanced Data Analyst'>Nasscom Future Skills ï¿½ Advanced Data Analyst</option>
            <option value='C# And .Net Programming'>C# And .Net Programming</option>
            <option value='Advanced Python Programming '>Advanced Python Programming</option>
            <option value='Advanced Java Programming'>Advanced Java Programming</option>
            <option value='R Programming'>R Programming</option>
            <option value='Scala Programming'>Scala Programming</option>
            <option value='UML Programming'>UML Programming</option>
            <option value='Cognitive Analytics'>Cognitive Analytics</option>
            <option value='Predictive and Time Series Analysis'>Predictive and Time Series Analysis</option>
            <option value='Graph Analytics for Big Data'>Graph Analytics for Big Data</option>
            <option value='Parallel And Distributed Systems'>Parallel And Distributed Systems</option>
            <option value='Data Analytics Using Scala Programming'>Data Analytics Using Scala Programming</option>
            <option value='AI Into Kubernetes'>AI Into Kubernetes</option>
            <option value='Independent Study Elective'>Independent Study Elective</option>
            <option value='Design Project'>Design Project</option>
            <option value='Simulation Project'>Simulation Project</option>
            <option value='Product Development'>Product Development</option>
            <option value='Special Project'>Special Project</option>
            <option value='Computer Project'>Computer Project</option>
            <option value='Engineering Physics'>Engineering Physics</option>
            <option value='Introduction To Computational Chemistry'>Introduction To Computational Chemistry</option>
            <option value='Calculus And Laplace Transforms'>Calculus And Laplace Transforms</option>
            <option value='Applied Linear Algebra'>Applied Linear Algebra</option>
            <option value='"Probability, Statistics and Reliability"'>"Probability, Statistics and Reliability"</option>
            <option value='Discrete Mathematics and Graph Theory'>Discrete Mathematics and Graph Theory</option>
            <option value='Engineering Design and Modeling'>Engineering Design and Modeling</option>
            <option value='Electric Circuits and Systems'>Electric Circuits and Systems</option>
            <option value='Fundamentals Of AI and ML'>Fundamentals Of AI and ML</option>
            <option value='Introduction To Problem Solving and Programming'>Introduction To Problem Solving and Programming</option>
            <option value='Programming In Java'>Programming In Java</option>
            <option value='Competitive Coding Practices'>Competitive Coding Practices</option>
            <option value='Skills For Employment'>Skills For Employment</option>
            <option value='Quantitative Skills'>Quantitative Skills</option>
            <option value='Effective Communication'>Effective Communication</option>
            <option value='Advanced Technical Communication Skills'>Advanced Technical Communication Skills</option>
            <option value='Environmental Sustainability'>Environmental Sustainability</option>
            <option value='Project Exhibition - I'>Project Exhibition - I</option>
            <option value='Project Exhibition - II'>Project Exhibition - II</option>
            <option value='Engineering Project in Community Service'>Engineering Project in Community Service</option>
            <option value='Summer Industrial Internship'>Summer Industrial Internship</option>
            <option value='Semester Internship'>Semester Internship</option>
            <option value='Capstone Project'>Capstone Project</option>
            <option value='Applied Numerical Methods'>Applied Numerical Methods</option>
            <option value='Computational Game Theory'>Computational Game Theory</option>
            <option value='Operations Research'>Operations Research</option>
            <option value='Differential and Difference Equations'>Differential and Difference Equations</option>
            <option value='Random Process'>Random Process</option>
            <option value='Stochastic Process'>Stochastic Process</option>
            <option value='Statistical Inferences and Serious of Functions'>Statistical Inferences and Serious of Functions</option>
            <option value='Human-Computer Interaction'>Human-Computer Interaction</option>
            <option value='Biometric and Security Systems'>Biometric and Security Systems</option>
            <option value='Sensor and IOT'>Sensor and IOT</option>
            <option value='Unmanned Aerial Vehicles'>Unmanned Aerial Vehicles</option>
            <option value='Body Area Network'>Body Area Network</option>
            <option value='Digital Fabrication/Mems'>Digital Fabrication/Mems</option>
            <option value='Bio Inspired Designs'>Bio Inspired Designs</option>
            <option value='Cyber Physical Systems'>Cyber Physical Systems</option>
            <option value='Foundations Of Data Science'>Foundations Of Data Science</option>
            <option value='Introduction to Linguistics'>Introduction to Linguistics</option>
            <option value='Intellectual Property Rights'>Intellectual Property Rights</option>
            <option value='Emotional Intelligence'>Emotional Intelligence</option>
            <option value='Anthropology For Engineers'>Anthropology For Engineers</option>
            <option value='Principles of Management and Organizational Behavior'>Principles of Management and Organizational Behavior</option>
            <option value='International Business'>International Business</option>
            <option value='Technology Entrepreneurship'>Technology Entrepreneurship</option>
            <option value='Supply Chain Management'>Supply Chain Management</option>
            <option value='Disaster Recovery and Business Continuity Management'>Disaster Recovery and Business Continuity Management</option>
            <option value='Judgement and Decision Making'>Judgement and Decision Making</option>
            <option value='Operational Management'>Operational Management</option>
            <option value='Engineering Economics and Financial Accounting'>Engineering Economics and Financial Accounting</option>
            <option value='Human Resource Management'>Human Resource Management</option>
            <option value='Information Systems'>Information Systems</option>
            <option value='Elective / Specialization Courses from other Schools'>Elective / Specialization Courses from other Schools</option>
            <option value='MOOC / Certification Courses '>MOOC / Certification Courses </option>
          </select>
          <hr />
          <select className="form-select" name='courseid' aria-label="Default select example" style={{ backgroundColor: "#007FFF", color: "white" }} onChange={onchange}>
            <option defaultValue>Course Code</option>
            <option value='CSD3009'>CSD3009</option>
            <option value='CSA2003'>CSA2003</option>
            <option value='CSE3001'>CSE3001</option>
            <option value='CSE2001'>CSE2001</option>
            <option value='CSA4002'>CSA4002</option>
            <option value='CSE3003'>CSE3003</option>
            <option value='REI1001'>REI1001</option>
            <option value='CSA4008'>CSA4008</option>
            <option value='CSE3006'>CSE3006</option>
            <option value='CSA4003'>CSA4003</option>
            <option value='CSA4006'>CSA4006</option>
            <option value='CSE3011'>CSE3011</option>
            <option value='CSE2004'>CSE2004</option>
            <option value='CSA4004'>CSA4004</option>
            <option value='CSA3004'>CSA3004</option>
            <option value='CSA4019'>CSA4019</option>
            <option value='CSA4016'>CSA4016</option>
            <option value='CSA4005'>CSA4005</option>
            <option value='GPU1001'>GPU1001</option>
            <option value='CSA3001'>CSA3001</option>
            <option value='CSA3002'>CSA3002</option>
            <option value='CSA3011'>CSA3011</option>
            <option value='CSA4011'>CSA4011</option>
            <option value='CSA4012'>CSA4012</option>
            <option value='CSA4015'>CSA4015</option>
            <option value='CSA3017'>CSA3017</option>
            <option value='CSA4024'>CSA4024</option>
            <option value='IVR1001'>IVR1001</option>
            <option value='ONL1034'>ONL1034</option>
            <option value='KKR1001'>KKR1001</option>
            <option value='EAC4011'>EAC4011</option>
            <option value='CSA2002'>CSA2002</option>
            <option value='CSE3010'>CSE3010</option>
            <option value='CSG2002'>CSG2002</option>
            <option value='CSA4023'>CSA4023</option>
            <option value='CSA3013'>CSA3013</option>
            <option value='CVA1001'>CVA1001</option>
            <option value='CSA3012'>CSA3012</option>
            <option value='PRI1001'>PRI1001</option>
            <option value='ABC1001'>ABC1001</option>
            <option value='AGD1001'>AGD1001</option>
            <option value='PAI1001'>PAI1001</option>
            <option value='CSA4025'>CSA4025</option>
            <option value='CSA3010'>CSA3010</option>
            <option value='CAA1001'>CAA1001</option>
            <option value='NAS1001'>NAS1001</option>
            <option value='NAS2001'>NAS2001</option>
            <option value='CNP1001'>CNP1001</option>
            <option value='APP1001'>APP1001</option>
            <option value='CSE4019'>CSE4019</option>
            <option value='CSA3015'>CSA3015</option>
            <option value='SCP1001'>SCP1001</option>
            <option value='UML1001'>UML1001</option>
            <option value='CSA4007'>CSA4007</option>
            <option value='PTS1001'>PTS1001</option>
            <option value='CSA4021'>CSA4021</option>
            <option value='CSA4022'>CSA4022</option>
            <option value='CSA4010'>CSA4010</option>
            <option value='CSA3014'>CSA3014</option>
            <option value='ISE1001'>ISE1001</option>
            <option value='DSP1001'>DSP1001</option>
            <option value='SMP1001'>SMP1001</option>
            <option value='MEE2008'>MEE2008</option>
            <option value='SPP1001'>SPP1001</option>
            <option value='CMP1001'>CMP1001</option>
            <option value='PHY1001'>PHY1001</option>
            <option value='CHY1005'>CHY1005</option>
            <option value='MAT1001'>MAT1001</option>
            <option value='MAT3002'>MAT3002</option>
            <option value='MAT3003'>MAT3003</option>
            <option value='MAT2002'>MAT2002</option>
            <option value='MEE2014'>MEE2014</option>
            <option value='EEE1001'>EEE1001</option>
            <option value='CSA2001'>CSA2001</option>
            <option value='CSE1021'>CSE1021</option>
            <option value='CSE3002'>CSE3002</option>
            <option value='CSG1014'>CSG1014</option>
            <option value='SFE1001'>SFE1001</option>
            <option value='QSK1001'>QSK1001</option>
            <option value='ENG1004'>ENG1004</option>
            <option value='ENG2005'>ENG2005</option>
            <option value='CHY1006'>CHY1006</option>
            <option value='DSN2098'>DSN2098</option>
            <option value='DSN2099'>DSN2099</option>
            <option value='DSN3099'>DSN3099</option>
            <option value='SIP1001'>SIP1001</option>
            <option value='SIP1002'>SIP1002</option>
            <option value='CSE4099'>CSE4099</option>
            <option value='MAT2003'>MAT2003</option>
            <option value='MAT3008'>MAT3008</option>
            <option value='MAT2004'>MAT2004</option>
            <option value='MAT2001'>MAT2001</option>
            <option value='MAT3004'>MAT3004</option>
            <option value='MAT3016'>MAT3016</option>
            <option value='MAT3017'>MAT3017</option>
            <option value='CSG2002'>CSG2002</option>
            <option value='BSS1001'>BSS1001</option>
            <option value='ECE4006'>ECE4006</option>
            <option value='MEA3015'>MEA3015</option>
            <option value='BAN1001'>BAN1001</option>
            <option value='DFM1001'>DFM1001</option>
            <option value='BID1001'>BID1001</option>
            <option value='CSD3010'>CSD3010</option>
            <option value='CSD3005'>CSD3005</option>
            <option value='ENG3001'>ENG3001</option>
            <option value='BIO3010'>BIO3010</option>
            <option value='HUM1002'>HUM1002</option>
            <option value='HUM1006'>HUM1006</option>
            <option value='MGT1001'>MGT1001</option>
            <option value='IBS1001'>IBS1001</option>
            <option value='MGT2003'>MGT2003</option>
            <option value='MGT2004'>MGT2004</option>
            <option value='DRC1001'>DRC1001</option>
            <option value='JDM1001'>JDM1001</option>
            <option value='OPM1001'>OPM1001</option>
            <option value='EEF1001'>EEF1001</option>
            <option value='BMT1013'>BMT1013</option>
            <option value='IFS1001'>IFS1001</option>
            <option value='ESC1001'>ESC1001</option>
            <option value='MOO1001'>MOO1001</option>
          </select>
          <hr />
          <select className="form-select" name='coursetype' aria-label="Default select example" style={{ backgroundColor: "#007FFF", color: "white" }} onChange={onchange}>
            <option defaultValue>Course Type</option>
            <option value="UC">University Core</option>
            <option value="UE">Uninversity Elective</option>
            <option value="PC">Program Core</option>
            <option value="PE">Program Elective</option>
            <option value="OE">Open Elective</option>
          </select>
          <hr />
          <label htmlFor="slot">Slot : </label><input type="text" id="slot" name="slot" value={note.slot} style={{ marginLeft: "10px" }} onChange={onchange}/>
          <hr />
          <select className="form-select" name='grades' aria-label="Default select example" style={{ backgroundColor: "#007FFF", color: "white" }} onChange={onchange}>
            <option defaultValue>Grades</option>
            <option value="S">S</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="N">N</option>
            <option value="P">P</option>
          </select>
          <hr />
          <select className="form-select" name='credit' aria-label="Default select example" style={{ backgroundColor: "#007FFF", color: "white" }} onChange={onchange}>
            <option defaultValue>Credits</option>
            <option value="0">Zero</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
          </select>
          <hr />
          <select className="form-select" name='facultyname' aria-label="Default select example" style={{ backgroundColor: "#007FFF", color: "white" }} onChange={onchange}>
            <option defaultValue>Name of the Faculty</option>
            <option value="Raja Soundaran">Raja Soundaran</option>
            <option value="Ashok Patel">Ashok Patel</option>
            <option value="Sashmita Padhy">Sashmita Padhy</option>
          </select>
          <hr />
          <select className="form-select" name='facultyid' aria-label="Default select example" style={{ backgroundColor: "#007FFF", color: "white" }} onChange={onchange}>
            <option defaultValue>Faculty Id</option>
            <option value="100055">100055</option>
            <option value="100155">100155</option>
            <option value="100255">100255</option>
          </select>
          <hr />
          <button type="submit" className="btn btn-outline-primary" onClick={handleClick} onChange={onchange}>Submit</button>
        </div>
      </div>
    </div >
  )
}

export default AddMarks