import React, { useState } from "react";
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
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function App() {
  const user = useSelector(selectUser)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                ,{isMenuOpen && <Menu />},
                <HeaderBlock />
              </>
            }
          />
          <Route path="/login" element={
            <>
            {user ? <Navigate replace to='/teslaaccount'/> : <Login />},
            <Login />
            </>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
