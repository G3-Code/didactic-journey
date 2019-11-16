import axios from "axios";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_START = "ADD_PRODUCT_START";
export const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";

const APIURL = "http://localhost:4000/";
export const addProduct = product => {
  return async dispatch => {
    try {
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: ""
      });

      const products = await axios
        .post(`${APIURL}product`, product)
        .then(res => res.data);
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: products
      });
    } catch (error) {
      dispatch({
        type: ADD_PRODUCT_FAILURE,
        payload: error
      });
    }
  };
};
