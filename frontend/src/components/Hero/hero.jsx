import React, { useContext, useEffect } from "react"

import { Link } from "react-router-dom"
import { finance } from "../../assets"
import AuthContext from "../../context/auth/authContext"

const Hero = () => {
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser()
  }, [])
  return (
    <div className="relative h-[90vh] bg-gray-100 py-12 pl-12 lg:flex lg:items-center">
      <div className="lg:w-1/3">
        <h1 className="text-7xl font-bold mb-4 uppercase">
          Invest <br />
          Wiser
        </h1>
        <p className="text-lg text-gray-500 mb-6">
          Navigate your financial future with precision – track your investments
          effortlessly.
        </p>
        <Link
          to="/signup"
          className="bg-black capitalize hover:bg-gray-900  text-white px-4 py-2 rounded-full text-lg font-semibold transition-all"
        >
          Get Started <span className="inline-block">&rarr;</span>
        </Link>
      </div>

      <div className="lg:w-2/3 lg:mt-0 mt-8 relative">
        <img
          src={finance}
          alt="Hero Image"
          className=" h-[90vh] w-full object-cover"
          style={{ margin: 0, padding: 0 }}
        />
      </div>
    </div>
  )
}

export default Hero
