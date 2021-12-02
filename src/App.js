import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Main from './Screens/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
