import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/Home';
import Diabetes from './diabetes';

const App = () => {
  return (
    <div className="h-screen ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/detect" element={<Diabetes/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
