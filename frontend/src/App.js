import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/hero"
import SignIn from "./components/SignIn/SignIn"
import SignUp from "./components/SignUp/SignUp"
import AuthState from "./context/auth/AuthState"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import Private from "./components/Private"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import InvestmentState from "./context/investment/InvestmentState"
import Contact from "./pages/Contact"


function App() {
  return (
    <AuthState>
      <InvestmentState>
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
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/dashboard"
                element={<Private component={<Dashboard />} />}                
              />
              {/* Updated component name */}
              {/* Add other routes as needed */}
            </Routes>
          </div>
        </Router>
      </InvestmentState>
    </AuthState>
  )
}

export default App
