import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { TopNav } from "../index"
import SlideSidebar from "../sidebar/SlideSidebar";


const AppLayout = () => {
    const [collapse, setCollapse] = useState(false)
    console.log(collapse);
  return (
    
    <div>
      <SlideSidebar collapse={collapse} />
      <div className="layout__content" style={collapse? { paddingLeft: '250px' } : {paddingLeft: '70px'}}>
        <TopNav />
        <div className="layout__content-main">
          <Outlet />
        </div>
      </div>
    </div>
  )
};


  export default AppLayout