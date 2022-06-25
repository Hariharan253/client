import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import auth from "../../../reducers/auth";
import { PropTypes } from "prop-types";
import "../../../styles/profile.css";
import { Link, useNavigate } from "react-router-dom";
import { deleteEducation } from "../../../action/profile";
import Alert from "../../../auth/Alert";
import axios from "axios";
import { UPDATE_PROFILE } from "../../../action/types";
const ViewEducation = ({ profile: { profile, loading }, deleteEducation }) => {
  console.log(profile);
  const navigate = useNavigate();
  const onClickDelete = async (e, id) => {
    // e.persist();
    console.log("edu:", e, id);
    const res = await deleteEducation(id);

    console.log(res);
    //console.log("DEL RES:", res);
    if (res === undefined) {
      //   navigate("/dashboard");
    }
  };
  useEffect(() => {}, [loading]);

  return (
    <Fragment>
      <Alert />
      {profile.education.length > 0 ? (
        <Fragment>
          <h1 className='text-danger text-center'>View Education</h1>
          <div className='container'>
            <div className='row'>
              {profile.education.map((edu, index) => {
                return (
                  <Fragment key={index}>
                    <div className='col col-sm-12 col-lg-4 col-md-4'>
                      <div className='profile rounded'>
                        <p className='profile-heading text-center text-warning'>
                          Education: {`${index + 1}`}
                        </p>
                        <div className='profile-body text-secondary text-center'>
                          ID: {edu._id}
                        </div>
                        <div className='profile-body text-secondary text-center mt-2'>
                          <button className='btn btn-sm btn-warning margin-right'>
                            Edit
                          </button>

                          <button
                            className='btn btn-sm btn-danger'
                            onClick={(e) => onClickDelete(e, edu._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className='container'>
            <h4 className='text-center text-danger'>
              No Education Field Availabale Want To Create One Click Here{" "}
              <Link to='/add-education'>Click</Link>
            </h4>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

ViewEducation.propTypes = {
  profile: PropTypes.object.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

export default connect(mapStateToProps, { deleteEducation })(ViewEducation);
