import { EDIT_EDUCATION, REMOVE_EDUCATION } from "../action/types";

const initialState = {
  educationId: null,
  experienceId: null,
};

const edit = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case EDIT_EDUCATION:
      return {
        ...state,
        educationId: payload.id,
      };
    case REMOVE_EDUCATION:
      return {
        ...state,
        educationId: null,
      };
    default:
      return state;
  }
};

export default edit;
