import { TEMP } from "../actions";

const initialState = {};

const reducer = (state = initialState, action) => {
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

export default reducer;
