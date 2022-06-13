import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password2: "",
  });
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("User Logged In");
  };
  return (
    <Fragment>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Enter Email'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>

        <div className='form-group'>
          <input
            type='password'
            placeholder='Enter Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>

        <div className='form-group'>
          <button type='submit' className='btn btn-sm btn-primary'>
            Submit
          </button>
          <p>
            Don't Have an Account? <Link to='/register'>Sign Up</Link>
          </p>
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
