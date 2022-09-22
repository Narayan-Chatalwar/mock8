import axios from "axios";
import * as types from "./actionTypes";

export const getData = (params) => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });
  axios
    .get("https://mock7testapi.herokuapp.com/appData", params)
    .then((r) => dispatch({ type: types.GET_DATA_SUCCESS, payload: r.data }))
    .then((e) => dispatch({ type: types.GET_DATA_FAIALURE }));
};




export const addData = (params) => (dispatch) => {
  dispatch({ type: types.ADD_DATA_REQUEST });
  return axios
    .post("https://mock7testapi.herokuapp.com/appData", params)
    .then((r) => dispatch({ type: types.ADD_DATA_SUCCESS }))
    .then((r) => getData())
    .then((e) => dispatch({ type: types.ADD_DATA_FAIALURE }));
};




export const deleteData = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_DATA_REQUEST });
  return axios
    .delete(`https://mock7testapi.herokuapp.com/appData/${id}`)
    .then((r) => dispatch({ type: types.DELETE_DATA_SUCCESS}))
    .then((e) => dispatch({ type: types.DELETE_DATA_FAIALURE }));
};
