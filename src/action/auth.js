import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
} from "./types";
import setAlert from "./alert";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) setAuthToken(localStorage.token);

  try {
    const res = await axios.get("http://localhost:5000/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    };

    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const data = JSON.stringify({ name, email, password });
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users",
        data,
        config
      );
      // const j = await res.json();
      // console.log("Status ", res.status);
      // console.log(j);

      // console.log(j);
      const d = dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      console.log(d);
      //else {
      //   const errors = j;
      //   console.log("err-1 ", errors.error[0]);
      //   if (errors) {
      //     errors.error.forEach((error) =>
      //       dispatch(setAlert(error.msg, "danger", 5))
      //     );
      //   }

      //   const d = dispatch({
      //     type: REGISTER_FAILURE,
      //   });
      //   console.log("REGISTER_FAILURE ", d);
      // }
    } catch (err) {
      const errors = err.response.data.error;
      console.log("err-1 ", errors);
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger", 5)));
      }

      const d = dispatch({
        type: REGISTER_FAILURE,
      });
      console.log("Err ", d);
    }
  };
