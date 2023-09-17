import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Doughnut } from "react-chartjs-2";
import InvestmentContext from "../../context/investment/investmentContext";

function getData(subcategories, data) {
  let a = [];

  for (let s of subcategories) {
    const obj = data.find((d) => d.childParameter.name === s.name) || { amount: 0, returnAmount: 0 };
    a.push(obj.amount * s.weight || 0);
  }
  return a;
}

function TabsComponent() {
  const investmentContext = useContext(InvestmentContext);
  const { parentLabels, LABELSDATA, investments } = investmentContext;

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
  );
}

function Category({ title, subcategories, investmentData }) {
  const data = getData(subcategories, investmentData);

  // Calculate subcategory totals directly within the Category component
  const subCategoryTotal = {};

  for (const investment of investmentData) {
    const { amount, returnAmount, childParameter } = investment;
    const subCategoryName = childParameter.name;

    if (!subCategoryTotal[subCategoryName]) {
      subCategoryTotal[subCategoryName] = { amount: 0, returnAmount: 0 };
    }

    subCategoryTotal[subCategoryName].amount += amount;
    subCategoryTotal[subCategoryName].returnAmount += returnAmount;
  }

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
  };

  return (
    <div className="my-4">
          {investmentData && investmentData.length > 0 ? (
      <div className="flex flex-col md:flex-row md:w-3/4 mx-auto">
        <div className="md:w-1/2">
          <Doughnut data={ChartData} id="chart" />
        </div>
        <div className="md:w-1/2 my-auto md:pl-4 text-gray-600">
            <table className="w-full text-center">
              <thead>
                <tr>
                  <th className="text-black text-md">Sub Category</th>
                  <th className="text-black text-md">Amount</th>
                  <th className="text-black text-md">Return</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(subCategoryTotal).map((subCategoryName, index) => (
                  <tr key={index}>
                    <td>{subCategoryName}</td>
                    <td>${subCategoryTotal[subCategoryName].amount}</td>
                    <td>${subCategoryTotal[subCategoryName].returnAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
      </div>
          ) : (
            <p>No investment data available.</p>
          )}
        
    </div>
  );
}

export default TabsComponent;
