import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import categoriesData from './categories.json';

function Category({ title, subcategories }) {
  return (
    <div className="">
      {/* <h3 className="text-2xl font-semibold mb-4">{title}</h3> */}
      <Tabs>
        <TabList className="flex flex-wrap gap-2">
          {subcategories.map((subcategory, index) => (
            <Tab
              key={index}
              className="border p-2 hover:bg-gray-100 cursor-pointer">
              {subcategory}
            </Tab>
          ))}
        </TabList>
        {subcategories.map((subcategory, index) => (
          <TabPanel key={index} className="mt-4">
            <p className="text-gray-700">{`Description for ${subcategory}`}</p> 
            {/* add logic to display charts for each subcategory */}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}

function TabsComponent() {
  return (
    <Tabs>
      <TabList className="flex flex-wrap gap-2">
        {categoriesData.map((category, index) => (
          <Tab
            key={index}
            className= "border p-2 hover:bg-gray-100 cursor-pointer">
            {category.title}
          </Tab>
        ))}
      </TabList>
      {categoriesData.map((category, index) => (
        <TabPanel key={index} className="mt-10">
          <Category title={category.title} subcategories={category.subcategories} />
        </TabPanel>
      ))}
    </Tabs>
  );
}

export default TabsComponent;