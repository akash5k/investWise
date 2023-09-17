import React, { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import AuthContext from "../context/auth/authContext"

import "chart.js/auto"
import { Line } from "react-chartjs-2"

import Tabs from "../components/Tabs/Tabs"
import InvestmentModal from "../components/Modal/InvestmentModal"
import InvestmentContext from "../context/investment/investmentContext"
import InvestmentReturnChart from "../components/Charts/InvestmentReturnChart"

const Dashboard = () => {
  const authContext = useContext(AuthContext)
  const investmentContext = useContext(InvestmentContext)
  const { user } = authContext
  const { parentLabels, getAllInvestments, investments, loading } =
    investmentContext

  //dummy data
  const totalProfit = 1000
  const avgGrowth = 10

  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    getAllInvestments()
    console.log(investments)
  }, [loading])

  return (
    <div className="relative flex flex-col bg-gray-100 py-6 px-12 lg:flex lg:items-center">
      <div className="flex flex-row justify-between w-full">
        <div className="text-xl font-bold text-gray-900 lg:w-1/2">
          Hi {user?.username || "User"}
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">${totalProfit}</span>
            <span className="text-xs font-bold text-green-600">
              Total Profit
            </span>
          </div>
          <div className="border-r-[2px] border-gray-300 h-12"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{avgGrowth}%</span>
            <span className="text-xs font-bold text-green-600">
              Average Growth
            </span>
          </div>
          <button
            className="py-2 px-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
            onClick={openModal}
          >
            + Invest
          </button>
        </div>
      </div>

      {/* Render the InvestmentModal component */}
      <InvestmentModal isOpen={isModalOpen} onClose={closeModal} />

      <div className="w-full flex flex-col md:flex-row gap-6 py-6 ">
        <div className="w-full md:w-1/2 rounded-2xl shadow-md pt-2 pl-4 font-semibold bg-white mb-6 md:mb-0">
          <span>Acount Activity</span>
          <br />
          <span className="text-xs text-gray-400">
            {investments ? (
              <>
                <div className="flex">
                  <ul>
                    {investments.map((i) => (
                      <li key={i.id}>
                        Amount: Rs {i.amount}, Parameter: Rs {i.parameter.name},
                        Child Parameter: Rs {i.childParameter.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              "Add an investment to get started"
            )}
          </span>
          {/* add recent investments by date */}
        </div>
        <div className="w-full md:w-1/2 rounded-2xl shadow-md pt-2 pl-4 font-semibold bg-white">
          <InvestmentReturnChart />
        </div>
      </div>

      <div className="w-full bg-white shadow-md p-6 rounded-2xl">
        <Tabs />
      </div>
    </div>
  )
}

export default Dashboard
