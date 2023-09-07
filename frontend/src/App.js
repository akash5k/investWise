import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/hero';
import SignIn from './components/SignIn/SignIn'; // Updated import statement

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* Define your routes using the Routes component */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signIn" element={<SignIn />} /> {/* Updated component name */}
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
