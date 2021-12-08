import {BrowserRouter as Redirect, Router, Route, Routes} from "react-router-dom";
import MainPage from "./component/views/MainPage/MainPage";
import LoginPage from "./component/views/LoginPage/LoginPage";
import RegisterPage from "./component/views/RegisterPage/RegisterPage";
import "./static/fonts/font.css";

function App () {
  let isAuthorized = sessionStorage.getItem("isAuthorized"); // 
  return (
      <Router>
        <div>
        {!isAuthorized ? <Redirect to="/login" /> : <Redirect to="/main" />}
          <Routes>
              <Route exact path = "/login" element={<LoginPage/>}/>
              <Route exact path = "/main" element={<MainPage/>}/>
              <Route exact path = "/register" element={<RegisterPage/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
