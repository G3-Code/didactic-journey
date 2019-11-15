import { TEMP } from "../actions";

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
  productTypes: ["Convenience", "Shopping", "Speciality", "Unsought"]
};

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
