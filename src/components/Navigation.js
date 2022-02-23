import React from 'react';
import { NavLink } from 'react-router-dom';
import 
{
    MdVideocam,
    MdOutlineHome,
    MdNotificationsNone,
    MdOutlineChat,
    MdPeopleOutline
} from "react-icons/md";


const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink exact to="/" activeClassName='nav-active'>
                <MdOutlineHome />
            </NavLink>
            <NavLink exact to="/callvideo" activeClassName='nav-active'>
                <MdVideocam />
            </NavLink>
            <NavLink exact to="/notification" activeClassName='nav-active'>
                <MdNotificationsNone />
            </NavLink>
            <NavLink exact to="/message" activeClassName='nav-active'>
                <MdOutlineChat />
            </NavLink>
            <NavLink exact to="/contact" activeClassName='nav-active'>
                <MdPeopleOutline />
            </NavLink>
           
            
        </div>
    );
};

export default Navigation;