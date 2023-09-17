import React, { useContext, useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import { Doughnut, Pie } from "react-chartjs-2"
import InvestmentContext from "../../context/investment/investmentContext"

// amount: 100000
// childId: "7bd6931e-b349-4a3f-9ae2-a8a585c18220"
// childParameter: {
//   name: "College Fees"
// }
// id: "273bec7e-8061-4c47-a83c-c795ce04f1bf"
// parameter: {
//   name: "Education"
// }
// parameterId: "61a83700-d645-4b6f-b570-8be976b8ed61"
// returnAmount: 1000000

function getData(subcategories, data) {
  // Generate random data for numSubcategories temporary

  let a = []

  for (let s of subcategories) {
    console.log(s)
    const obj = data.find((d) => d.childParameter.name === s.name) || 0
    a.push(obj.amount * s.weight || 0)
  }
  return a
}

function TabsComponent() {
  const investmentContext = useContext(InvestmentContext)
  const { parentLabels, LABELSDATA, investments } = investmentContext

  return (
    <Tabs>
      <TabList className="flex flex-wrap gap-2" href="#chart">
        {parentLabels.map((category, index) => (
          <Tab
            key={index}
            className="border p-2 hover:bg-gray-100 cursor-pointer"
          >
            {category}
          </Tab>
        ))}
      </TabList>
      {LABELSDATA.map((category, index) => (
        <TabPanel key={index} className="mt-6">
          <Category
            title={category.name}
            subcategories={category.childParams.map((c) => ({
              name: c.name,
              weight: c.selfWeight,
            }))}
            investmentData={investments.filter(
              (i) => i.parameterId === category.id
            )}
          />
        </TabPanel>
      ))}
    </Tabs>
  )
}

function Category({ title, subcategories, investmentData }) {
  // Dummy data (replace with your actual data)
  const data = getData(subcategories, investmentData)

  const ChartData = {
    labels: subcategories.map((s) => s.name),
    datasets: [
      {
        data,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
        ],
      },
    ],
  }

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="w-full md:w-1/3 mx-auto">
        <Doughnut data={ChartData} id="chart" />
      </div>
    </div>
  )
}

export default TabsComponent
