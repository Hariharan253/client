import { REGISTER_FAILURE, REGISTER_SUCCESS } from "./types";
import setAlert from "./alert";
const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    };

    try {
      const res = await fetch(
        "http://localhost:5000/api/users",
        requestOptions
      );
      const j = await res.json();
      console.log("Status ", res.status);
      console.log(j);
      if (res.status === 200) {
        console.log(j);
        const d = dispatch({
          type: REGISTER_SUCCESS,
          payload: j,
        });
        console.log(d);
      } else {
        const errors = j;
        console.log("err-1 ", errors.error[0]);
        if (errors) {
          errors.error.forEach((error) =>
            dispatch(setAlert(error.msg, "danger", 5))
          );
        }

        const d = dispatch({
          type: REGISTER_FAILURE,
        });
        console.log("REGISTER_FAILURE ", d);
      }
    } catch (err) {
      const errors = err.response.data.errors;
      console.log("err-1 ", errors);
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger", 5)));
      }

      // const d = dispatch({
      //   type: REGISTER_FAILURE,
      // });
      // console.log("Err ", d);
    }
  };
export default register;
