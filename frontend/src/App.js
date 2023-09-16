import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/hero"
import SignIn from "./components/SignIn/SignIn" 
import SignUp from "./components/SignUp/SignUp"
import AuthState from "./context/auth/AuthState"
import Dashboard from "./pages/Dashboard"
import Private from "./components/Private"

function App() {
  return (
    <AuthState>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={
                <Private>
                  <Dashboard />
                </Private>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthState>
  )
}

export default App
