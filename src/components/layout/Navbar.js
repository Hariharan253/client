import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../action/auth";

const Navbar = (props) => {
  const guestLinks = (
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
  );
  const authLinks = (
    <div>
      <a onClick={logout()}>LogOut</a>
    </div>
  );
  const { loading, isAuthenticated } = props.auth;
  return (
    <Fragment>
      <div className='navbar'>
        <Link to='/'>
          <h1>Navbar</h1>
        </Link>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </div>
      <Outlet />
    </Fragment>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { logout })(Navbar);
