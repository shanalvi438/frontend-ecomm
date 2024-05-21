import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import Promotion from './pages/Promotion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/Store' element={<Store />}/>
        <Route path='/Promotion' element={<Promotion />}/>
      </Routes>
    </BrowserRouter>
  );  
}

export default App;
