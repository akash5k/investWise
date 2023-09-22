import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Hero from "./Hero/hero";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Private from "./Private";

import AnimateHolder from "./AnimateHolder";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/signIn" element={<AnimateHolder><SignIn /></AnimateHolder>} />        
        <Route path="/signUp" element={<AnimateHolder><SignUp /></AnimateHolder>} />
        <Route path="/about" element={<AnimateHolder><About /></AnimateHolder>} />
        <Route path="/contact" element={<AnimateHolder><Contact /></AnimateHolder>} />
        <Route
          path="/dashboard"
          element={<Private component={<AnimateHolder><Dashboard /></AnimateHolder>} />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
