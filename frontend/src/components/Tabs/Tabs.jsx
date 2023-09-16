import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Doughnut, Pie } from 'react-chartjs-2';
import categoriesData from './categories.json';


function getRandomData(numSubcategories) {
  // Generate random data for numSubcategories temporary
  return Array.from({ length: numSubcategories }, () => Math.floor(Math.random() * 100));
}

function TabsComponent() {
  return (
    <Tabs>
      <TabList className="flex flex-wrap gap-2" href='#chart'>
        {categoriesData.map((category, index) => (
          <Tab
            key={index}
            className="border p-2 hover:bg-gray-100 cursor-pointer">
            {category.title}
          </Tab>
        ))}
      </TabList>
      {categoriesData.map((category, index) => (
        <TabPanel key={index} className="mt-6">
          <Category title={category.title} subcategories={category.subcategories} />
        </TabPanel>
      ))}
    </Tabs>
  );
}

function Category({ title, subcategories }) {
  // Dummy data (replace with your actual data)
  const dummyData = getRandomData(subcategories.length);

  const ChartData = {
    labels: subcategories,
    datasets: [
      {
        data: dummyData,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
        ],
      },
    ],
  };

   return (
    <div className="">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className='w-full md:w-1/3 mx-auto' >
        <Doughnut data={ChartData} id='chart'/>
      </div>
    </div>
  );
}


export default TabsComponent;
