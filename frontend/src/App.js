import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/hero"
import SignIn from "./components/SignIn/SignIn" // Updated import statement
import AuthState from "./context/auth/AuthState"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <AuthState>
      <Router>
        <div className="App">
          <Navbar />
          {/* Define your routes using the Routes component */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Updated component name */}
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </Router>
    </AuthState>
  )
}

export default App
