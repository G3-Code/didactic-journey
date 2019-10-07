import { TEMP } from "../actions";

const initialState = {};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEMP: {
      console.log("temp");
      return state;
    }
    default: {
      return state;
    }
  }
};
