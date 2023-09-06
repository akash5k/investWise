import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="relative h-[90vh] py-12 px-12 lg:flex lg:items-center">
      {/* Left Side (Text) */}
      <div className="lg:w-1/2">
        <h1 className="text-4xl font-bold mb-4">Invest Wiser .</h1>
        <p className="text-lg text-gray-500 mb-6">
          A catchy subtitle or description goes here.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-lg font-semibold">
          Get Started{" "}
          <span className="inline-block mt-1">
            <AiOutlineArrowRight />
          </span>
        </button>
      </div>

      {/* Right Side (Image with Design Overlay) */}
      <div className="lg:w-1/2 lg:mt-0 mt-8 relative">
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Hero Image"
          className="rounded-lg shadow-lg"
        />
      
      </div>
    </div>
  );
};

export default Hero;
