import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import HeaderBlock from "./Components/Header/HeaderBlock";
import Login from "./Components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Signup from "./Components/Signup/Signup";
import Teslaaccount from "./Components/Tesla Account/Teslaaccount";
import { auth } from "./Components/Firebase/Firebase";

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatchEvent(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        }))
      } else {
        dispatch(logout())
      }
    })
  },[dispatch])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                ,{isMenuOpen && <Menu />},
                <HeaderBlock />
              </>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <>{user ? <Navigate replace to="/teslaaccount" /> : <Login />}</>
            }
          />
          <Route
            exact
            path="signup"
            element={
              <>
                <Signup />
              </>
            }
          />
          <Route
            exact
            path="/teslaaccount"
            element={
              <>{!user ? <Navigate replace to="/login" /> :
               (
               <><Teslaaccount isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
               {isMenuOpen && <Menu /> }</>)}</>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
