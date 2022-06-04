import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter,
  Redirect,
  Routes,
  Navigate,
  Outlet,
  HashRouter,
} from "react-router-dom";
import { ToastContainer } from "react-toastify"
import {
  Dashboard,
  Customers,
  AddProduct,
  LoginPage,
  ViewProducts,
  EditProduct,
} from "../pages/index";
import "../components/layout/layout.css";
import ProtectedRoutes from "../components/protectedroute/ProtectedRoute";
import PublicRoutes from "../components/protectedroute/PublicRoutes";
import SlideSidebar  from "../components/sidebar/SlideSidebar"
import {TopNav} from "../components/index";
//import AppLayout from "../components/layout/AppLayout";
//const lazyProducts =  React.lazy(() => import('../pages/ViewProducts'))

import { useSelector, useDispatch } from 'react-redux';
import ThemeAction from '../redux/actions/ThemeAction';
const RoutesFile = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  console.log(menuCollapse);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse? setMenuCollapse(false) : setMenuCollapse(true)
  }

  const themeReducer = useSelector(state => state.rootReducer);
  const dispatch = useDispatch();

  useEffect(() => {
      const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

      const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

      dispatch(ThemeAction.setMode(themeClass))
      dispatch(ThemeAction.setColor(colorClass))
  },[])
  
  const AppLayout = () => {
  return (
    <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
    <SlideSidebar collapse={menuCollapse} menuIconClick={menuIconClick} />
    <div  className="layout__content" style={!menuCollapse? { paddingLeft: '260px' } : {paddingLeft: '70px'}} >
      <TopNav />
      <div className="layout__content-main">
        <Outlet />
      </div>
    </div>
  </div>
  )
};



 
  return (
    <HashRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="/customers" element={<Customers />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/viewproducts" element={<ViewProducts />  } />
            <Route path="/editproduct/:id" element={<EditProduct />} />
          </Route>
        </Route>

        <Route path="login" element={<PublicRoutes />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default RoutesFile;
