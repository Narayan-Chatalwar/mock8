import React from "react";
// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loadData } from "../utils/LocalStorage";

const ReqAuth = ({ children }) => {
  // const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  
const isAuth=loadData("admin")||false;

  if (!isAuth) {
    return <Navigate to="/login" replace="true" />;
  }

  return children;
};

export default ReqAuth;