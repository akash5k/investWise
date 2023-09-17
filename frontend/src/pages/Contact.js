import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { contactBanner } from "../assets/index";

const Contact = () => {
  return (
    <div className="flex h-[90vh]">
      <div
        className="hidden lg:block bg-cover bg-center w-1/2 inset-0 filter brightness-50"
        style={{ backgroundImage: `url(${contactBanner})` }} 
      ></div>
      <div className="hidden md:block absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-5xl font-bold uppercase tracking-[0.4rem]">
          Investwise
        </h1>
        <div className="flex items-center justify-center space-x-4 mt-4 gap-4">
          <FaFacebook className="text-3xl" />
          <FaInstagram className="text-3xl" />
          <FaTwitter className="text-3xl" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md px-8 py-6">
          <h3 className="text-2xl font-bold text-center">Contact Us</h3>
          <form>
            <div className="mt-4">
              <input
                className="w-full px-4 py-2 mt-2 border rounded-xl border-black focus:outline-none focus:ring-1 focus:ring-blue-600"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mt-4">
              <input
                className="w-full px-4 py-2 mt-2 border rounded-xl border-black focus:outline-none focus:ring-1 focus:ring-blue-600"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mt-4">
              <textarea
                className="w-full px-4 py-2 mt-2 border rounded-xl border-black focus:outline-none focus:ring-1 focus:ring-blue-600"
                name="message"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 w-full mt-4 text-white bg-black rounded-lg hover:bg-white border hover:border-black hover:text-black focus:outline-none focus:ring-1 focus:ring-blue transition-all"
            >
              Submit
            </button>
          </form>
          <div className="flex items-center justify-center space-x-2 pt-4">
            <span className="h-px bg-gray-400 w-14"></span>
            <span className="font-normal text-gray-400">or contact us on</span>
            <span className="h-px bg-gray-400 w-14"></span>
          </div>
          <div className="flex items-center justify-center space-x-4 pt-2">            
          <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-600 hover:underline text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-purple-600 hover:underline text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-blue-800 hover:underline text-2xl" />
            </a>
          </div>
          <div className="flex items-center justify-center space-x-2 pt-2">
            <span className="text-sm font-normal text-gray-500">
              Interested in our services?
            </span>
            <Link
              to="/signup"
              className="text-xs text-blue-600 hover:underline"
            >
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
