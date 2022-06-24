import axios from "axios";
import { CLEAR_PROFILE, GET_PROFILE, PROFILE_ERROR } from "./types";
import setAlert from "./alert";
import { useNavigate } from "react-router-dom";

export const getCurrentProfile = () => async (dispatch) => {
  try {
    console.log("Entered getCurrentProfile");
    const res = await axios.get("http://localhost:5000/api/profile/me");
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//create or edit a Profile

export const createProfile =
  (formData, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      console.log("formData:", formData);

      const res = await axios.post(
        "http://localhost:5000/api/profile",
        formData,
        config
      );

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
      dispatch(setAlert(edit ? "Profile Updated" : "Profile Created"));
      // const navigate = useNavigate();
      // navigate("/dashboard");
      // if (!edit) {
      //
      // }
    } catch (err) {
      const errors = err.response.data.errors;
      console.log("err-1 ", errors);
      if (errors) {
        errors.forEach((error, index) =>
          dispatch(setAlert(error.msg, "danger", index))
        );
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
      return errors;
    }
  };

//Delete the current User Profile
export const deleteProfile = () => async (dispatch) => {
  console.log("Entered deleteProfile");
  // const navigate = useNavigate();
  try {
    const res = await axios.delete("http://localhost:5000/api/profile");
    dispatch({
      type: CLEAR_PROFILE,
    });
    // dispatch(setAlert(res));
    console.log("RESPONSE FOR DEL PROFILE:", res);
  } catch (err) {
    const errors = err.response.data.errors;
    console.log("err-1 ", errors);

    if (errors) {
      console.log("Entered Catch");
      errors.forEach((error, index) =>
        dispatch(setAlert(error.msg, "danger", index))
      );
    }
  }
  // navigate("/dashboard");
};
