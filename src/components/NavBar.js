import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  background: "yellow",
};

function NavBar() {
  return (
    <div className="navbar" style={style.nav}>
      <ul style={style.list}>
        <li>
          <NavLink to="/" exact activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" exact activeStyle={activeStyle}>
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/directors" exact activeStyle={activeStyle}>
            Directors
          </NavLink>
        </li>
        <li>
          <NavLink to="/actors" exact activeStyle={activeStyle}>
            Actors
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

const style = {
  list: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    listStyle: "none",
  },
  nav: {
    width: "70%",
  },
};

export default NavBar;