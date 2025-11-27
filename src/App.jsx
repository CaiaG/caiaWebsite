import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home.jsx';

import './App.css'

function App() {
  return (
    <>
      <main>
        <Routes>
          
          <Route path="/" 
                 element={<Home />} 
          />
          
          <Route path="*" element={<div>Custom 404 Page Content</div>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
