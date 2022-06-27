import { EDIT_EDUCATION } from "./types";

export const editEducationWithId = (id) => (dispatch) => {
  const res = dispatch({
    type: EDIT_EDUCATION,
    payload: {
      id,
    },
  });
  console.log(res);
};
