import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user,{

    });
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products",{
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "origin-list",
      },
    });
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch,token) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`,{
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "origin-list",
      },
    });
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch,token) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product,{
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "origin-list",
      },
    });
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
