import React from "react";
import { FaTwitter, FaLinkedin, FaBitbucket } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";

const About = () => {
  return (    
    <div className="w-full  p-8">
      <div className="w-full max-w-screen-md mx-auto text-center ">
        <h1 className="font-bold text-4xl ">InvestWise</h1>
        <p className="text-gray-600 text-lg mb-4">
        Your Ultimate Investment Tracking Solution
        </p>
        <p className="text-gray-600 text-sm mb-4 text-justify ">
          InvestWise is your all-in-one investment tracking platform,
          meticulously crafted to simplify and optimize your investment
          management. Whether you're an experienced investor or a beginner, our
          platform offers robust features for monitoring your investments,
          assessing performance, and empowering you with data-driven investment
          insights.
        </p>
        <div className="flex flex-row justify-center gap-2">
          <button className="py-2 px-4 bg-black text-white hover:bg-white hover:text-black hover:border border-black font-bold rounded-full">
            Get Started
          </button>
          <button className="py-2 px-4 border border-black bg-white font-bold rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition-all">
            <FaBitbucket size={20} /> Code <GoLinkExternal size={15} />
          </button>
        </div>
        <div className="border-t-2 border-gray-300 mt-5"></div>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-4 p-4">
        <h1 className="text-purple-600 uppercase text-xl">Contributers</h1>
      </div>

      {/* Contributors Section */}
      <div className="flex items-center justify-center flex-wrap gap-8 p-4">
        <div className="card bg-white p-4 rounded-xl shadow-2xl w-[250px] text-center">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt="Contributor 1"
            className="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110 mx-auto"
          />
          <div className="text-gray-900 text-lg font-bold pt-4">
            Akash Parida
          </div>
          <div className="text-purple-600">Role</div>
          <div className="text-gray-600">Contribution</div>
          <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-600">
            <FaLinkedin className="cursor-pointer transition duration-200 hover:text-black" />
            <BsGithub className="cursor-pointer transition duration-200 hover:text-black" />
            <FaTwitter className="cursor-pointer transition duration-200 hover:text-black" />
          </div>
        </div>

        <div className="card bg-white p-4 rounded-xl shadow-2xl w-[250px] text-center">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt="Contributor 2"
            className="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110 mx-auto"
          />
          <div className="text-gray-900 text-lg font-bold pt-4">
            Gursimrat Singh Kalra
          </div>
          <div className="text-purple-600">Role</div>
          <div className="text-gray-600">Contribution</div>
          <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-600">
            <FaLinkedin className="cursor-pointer transition duration-200 hover:text-black" />
            <BsGithub className="cursor-pointer transition duration-200 hover:text-black" />
            <FaTwitter className="cursor-pointer transition duration-200 hover:text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
