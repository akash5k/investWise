// InvestmentModal.js
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
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-100 backdrop-blur-2xl">
          <div className="bg-white p-4 w-96 rounded-lg shadow-md">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 cursor-pointer"
            >
              Close
            </button>
            <h2 className="text-xl font-semibold mb-4">Add New Investment</h2>
            <div>
              <form>
                <div className="mb-4 relative">
                  <span className="absolute inset-y-0 left-0 bottom-[68px] flex items-center pl-3 text-gray-600">
                    ₹
                  </span>
                  <input
                    className="w-full pl-10 px-4 py-2 mt-2 border rounded-xl border-black focus:outline-none focus:ring-1 focus:ring-blue-600"
                    type="number"
                    name="email"
                    placeholder="Amount"
                    required
                  />
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
                    className="w-full px-4 py-2 mt-2 border rounded-xl border-black focus:outline-none focus:ring-1 focus:ring-blue-600"
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
                    className="w-full px-4 py-2 mt-2 border rounded-xl border-black focus:outline-none focus:ring-1 focus:ring-blue-600"
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
                  <button
                    type="submit"
                    className="bg-green-500 w-1/2 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-green-800"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InvestmentModal;
