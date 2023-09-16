import React, { useState } from "react";
import categorydata from "../Tabs/categories.json";

const InvestmentModal = ({ isOpen, onClose }) => {
  const categories = categorydata;
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    setSelectedSubcategory("");
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
          <div className="relative w-screen max-w-3xl p-6 bg-white rounded-lg shadow-lg">            
            <div className="border-0 flex flex-col w-full outline-none focus:outline-none">              
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-3xl font-semibold">
                  Add New Investment
                </h3>
                <button
                  className="p-1 bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={onClose}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="relative p-6">
                <form>
                  <div className="mb-4 relative">
                    <span className="absolute inset-y-0 left-0 bottom-[68px] flex items-center pl-3 text-gray-600">
                      ₹
                    </span>
                    <div className="flex flex-row gap-2">                    
                    <input
                      className="w-1/2 pl-10 px-4 py-2 mt-2 border rounded-full border-black focus:outline-none focus:ring-1 focus:ring-blue-600"
                      type="number"
                      name="email"
                      placeholder="Amount"
                      required
                    />
                    <input
                     className="w-1/2 pl-10 px-4 py-2 mt-2 border rounded-full border-black focus:outline-none focus:ring-1 focus:ring-blue-600"
                      type="float"
                      name="return"
                      placeholder="Return Amount"
                      required
                    >
                    </input>
                    </div>
                    <label
                      htmlFor="category"
                      className="block text-gray-700 text-sm font-bold mt-2"
                    >
                      Select a Category
                    </label>
                    <select
                      name="Category"
                      id="category"
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                      className="w-full px-4 py-2 mt-2 border rounded-full border-black focus:outline-none focus:ring-1 focus:ring-blue-600"
                    >
                      <option value="" disabled>
                        Select a Category
                      </option>
                      {categories.map((category, index) => (
                        <option key={index} value={category.title}>
                          {category.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="subcategory"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Select a Subcategory
                    </label>
                    <select
                      name="Subcategory"
                      id="subcategory"
                      value={selectedSubcategory}
                      onChange={(event) => setSelectedSubcategory(event.target.value)}
                      className="w-full px-4 py-2 mt-2 border rounded-full border-black focus:outline-none focus:ring-1 focus:ring-blue-600"
                    >
                      <option value="" disabled>
                        Select a Subcategory
                      </option>
                      {selectedCategory &&
                        categories
                          .find((category) => category.title === selectedCategory)
                          .subcategories.map((subcategory, index) => (
                            <option key={index} value={subcategory}>
                              {subcategory}
                            </option>
                          ))}
                    </select>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-end pt-2 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={onClose}
                      >
                        Close
                      </button>
                      <button
                        className="py-2 px-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
                        type="submit"
                        onClick={onClose}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InvestmentModal;
