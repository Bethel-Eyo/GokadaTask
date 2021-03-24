import { GET_CAT_FACTS } from "../types";

const initialState = {
  catFacts: null,
};
const catReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_CAT_FACTS:
      return {
        ...state,
        catFacts: payload,
      };
    default:
      return state;
  }
};

export default catReducer;
