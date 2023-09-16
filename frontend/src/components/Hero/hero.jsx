import React, { useContext, useEffect } from "react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { banner } from "../../assets"
import AuthContext from "../../context/auth/authContext"

const Hero = () => {
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser()
  }, [])
  return (
    <div className="relative h-[90vh] bg-gray-100 py-12 pl-12 lg:flex lg:items-center">
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

      <div className="lg:w-1/2 lg:mt-0 mt-8 relative">
        <img
          src={banner}
          alt="Hero Image"
          className=" h-[90vh] w-full object-cover"
          style={{ margin: 0, padding: 0 }}
        />
      </div>
    </div>
  )
}

export default Hero
