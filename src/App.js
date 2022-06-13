import "./App.css";
import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Developers from "./components/layout/Developer";
import Register from "./auth/Register";
import Login from "./auth/Login";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/developers' element={<Developers />} />
          </Route>

          <Route path='/' element={<Navbar />}>
            <Route path='/register' element={<Register />} />
          </Route>

          <Route path='/' element={<Navbar />}>
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </Fragment>
    </Provider>
  );
};

export default App;
