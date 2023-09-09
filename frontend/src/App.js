import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/hero"
import SignIn from "./components/SignIn/SignIn" // Updated import statement
import AuthState from "./context/auth/AuthState"
import Dashboard from "./pages/Dashboard"
import Private from "./components/Private"
import { Slide, ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <AuthState>
      <Router>
        <div className="App">
          <Navbar />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Define your routes using the Routes component */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route
              path="/dashboard"
              element={
                <Private>
                  <Dashboard />
                </Private>
              }
            />
            {/* Updated component name */}
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </Router>
    </AuthState>
  )
}

export default App
