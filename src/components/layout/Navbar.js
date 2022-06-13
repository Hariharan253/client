import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <Fragment>
      <div className='navbar'>
        <Link to='/'>
          <h1>Navbar</h1>
        </Link>
        <div className='navbar-links'>
          <p>
            <Link to='/developers'>developers</Link>
          </p>
          {"     "}
          <p>
            <Link to='/register'>Register</Link>
          </p>
          {"    "}
          <p>
            <Link to='/login'>LogIn</Link>
          </p>
          {"      "}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
