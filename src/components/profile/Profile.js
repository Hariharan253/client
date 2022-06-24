import { PropTypes } from "prop-types";
import React, { Fragment } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/profile.css";
import { Navigate, Link } from "react-router-dom";
const Profile = (props) => {
  const { profile } = props.profile;
  const onSubmit = () => {
    console.log("Entered edit-profile");
    return <Navigate to='/dashboard' replace={true} />;
  };
  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col col-md-12 col-sm-12 col-lg-12 text-center'>
            <h1 className='text-danger'>My Profile</h1>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col col-md-4 col-sm-12 col-lg-4 text-center'>
            <div className='profile rounded'>
              <p className='profile-heading text-center text-warning'>
                User Details
              </p>
              <div className='profile-body text-secondary'>
                <div>Name: {profile.user.name}</div>
                <div>User ID: {profile.user._id}</div>
              </div>
            </div>
          </div>
          <div className='col col-md-4 col-sm-12 col-lg-4 text-center'>
            <div className='profile rounded'>
              <p className='profile-heading text-center text-warning'>Skills</p>
              <div className='profile-body text-secondary'>
                {profile.skills.map((skill, index) => {
                  return (
                    <div key={index}>
                      <div>{`skill ${index + 1}: ${skill}`}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='text-center col col-lg-6'>
            <Link to='/edit-profile'>
              <button className='btn btn-sm btn-danger'>Edit Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

export default connect(mapStateToProps, null)(Profile);
