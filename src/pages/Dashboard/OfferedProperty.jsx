import React from 'react';

const OfferedProperty = () => {
    return (
        <div>
        <div className="text-center m-5 text-4xl">
          <h1>Offered Property</h1>
        </div>
        <div className="max-w-6xl mx-auto  p-4">
          <form>
            <div className="flex gap-8 ">
              <div className="flex-1">
                <label className="block mb-2 dark:text-white" htmlFor="name">
                  Property Title
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                  type="text"
                  placeholder=" Title"
                  id="food_name"
                  name="name"
                  disabledd
                />
  
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="location"
                >
                  Property Location
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                  type="text"
                  placeholder="Enter Location"
                  id="location"
                  name="location"
                  disabled
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="location"
                >
                  Agent Name
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                  type="number"
                  placeholder="Enter Second Price"
                  id="location"
                  name="location"
                  disabled
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="location"
                >
                  Buyer Email
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                  type="number"
                  placeholder="Enter Second Price"
                  id="location"
                  name="location"
                  disabled
                />
              </div>
  
              <div className="flex-1">
                <label className="block mb-2 dark:text-white" htmlFor="image">
                  Property Image
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                  type="file"
                  placeholder="Enter Image URL"
                  id="image"
                  name="image"
                  disabled
                />
  
                <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                  Offered Price
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                  type="number"
                  placeholder="Enter First Price"
                  id="price"
                  name="price"
                  required
                />
                <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                  Buyer Name 
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                  type="number"
                  placeholder="Enter First Price"
                  id="price"
                  name="price"
                  disabled
                />
                <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                  Buying Date 
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                  type="date"
                  placeholder="Enter First Price"
                  id="price"
                  name="price"
                  required
                />
              </div>
            </div>
            <input
              className="px-4 w-full py-2 mt-4 rounded hover:bg-[#65bc7b]  bg-[#65bc7b] duration-200 text-white cursor-pointer font-semibold"
              type="submit"
              value="Offered"
            />
          </form>
        </div>
      </div>
    );
};

export default OfferedProperty;