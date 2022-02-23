import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdVideocam,
  MdOutlineHome,
  MdNotificationsNone,
  MdOutlineChat,
  MdPeopleOutline,
} from "react-icons/md";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src="./img/logo192.png" alt="logo" className="navigation__logo" />
      <ul className="navigation__links">
        <li className="navigation__link">
          <NavLink exact to="/" activeClassName="nav-active">
            <MdOutlineHome />
          </NavLink>
        </li>
        <li className="navigation__link">
          <NavLink
            exact
            to="/callvideo"
            activeClassName="navigation__link--active"
          >
            <MdVideocam />
          </NavLink>
        </li>
        <li className="navigation__link">
          <NavLink
            exact
            to="/notification"
            activeClassName="navigation__link--active"
          >
            <MdNotificationsNone />
          </NavLink>
        </li>
        <li className="navigation__link">
          <NavLink
            exact
            to="/message"
            activeClassName="navigation__link--active"
          >
            <MdOutlineChat />
          </NavLink>
        </li>
        <li className="navigation__link">
          <NavLink
            exact
            to="/contact"
            activeClassName="navigation__link--active"
          >
            <MdPeopleOutline />
          </NavLink>
        </li>
      </ul>
      <img
        src="./img/profile.png"
        alt="profil"
        className="navigation__profil"
      />
    </div>
  );
};

export default Navigation;
