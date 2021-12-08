import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from "./component/views/MainPage/MainPage";
import LoginPage from "./component/views/LoginPage/LoginPage";
import RegisterPage from "./component/views/RegisterPage/RegisterPage";
import "./static/fonts/font.css";
import Auth from './hoc/auth';

function App () {
  return (
      <Router>
        <div>
        <Routes>
          <Route exact path="/main" element={Auth(MainPage, true)} /> 
          <Route exact path="/login" element={Auth(LoginPage , false)}>
          </Route>
          <Route exact path="/register" element={Auth(RegisterPage , false)}>
          </Route>
        </Routes>
        </div>
      </Router>
  );
}

export default App;
