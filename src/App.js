import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import HeaderBlock from './Components/Header/HeaderBlock';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>
    <div className="App">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      {isMenuOpen && <Menu/>}
      <HeaderBlock/>
    </div>
    </Router>
  );
}

export default App;