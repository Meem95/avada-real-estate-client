import React from "react";
import { Link } from "react-router-dom";

const PropertyAddedByAgent = () => {
  return (
    <div>
    <div  className="text-center mt-5 text-4xl">
        <h1 >Property List</h1>
    </div>
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
      <div className="bg-white relative shadow-md rounded-md overflow-hidden m-6">
        <div className="absolute top-3 left-0 bg-[#65bc7b] text-white text-xs font-bold px-3 py-1 transform -translate-y-1/2 z-10">
          Featured
        </div>
        <div className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg"
            alt="Home In Merrick Way"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-700 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-xs border border-white py-2 px-4 cursor-pointer">
              View Property
            </span>
          </div>
          <div className="absolute bottom-4 right-4 text-black space-x-3">
            <i className="fas fa-heart"></i>
            <i className="fas fa-exchange-alt"></i>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold">Home In Merrick Way</h3>
          <p className="text-sm text-gray-600 my-3">
            Enchanting three bedrooms, three bath home with spacious one
            bedroom, one bath...
          </p>
          <div className="flex space-x-4">
            <div>
              <span className="block text-xs font-bold">Bedrooms</span>
              <div className="flex items-center mt-1">
                <i className="fas fa-th-large text-gray-500"></i>
                <span className="ml-2 text-xs font-bold">3</span>
              </div>
            </div>
            <div>
              <span className="block text-xs font-bold">Bathrooms</span>
              <div className="flex items-center mt-1">
                <i className="fas fa-shower text-gray-500"></i>
                <span className="ml-2 text-xs font-bold">3</span>
              </div>
            </div>
            <div>
              <span className="block text-xs font-bold">Area</span>
              <div className="flex items-center mt-1">
                <i className="fas fa-vector-square text-gray-500"></i>
                <span className="ml-2 text-xs font-bold">
                  4300<span className="text-gray-500 ml-1">Sq Ft</span>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <span className="block text-xs font-bold">For Sale</span>
            <span className="text-[#65bc7b] text-lg font-bold">$540,000</span>
          </div>
          <div className="flex justify-between ">
           
            <Link to="/dashboard/update-property">
              <button className="relative overflow-hidden  border border-[#65bc7b] text-[#65bc7b]  text-sm  py-3 px-3 font-bold uppercase tracking-wider transition-all duration-150 ease-in-out focus:outline-none group mt-4">
                <span className="absolute inset-0 bg-[#65bc7b] transform scale-x-0 origin-left transition-transform duration-150 ease-in-out group-hover:scale-x-100"></span>
                <span className="relative z-10 transition-colors duration-150 ease-in-out group-hover:text-white">
                  Update
                </span>
              </button>
              
            </Link>
            <button className="relative overflow-hidden  border border-[#65bc7b] text-[#65bc7b] py-3 px-3 text-sm font-bold uppercase tracking-wider transition-all duration-150 ease-in-out focus:outline-none group mt-4">
                <span className="absolute inset-0 bg-[#65bc7b] transform scale-x-0 origin-left transition-transform duration-150 ease-in-out group-hover:scale-x-100"></span>
                <span className="relative z-10 transition-colors duration-150 ease-in-out group-hover:text-white">
                 Delete
                </span>
              </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PropertyAddedByAgent;
