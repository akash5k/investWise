import React, { useContext } from "react"
import { Line } from "react-chartjs-2"
import InvestmentContext from "../../context/investment/investmentContext"

const getData = (labels, investments) => {
  let investData = [0, 0, 0, 0]
  let returnData = [0, 0, 0, 0]
  labels.forEach((l, idx) => {
    investments.forEach((i) => {
      if (i.parameter.name === l) {
        investData[idx] += i.amount
        returnData[idx] += i.returnAmount
      }
    })
  })
  return [investData, returnData]
}

const InvestmentReturnChart = () => {
  const investmentContext = useContext(InvestmentContext)
  const { parentLabels, investments } = investmentContext

  const [investData, ReturnData] = getData(parentLabels, investments)
  const investmentData = {
    labels: parentLabels,
    datasets: [
      {
        label: "Invested",
        data: investData,
        backgroundColor: "rgba(75, 192, 192,0.5)",
        barThickness: 20,
        fill: true,
        tension: 0.3,
      },
      {
        label: "Return",
        data: ReturnData,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        barThickness: 20,
        fill: true,
        tension: 0.3,
      },
    ],
    options: {
      scales: {
        x: {
          type: "category",
          ticks: {},
        },
        y: {
          beginAtZero: true,
        },
      },
      beginAtZero: true,
    },
  }
  return (
    <>
      <span>Visualizer</span>
      <Line data={investmentData} />
    </>
  )
}

export default InvestmentReturnChart
