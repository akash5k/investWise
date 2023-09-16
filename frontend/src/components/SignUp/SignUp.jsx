import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { authbanner } from "../../assets";
import { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import { useNavigate } from "react-router-dom";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const SignUp = () => {
  const authContext = useContext(AuthContext);
  const { register, error, isAuthenticated } = authContext;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { name, email, password, confirmPassword } = user;

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all fields", "danger");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="flex h-[90vh] ">      
      {/* Right side with the sign-up form */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md px-8 py-6 ">
          <h3 className="text-2xl font-bold text-center">Create an Account</h3>
          <form onSubmit={onSubmit}>
            <div className="mt-4">
              <div>
                <input
                  className="w-full px-4 py-2 mt-2 border rounded-xl border-black focus:outline-none focus:ring-1 focus:ring-blue-600"
                  type="text"
                  name="name"
                  value={name}
                  onChange={onChange}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="mt-4">
                <input
                  className="w-full px-4 py-2 mt-2 border rounded-xl border-black focus:outline-none focus:ring-1 focus:ring-blue-600"
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mt-4">
                <input
                  className="w-full px-4 py-2 mt-2 border rounded-xl border-black focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mt-4">
                <input
                  className="w-full px-4 py-2 mt-2 border rounded-xl border-black focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={onChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 w-full mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Sign Up
              </button>
              <span className="flex items-center justify-center space-x-2 pt-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-400">or sign up with</span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              <button className="flex items-center justify-center px-6 py-2 w-full mt-4 bg-gray-200 rounded-lg hover:bg-gray-700 hover:text-white">
                <FcGoogle className="mr-2" />
                <span>Google</span>
              </button>
              <div className="flex items-center justify-center space-x-2 pt-2">
                <span className="text-sm font-normal text-gray-500">
                  Already a member?{" "}
                </span>
                <Link
                  to="/signin"
                  className="text-xs text-blue-600 hover:underline"
                >
                  Sign in now
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Right side with the image */}
      <div
        className="hidden lg:block bg-cover bg-center w-1/2"
        style={{ backgroundImage: `url(${authbanner})` }}
      ></div>
      <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-5xl font-bold uppercase tracking-[0.4rem]">
          Investwise
        </h1>
        <div className="flex items-center justify-center space-x-4 mt-4 gap-4">
          <FaFacebook className="text-3xl" />
          <FaInstagram className="text-3xl" />
          <FaTwitter className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
