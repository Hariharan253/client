import "./App.css";
import React, { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Developers from "./components/layout/Developer";
import Register from "./auth/Register";
import Login from "./auth/Login";
//import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./action/auth";
import Dashboard from "./components/dashboard/Dashboard";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import Landing from "./components/layout/Landing";
import Profile from "./components/profile/Profile";
import EditProfile from "./components/profile/EditProfile";
import CreateProfile from "./components/profile/CreateProfile";
import "bootstrap/dist/css/bootstrap.css";
import AddEducation from "./components/profile/AddEducation";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = (props) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  console.log("rerendering");
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route index element={<Landing />} />
        <Route exact path='/developers' element={<Developers />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route
          path='/dashboard'
          element={<ProtectedRoute component={Dashboard} />}
        />
        <Route
          path='/profile'
          element={<ProtectedRoute component={Profile} />}
        />
        <Route
          path='/edit-profile'
          element={<ProtectedRoute component={EditProfile} />}
        />
        <Route
          path='/create-profile'
          element={<ProtectedRoute component={CreateProfile} />}
        />
        <Route
          path='/add-education'
          element={<ProtectedRoute component={AddEducation} />}
        />
        {/* <PrivateRoute component={Dashboard} /> */}
        {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
        {/* <Route path='/' element={<Navbar />}> */}
        {/* </Route> */}
      </Routes>
    </Fragment>
  );
};

export default App;
