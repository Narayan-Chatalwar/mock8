import React from 'react';
import { Route, Routes} from "react-router-dom";
import Admin from '../Pages/Admin';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import User from "../Pages/User";
import ReqAuth from "./ReqAuth";
import ReqAuthuser from "./ReqAuthuser";

import UserLogin from "../Pages/UserLogin";




const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/admin" element={<ReqAuth><Admin/></ReqAuth>}/>
      <Route path="/user" element={<ReqAuthuser><User/></ReqAuthuser>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/userlogin" element={<UserLogin/>} />
      <Route path="/register"element={<Register/>}/>
      <Route path="/..../:id" element={""} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  )
}

export default AllRoutes;
