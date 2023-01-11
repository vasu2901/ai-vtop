import React from 'react'
import Sidebar from './Sidebar'
const Homepage = () => {
  return (
    <div>
      <Sidebar />
      <div className="innerbody" style={{ marginTop: "10px", marginLeft: "100px", backgroundColor: "white", zIndex: "-1", position: "relative", height: "80px",borderTop: "5px solid blue" }} >
        <h3 className="text-center">Spotlight</h3>
        <hr />
      </div> 
    </div>
  )
}

export default Homepage