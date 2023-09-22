import React, { useEffect, useState, useContext, useRef } from "react";
import AuthContext from "../context/auth/authContext";

import {AiFillDelete} from "react-icons/ai"
import {BsGraphUpArrow,BsGraphDownArrow} from "react-icons/bs"
import "chart.js/auto";
import Tabs from "../components/Tabs/Tabs";
import InvestmentModal from "../components/Modal/InvestmentModal";
import InvestmentContext from "../context/investment/investmentContext";
import InvestmentReturnChart from "../components/Charts/InvestmentReturnChart";
import Loader from "../components/loader";


import $ from "jquery";
import "datatables.net-responsive-dt"; 
import "datatables.net-dt/css/jquery.dataTables.min.css"; 

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const investmentContext = useContext(InvestmentContext);
  const { user } = authContext;
  const { parentLabels, getAllInvestments, investments, loading } =
    investmentContext;

  const tableRef = useRef(null);

  useEffect(() => {
    getAllInvestments();
    let dataTable;

    if (tableRef.current) {
      dataTable = $(tableRef.current).DataTable({
        responsive: true,
      });
    }

    return () => {
      // Destroy the DataTable instance to prevent memory leaks
      if (dataTable) {
        dataTable.destroy();
      }
    };
  }, [loading]);

  const calculateTotalProfit = (investments) => {
    let returns = 0;
    investments.forEach((i) => {
      returns += i.returnAmount - i.amount;
    });
    return returns;
  };

  const calculateTotalReturnPercentage = (investments) => {
    let totalReturnAmount = 0;
    let totalInvestedAmount = 0;

    for (const investment of investments) {
      const { amount, returnAmount } = investment;
      totalReturnAmount += returnAmount;
      totalInvestedAmount += amount;
    }

    const totalPercentage =
      ((totalReturnAmount - totalInvestedAmount) / totalInvestedAmount) * 100;

    return totalPercentage.toFixed(2);
  };

  const net = calculateTotalProfit(investments);
  const totalGrowthPercentage = calculateTotalReturnPercentage(investments);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {loading ? (
        <>
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 z-50">
            <Loader />
          </div>
        </>
      ) : (
        <>
          <div className="relative flex flex-col bg-gray-100 py-6 px-12 lg:flex lg:items-center">
            <div className="flex flex-col md:flex-row justify-between w-full">
              <div className="text-xl font-bold text-gray-900 lg:w-1/2">
                Hi {user?.username || "User"}
              </div>
              <div className="flex flex-col md:flex-row  gap-4">
                <div className="flex flex-row md:flex-row justify-between md:gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">${net}</span>
                    {net > 0 ? (
                      <span className="flex flex-row  gap-2 text-xs font-bold text-green-600">
                        Total Profit <BsGraphUpArrow/>
                      </span>
                    ) : (
                      <span className="flex flex-row  gap-2 text-xs font-bold text-red-600">
                        Total Loss <BsGraphDownArrow/>
                      </span>
                    )}
                  </div>
                  <div className="hidden md:block border-r-[2px] border-gray-300 h-12"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">
                      {totalGrowthPercentage}%
                    </span>
                    <span className="text-xs font-bold text-green-600">
                      Total Growth
                    </span>
                  </div>
                </div>
                <button
                  className="py-2 px-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
                  onClick={openModal}
                >
                  + Invest
                </button>
              </div>
            </div>

            <InvestmentModal isOpen={isModalOpen} onClose={closeModal} />

            <div className="w-full h-full flex flex-col md:flex-row gap-6 py-6 ">
              <div className="w-full md:w-1/2 rounded-2xl shadow-md pt-2 pl-4 font-semibold bg-white mb-6 md:mb-0 p-4">
                <span>Account Activity</span>
                <br />
                <span className="text-xs text-gray-700">
                  <h2 className="text-xs font-semibold">Recent investments</h2>
                  {investments && investments.length > 0 ? (
                    <div className="w-full pt-1">
                      <div className="w-full pt-4  ">
                        <table
                          className="w-full text-left border-collapse"
                          ref={tableRef} //refrence to datatable
                        >
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="py-2 px-3 border border-gray-300">
                                Amount
                              </th>
                              <th className="py-2 px-3 border border-gray-300">
                                Return
                              </th>
                              <th className="py-2 px-3 border border-gray-300">
                                Category
                              </th>
                              <th className="py-2 px-3 border border-gray-300">
                                Sub Category
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {investments.map((i) => (
                              <tr
                                key={i.id}
                                className="hover:bg-gray-100 hover:cursor-pointer"
                              >
                                <td className="py-2 px-3 border border-gray-300">
                                  ${i.amount}
                                </td>
                                <td className="py-2 px-3 border border-gray-300">
                                  ${i.returnAmount}
                                </td>
                                <td className="py-2 px-3 border border-gray-300">
                                  {i.parameter.name}
                                </td>
                                <td className="py-2 px-3 border border-gray-300 flex flex-row justify-between">
                                  {i.childParameter.name} <AiFillDelete className="text-gray-400 hover:text-gray-700 transition-all"/>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : (
                    <p>Add an investment to get started</p>
                  )}
                </span>
              </div>
              <div className="w-full  md:w-1/2 rounded-2xl shadow-md pt-2 pl-4 font-semibold bg-white ">
                <InvestmentReturnChart />
              </div>
            </div>

            <div className="w-full bg-white shadow-md p-6 rounded-2xl">
              <Tabs />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
