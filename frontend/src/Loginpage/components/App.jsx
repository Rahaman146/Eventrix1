import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from '../../Homepage/components_Homepage/Home';
import Signin from './Signin';
import Councilspage from '../../Councilspage/components_Councilspage/Councilspage';
import '../../Councilspage/styles_Councilspage/styles_councilspage.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/councils" element={<Councilspage />} />
      </Routes>
    </div>
  );
}

export default App;
