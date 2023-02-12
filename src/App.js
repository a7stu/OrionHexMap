import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../src/components/Navbar';
import LeftSide from './components/LeftSide';
import Widgets from './components/Widgets';
import Map from './components/Map';
import LHS from './components/LHS';
import RHS from './components/RHS';
import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Navbar />}></Route>

          <Route path="/Overview" element={
            <>
            <Navbar />
            <LeftSide />
            <Widgets />
            <Map />
            </>
          }></Route>

          <Route path="/Analytics" element={
            <>
            <Navbar />
            <LHS />
            <RHS />
            </>
          }></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
