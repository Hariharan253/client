import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/profile.css";
import { addEducation } from "../../../action/profile";
const AddEducation = ({ alert, profile, addEducation }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: "",
    description: "",
  });
  const navigate = useNavigate();
  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;
  console.log("educationFormData:", formData);
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const onSubmit = async (e) => {
    console.log("Education Form Submitted");
    e.preventDefault();
    const res = await addEducation(formData);
    //console.log("Education res:", res);
    if (res === undefined) {
      navigate("/dashboard");
    }
  };

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col col-md-12 col-lg-12 col-sm-12 text-center'>
            <h1 className='text-danger'>Add Education</h1>
          </div>

          <div className='col col-md-12 col-lg-12 col-sm-12 mt-4'>
            <h5 className='text-dark'>Tell Us About Your Education</h5>
            <h6 className='text-dark'>* = Required</h6>
          </div>
          <div className='col col-md-12 col-lg-12 col-sm-12 mt-4'>
            <div className='row'>
              <div className='col col-md-12 col-lg-12 col-sm-12'>
                <div className='form' onSubmit={(e) => onSubmit(e)}>
                  <div className='form-group'>
                    <input
                      style={{ height: "30px" }}
                      type='text'
                      className='form-width'
                      placeholder='* School or BootCamp'
                      name='school'
                      value={school}
                      onChange={(e) => onChange(e)}
                      required={true}
                    />
                  </div>
                  <div className='form-group mt-3'>
                    <input
                      style={{ height: "30px" }}
                      className='form-width'
                      type='text'
                      placeholder='* Degree or Certificate'
                      name='degree'
                      value={degree}
                      onChange={(e) => onChange(e)}
                      required={true}
                    />
                  </div>
                  <div className='form-group mt-3'>
                    <input
                      style={{ height: "30px" }}
                      className='form-width'
                      type='text'
                      placeholder='* Field Of Study'
                      name='fieldofstudy'
                      value={fieldofstudy}
                      onChange={(e) => onChange(e)}
                      required={true}
                    />
                  </div>
                  <div className='form-group mt-3'>
                    <p>
                      <input
                        style={{ height: "30px" }}
                        type='checkbox'
                        name='Current'
                        checked={current}
                        value={current}
                        onChange={(e) => {
                          setFormData({ ...formData, current: !current });
                          toggleDisabled(!toDateDisabled);
                        }}
                      />{" "}
                      Current
                    </p>
                  </div>
                  <div className='form-group mt-3'>
                    <h6>* From</h6>
                    <input
                      style={{ height: "30px" }}
                      className='form-width'
                      type='date'
                      placeholder='* From'
                      name='from'
                      value={from}
                      onChange={(e) => onChange(e)}
                      required={true}
                    />
                  </div>
                  <div className='form-group mt-3'>
                    <h6 className='text-dark'>To</h6>
                    <input
                      style={{ height: "30px" }}
                      type='date'
                      className='form-width'
                      placeholder='* To'
                      name='to'
                      value={to}
                      onChange={(e) => onChange(e)}
                      disabled={toDateDisabled ? "disabled" : ""}
                    />
                  </div>
                  <div className='form-group mt-3'>
                    <textarea
                      rows='5'
                      cols='100'
                      placeholder='Description'
                      value={description}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className='mt-3 mb-4 form-group'>
                    <button
                      type='submit'
                      className='btn btn-sm btn-primary margin-right'
                      onClick={(e) => onSubmit(e)}
                    >
                      Submit
                    </button>
                    <Link to='/dashboard'>
                      <button className='btn btn-sm btn-warning'>
                        Go Back
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    alert: state.alert,
    profile: state.profile,
  };
};

AddEducation.propTypes = {
  alert: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  addEducation: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { addEducation })(AddEducation);
