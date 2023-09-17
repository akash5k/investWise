import React from "react"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Navbar from "./components/Navbar/Navbar"
import AuthState from "./context/auth/AuthState"
import InvestmentState from "./context/investment/InvestmentState"

import AnimatedRoutes from "./components/AnimatedRoutes"

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
            {/* Find all routes in animatedRoutes */}
            <AnimatedRoutes/>
          </div>
        </Router>
      </InvestmentState>
    </AuthState>
  )
}

export default App
