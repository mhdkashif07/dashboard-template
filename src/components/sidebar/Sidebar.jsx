import React, { useState } from 'react';
import sidebar__items from '../../assets/JsonData/sidebar_routes.json';
import logo from '../../assets/images/jetalijpg.jpg';
import { useLocation } from "react-router-dom";


import './sidebar.css';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [value, setValue] = useState(0);

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={logo} alt="company logo" />
            </div>
            {
                sidebar__items.map((item, index) => (
                    <NavLink to={item.route} key={index} onClick={() => setValue(index)}>
                        <div className={`sidebar__item-inner ${index === value && 'active'}`} >
                        <div className="sidebar__item">
                        <i className={item.icon}></i>
                        <span className="display__name">{item.display_name}</span>
                        </div>
                    </div>
                    </NavLink>
                   
                ))
            }            
        </div>
    )
}

export default Sidebar
