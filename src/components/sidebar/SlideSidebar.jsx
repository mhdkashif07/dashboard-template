//import useState hook to create menu collapse state
import React, { useState } from "react";
import jetalli from "../../assets/images/jetalijpg.jpg";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5"
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./slidesidebar.css";
import { Link } from "react-router-dom";
import ScrollToBottom from 'react-scroll-to-bottom'

const SlideSidebar = (props) => {
  const { collapse } = props;
  console.log(collapse);

  return (
    <>
      <div id="header">
        {/* <AppLayout /> */}
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={collapse} >
          <SidebarHeader>
            <div
              className="logotext"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* small and big change using menucollapse state */}
              {/* <p>{collapse ? "Logo" : "Big Logo"}</p> */}
              <img
                src={jetalli}
                alt="sidebar__logo"
                style={
                  collapse
                    ? {
                        width: "70px",
                        margin: "8px",
                      }
                    : { width: "140px", margin: "0" }
                }
              />
            </div>
            <div className="closemenu" onClick={props.menuIconClick}>
              {/* changing menu collapse icon on click */}
              {collapse ? <FiArrowRightCircle /> : <IoClose />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Dashboard
                <Link to="/dashboard" />
              </MenuItem>

              <MenuItem icon={<FaList />}>
                <SubMenu title="Products">
                  <MenuItem>
                    View Products
                    <Link to="/viewproducts" />
                  </MenuItem>
                  <MenuItem>
                    Add Product
                    <Link to="/addproduct" />
                  </MenuItem>
                </SubMenu>
              </MenuItem>

              {/* <MenuItem icon={<FaList />}>
                <SubMenu title="Categories">
                  <MenuItem>
                    View Categories
                    <Link to="/viewcategories" />
                  </MenuItem>
                  <MenuItem>
                    Add Category
                    <Link to="/addcategory" />
                  </MenuItem>
                </SubMenu>
              </MenuItem>

              <MenuItem icon={<FaList />}>
                <SubMenu title="SubCategories">
                  <MenuItem>
                    View SubCategories
                    <Link to="/viewsubcategories" />
                  </MenuItem>
                  <MenuItem>
                    Add SubCategory
                    <Link to="/addsubcategory" />
                  </MenuItem>
                </SubMenu>
              </MenuItem>

              <MenuItem icon={<FaList />}>
                <SubMenu title="Quantity Types">
                  <MenuItem>
                    View Quantity Types
                    <Link to="/viewquantity" />
                  </MenuItem>
                  <MenuItem>
                    Add Quantity Type
                    <Link to="/addquantitytype" />
                  </MenuItem>
                </SubMenu>
              </MenuItem>

              <MenuItem icon={<FaList />}>
                <SubMenu title="Branches">
                  <MenuItem>
                    View Branches
                    <Link to="/viewbranches" />
                  </MenuItem>
                  <MenuItem>
                    Add Branch
                    <Link to="/addbranch" />
                  </MenuItem>
                </SubMenu>
              </MenuItem>

              <MenuItem icon={<FaList />}>
                <SubMenu title="Banners">
                  <MenuItem>
                    View Banners
                    <Link to="/viewbanners" />
                  </MenuItem>
                  <MenuItem>
                    Add Banner
                    <Link to="/addbanner" />
                  </MenuItem>
                </SubMenu>
              </MenuItem>

              <MenuItem icon={<FaList />}>
                <SubMenu title="Discounts">
                  <MenuItem>
                    View Discounts
                    <Link to="/viewdiscounts" />
                  </MenuItem>
                  <MenuItem>
                    Add Discount
                    <Link to="/adddiscount" />
                  </MenuItem>
                </SubMenu>
              </MenuItem>

              <MenuItem icon={<FaList />}>
                <SubMenu title="Shipping">
                  <MenuItem>
                    View Shipping
                    <Link to="/viewshipping" />
                  </MenuItem>
                  <MenuItem>
                    Add Shipping
                    <Link to="/addshipping" />
                  </MenuItem>
                </SubMenu>
              </MenuItem> */}

              <MenuItem icon={<FaRegHeart />}>
                View Users
                <Link to="/viewusers" />
              </MenuItem>

              <MenuItem icon={<FaRegHeart />}>
                Add Employee
                <Link to="/addemployee" />
              </MenuItem>
            </Menu>

          </SidebarContent>

          

          {/* <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter> */}
        </ProSidebar>
      </div>
    </>
  );
};

export default SlideSidebar;
