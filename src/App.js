import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import React  from 'react';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Navigate to="home"/>}/>
          <Route path="/:path" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
