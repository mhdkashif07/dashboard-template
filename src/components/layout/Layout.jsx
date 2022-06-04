import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Sidebar, TopNav} from '../index';
import Routes from '../../routes/Routes'
// import { useSelector, useDispatch } from 'react-redux';
// import ThemeAction from '../../redux/actions/ThemeAction';
import './layout.css';
const Layout = () => {

    // const themeReducer = useSelector(state => state.ThemeReducer);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

    //     const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

    //     dispatch(ThemeAction.setMode(themeClass))
    //     dispatch(ThemeAction.setColor(colorClass))
    // },[])
    return (
        <Router>
            <Route render={(props) => (
                // className={`layout ${themeReducer.mode} ${themeReducer.color}`}
                <div >
                    <Sidebar {...props} />
                    <div className="layout__content">
                        <TopNav />
                        <div className="layout__content-main">
                            <Routes />
                        </div>
                    </div>
                </div>
            )}>

            </Route>
        </Router>
    )
}

export default Layout
