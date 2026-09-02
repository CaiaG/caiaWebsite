import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import CGProjects from './pages/CGProjects.jsx';

import './App.css'

function App() {
  return (
    <div>

      <main>
        <Routes>
          
          <Route path="/" 
                 element={<Home />} 
          />
          <Route path="/CGProjects" element={<CGProjects />} />
          <Route path="*" element={<div>Custom 404 Page Content</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
