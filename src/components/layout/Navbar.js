import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Outlet } from "react-router-dom";
const Navbar = (props = null) => {
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
            {props !== null ? (
              <Link to='/register'>Register</Link>
            ) : (
              <Link to='/my-profile'>My Profile</Link>
            )}
          </p>
          {"    "}
          <p>
            <Link to='/login'>LogIn</Link>
          </p>
          {"      "}
          <p>{props === null && <Link to='/job-a'>Avalaible jobs</Link>}</p>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
