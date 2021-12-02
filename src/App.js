import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Main from './Screens/Main';
import Admin from './Screens/Admin';
import Log from './Screens/Log'
import Teacher from './Screens/Teacher'
import Footer from './components/Main/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/log" element={<Log/>} />
          <Route path="/teacher" element={<Teacher/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
