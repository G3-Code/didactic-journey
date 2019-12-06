import {
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_START,
  ADD_PRODUCT_FAILURE
} from "../actions";

const initialState = {
  product: {
    productName: "",
    productType: "",
    effStartDate: "",
    effEndDate: "",
    productCategory: "",
    uploadProductFile: "",
    uploadProductSpec: ""
  },
  productTypes: ["Convenience", "Shopping", "Speciality", "Unsought"],
  products: [],
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_START: {
      return {
        ...state,
        products: action.payload
      };
    }
    case ADD_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: action.payload
      };
    }
    case ADD_PRODUCT_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
