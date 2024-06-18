import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import UseAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { IoLocationSharp } from "react-icons/io5";


const BoughtProperty = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const {
    data: boughtProperty = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["boughtProperty"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user-boughtProperty/${user?.email}`);
      return res.data;
    },
  });
  console.log(boughtProperty);
  return (
    <div>
      <div className="text-center mt-5 text-4xl">
        <h1>All Bought Property List</h1>
      </div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
      {boughtProperty.map((item) => (
        <div className="bg-white relative shadow-md rounded-md overflow-hidden m-6">
          <div className="absolute top-3 left-0 bg-[#65bc7b] text-white text-xs font-bold px-3 py-1 transform -translate-y-1/2 z-10">
            Featured
          </div>
          <div className="relative">
            <img
              src={item.image}
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
            <h3 className="text-lg font-bold">{item.title}</h3>
            <div className="flex space-x-4">
                <div className="flex space-x-4">
                  <div>
                    <div className="flex items-center mt-1">
                      <IoLocationSharp />
                      <span className="ml-2 text-sm ">{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-8 mt-3">
                <div>
                  <span className="block text-xs font-bold">Agent Name</span>
                  <div className="flex items-center mt-1">
                    <i className="fas fa-th-large text-gray-500"></i>
                    <span className="ml-2 text-xs font-bold">
                      {item.agentName}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-bold">Agent Email</span>
                  <div className="flex items-center mt-1">
                    <i className="fas fa-vector-square text-gray-500"></i>
                    <span className="ml-2 text-xs font-bold">
                      <span className="text-gray-500 ml-1">
                        {item.agentEmail}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            <div className="mt-4">
              <span className="block text-xs font-bold">Offer Price</span>
              <span className="text-[#65bc7b] text-lg font-bold">{item.offer_price}</span>
            </div>
            <div className="flex justify-center ">
              <Link to="/dashboard/checkout">
                <button className="relative overflow-hidden  border border-[#65bc7b] text-[#65bc7b]  text-md  py-3 btn-wide px-3 font-bold uppercase tracking-wider transition-all duration-150 ease-in-out focus:outline-none group mt-4">
                  <span className="absolute inset-0 bg-[#65bc7b] transform scale-x-0 origin-left transition-transform duration-150 ease-in-out group-hover:scale-x-100"></span>
                  <span className="relative z-10 transition-colors duration-150 ease-in-out group-hover:text-white">
                    Pay
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default BoughtProperty;
