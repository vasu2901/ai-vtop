import React,{useEffect}  from 'react'
import Sidebar from './Sidebar'
const Homepage = () => {
  useEffect(()=>{
    document.body.style.backgroundImage = 'none';
  },[])
  return (
    <div>
      <Sidebar />
      <div className="innerbody" style={{ marginTop: "10px", marginLeft: "5%",marginRight:"5%", backgroundColor: "white", zIndex: "-1", position: "relative", height: "80px",borderTop: "5px solid blue" }} >
        <h3 className="text-center">Spotlight</h3>
        <hr />
      </div> 
    </div>
  )
}
export default Homepage