import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
import SingleProperty from "./Home/SingleProperty";
import useProperty from "../hooks/useProperty";

const AllProperty = () => {
  const [property] = useProperty();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState(""); // State for sorting

  const popular = property.filter(item => item.status === 'verified');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  const sortProperties = (properties) => {
    if (sortType === "low-to-high") {
      return properties.sort((a, b) => a.first_price - b.first_price);
    } else if (sortType === "high-to-low") {
      return properties.sort((a, b) => b.first_price - a.first_price);
    } else {
      return properties;
    }
  };

  const filteredProperties = popular
    .filter(item => item.location.toLowerCase().includes(searchTerm.toLowerCase()));

  const sortedProperties = sortProperties(filteredProperties);

  return (
    <div>
      <Helmet>
        <title>Avada | All Property</title>
      </Helmet>
      <div className="min-h-screen max-w-7xl mx-auto">
      <div className=" space-y-4 text-center mt-10">
        <h1 className="text-4xl font-semibold leading-tight">All <span className="text-[#65bc7b]"> Property</span></h1>
        
      </div>
        <section className="py-6 sm:py-12">
          <div className="mb-6 flex gap-4 p-2">
            
            <input 
              type="text" 
              placeholder="Search by location" 
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full p-2 border rounded-md focus:outline-none"
            />
            <select onChange={handleSortChange} className="p-2 border rounded-md focus:outline-none">
              <option value="">Sort by</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {
              sortedProperties.map(item => 
                <SingleProperty key={item._id} item={item} />
              )
            }
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllProperty;
