import axios from "axios";
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  GET_CART,
  UPDATE_CART,
} from "./actionTypes";
const baseURL = process.env.REACT_APP_URL;
let token = localStorage.getItem("token");

export const get_cart = () => async (dispatch) => {
  let res = await axios.get(`${baseURL}/cart`, {
    headers: {
      Authorization: token,
    },
  });
  console.log(res);
  dispatch({ type: GET_CART, payload: res.data.data });
};

export const add_to_cart = (product) => async (dispatch) => {
  try {
    let res = await axios.post(`${baseURL}/cart`, product, {
      headers: {
        Authorization: token,
      },
    });
    dispatch({ type: ADD_TO_CART, payload: res.data });
  } catch (err) {
    console.log(err.response.data);
  }
};

export const update_cart =
  ({ id, a }) =>
  async (dispatch) => {
    console.log(id, a);
    let res = await axios.patch(`${baseURL}/cart/${id}`, { count: a });
    dispatch({ type: UPDATE_CART, payload: res.data });
  };

export const delete_from_cart = (id) => async (dispatch) => {
  let res = await axios.delete(`${baseURL}/cart/${id}`);
  dispatch({ type: DELETE_FROM_CART, payload: id });
};
