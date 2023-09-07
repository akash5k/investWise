import React from "react";
import { FcGoogle } from "react-icons/fc";
import { authbanner } from "../../assets";

const SignIn = () => {
  return (
    <div className="flex h-[90vh] ">
      {/* Left side with the image */}
      <div
        className="hidden lg:block bg-cover bg-center w-1/2"
        style={{ backgroundImage: `url(${authbanner})` }}
      >        
      </div>

      {/* Right side with the login form */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md px-8 py-6 ">
          <h3 className="text-2xl font-bold text-center">
            Login to your account
          </h3>
          <form action="">
            <div className="mt-4">
              <div>
                {/* <label className="block" htmlFor="email">
                  Email
                </label> */}
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-xl border-black focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                {/* <label className="block">Password</label> */}
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-xl border-black focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <a
                href="#"
                className="text-xs text-blue-600 hover:underline mt-4"
              >
                Forgot password?
              </a>
              <button className="px-6 py-2 w-full mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Login
              </button>
              <span className="flex items-center justify-center space-x-2 pt-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-400">or login with</span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              <button className="flex items-center justify-center px-6 py-2 w-full mt-4 bg-gray-200 rounded-lg hover:bg-gray-700 hover:text-white">
                <FcGoogle className="mr-2" />
                <span>Google</span> 
              </button>
              <div className="flex items-center justify-center space-x-2 pt-2">
                <span className="text-sm font-normal text-gray-500">
                  Not a member ?
                </span>
                <a href="/signup" className="text-xs text-blue-600 hover:underline">
                  Sign up now
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
