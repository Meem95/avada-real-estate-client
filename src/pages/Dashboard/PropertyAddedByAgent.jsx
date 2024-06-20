import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useProperty from "../../hooks/useProperty";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { IoLocationSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const PropertyAddedByAgent = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { data: agentProperty = [], isPending: loading, refetch } = useQuery({
    queryKey: ['agentProperty', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/get-agent-property/${user?.email}`);
      return res.data;
    },
  });
  console.log('agentProperty',agentProperty)
  //const [property, , refetch] = useProperty();
  const axiosSecure = useAxiosSecure();
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/property/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      <div className="text-center mt-5 text-4xl">
        <h1>Property List</h1>
      </div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        {agentProperty.map((item, index) => (
          <div className="bg-white relative shadow-md rounded-md overflow-hidden m-6">
            <div className="absolute top-3 left-0 bg-[#65bc7b] text-white text-xs font-bold px-3 py-1 transform -translate-y-1/2 z-10">
              {item.status}
            </div>
            <div className="relative">
              <img
                src={item.image}
                alt="Home In Merrick Way"
                className="w-full object-cover"
              />
              
              <div className="absolute bottom-4 right-4 text-black space-x-3">
                <i className="fas fa-heart"></i>
                <i className="fas fa-exchange-alt"></i>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold"> {item.title}</h3>

              <div className="flex space-x-4 ">
                <div className="flex space-x-4">
                  <div>
                    <span className="block text-md font-bold">Location</span>
                    <div className="flex items-center mt-1">
                      <IoLocationSharp />
                      <span className="ml-2 text-xs my-2">
                      {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-10">
                <div>
                  <span className="block text-xs font-bold">Agent Name</span>
                  <div className="flex items-center mt-1">
                    <i className="fas fa-th-large text-gray-500"></i>
                    <span className="ml-2 text-xs font-bold">{item.agentName}</span>
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-bold">Agent Email</span>
                  <div className="flex items-center mt-1">
                    <i className="fas fa-vector-square text-gray-500"></i>
                    <span className="ml-2 text-xs font-bold">
                      <span className="text-gray-500 ml-1">{item.agentEmail}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <span className="block text-xs font-bold">For Sale</span>
                <span className="text-[#65bc7b] text-lg font-bold">
                  {item.first_price} to {item.second_price}
                </span>
              </div>
              <div className="flex justify-between ">
              <Link to={`/dashboard/update-property/${item._id}`}>
                  <button className="relative overflow-hidden  border border-[#65bc7b] text-[#65bc7b]  text-sm  py-3 px-3 font-bold uppercase tracking-wider transition-all duration-150 ease-in-out focus:outline-none group mt-4">
                    <span className="absolute inset-0 bg-[#65bc7b] transform scale-x-0 origin-left transition-transform duration-150 ease-in-out group-hover:scale-x-100"></span>
                    <span className="relative z-10 transition-colors duration-150 ease-in-out group-hover:text-white">
                      Update
                    </span>
                  </button>
                </Link>
                <button  onClick={() => handleDeleteItem(item)} className="relative overflow-hidden  border border-[#65bc7b] text-[#65bc7b] py-3 px-3 text-sm font-bold uppercase tracking-wider transition-all duration-150 ease-in-out focus:outline-none group mt-4">
                  <span className="absolute inset-0 bg-[#65bc7b] transform scale-x-0 origin-left transition-transform duration-150 ease-in-out group-hover:scale-x-100"></span>
                  <span className="relative z-10 transition-colors duration-150 ease-in-out group-hover:text-white">
                    Delete
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyAddedByAgent;
