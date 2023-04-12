import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import HeaderBlock from "./Components/Header/HeaderBlock";
import Login from "./Components/Login/Login";

function App() {
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
            <Login/>
            </>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
