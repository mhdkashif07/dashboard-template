import React from 'react'
import './topnav.css'
import { Link } from 'react-router-dom'
import notifications from '../../assets/JsonData/notification.json'
import user_image from '../../assets/images/tuat.png'
import user_menu from '../../assets/JsonData/user_menus.json'
import SearchIcon from "@mui/icons-material/Search";
import "./topnav.css";
import { Dropdown, ThemeMenu }  from "../index";
import PrimaryButton from '../buttons/PrimaryButton'
import { useNavigate } from "react-router-dom"
import { SettingsOutlined } from '@mui/icons-material'

const curr_user = {
    display_name: 'Dex coder',
    image: user_image
}

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu =(item, index) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const Topnav = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        
        localStorage.removeItem('isAuthenticated',true)
        navigate('/login')
        sessionStorage.removeItem("accessJWT")
      }


    //   setTimeout(() => {
    //         handleLogout()
    // }, 10000);


    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='Search here...' />
                <SearchIcon />
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    {/* <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    /> */}
                    <a href="#" onClick={handleLogout}>
                        <div style={{ width: "100px" }}>
                        <PrimaryButton text="Logout" />
                        </div>
                        </a>
                </div>
                <div className="topnav__right-item">
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                    {/* dropdown here */}
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu/>
                </div> 
            </div>
        </div>
    )
}

export default Topnav
