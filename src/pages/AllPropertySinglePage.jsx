import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";

const AllPropertySinglePage = ({item}) => {
  const { title, location, second_price, first_price, _id ,image ,name,email,status} = item;
  return (
    <div>
      <div className="bg-white relative shadow-md rounded-md overflow-hidden m-6">
        <div className="absolute top-3 left-0 bg-[#65bc7b] text-white text-xs font-bold px-3 py-1 transform -translate-y-1/2 z-10">
          {status}
        </div>
        <div className="relative">
          <img
            src={image}
            alt="Home In Merrick Way"
            className="w-full object-cover lg:h-[350px] md:h-[350px] "
          />
            <Link to={`/property-details/${_id}`}><div className="absolute inset-0 bg-teal-700 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-xs border border-white py-2 px-4 cursor-pointer">
              View Property
            </span>
          </div></Link>
          
          <div className="absolute bottom-4 right-4 text-black space-x-3">
            <i className="fas fa-heart"></i>
            <i className="fas fa-exchange-alt"></i>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex space-x-4">
           
            <div>
              <span className="block text-sm font-bold">Location</span>
              <div className="flex items-center mt-1">
              <IoLocationSharp />
                <span className="ml-2 text-xs font-bold">
                  {location}
                </span>
              </div>
            </div>
          </div>
          <div className="flex space-x-10 my-3">
                <div>
                  <span className="block text-xs font-bold">Agent Name</span>
                  <div className="flex items-center mt-1">
                    <i className="fas fa-th-large text-black "></i>
                    <span className="ml-2 text-xs text-black font-bold">{item.agentName}</span>
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-bold">Agent Email</span>
                  <div className="flex items-center mt-1">
                    <i className="fas fa-vector-square text-black "></i>
                    <span className="ml-2 text-xs font-bold">
                      <span className="text-black ml-1">{item.agentEmail}</span>
                    </span>
                  </div>
                </div>
              </div>
          <div className="mt-4">
            <span className="block text-sm font-bold">Price</span>
            <span className="text-[#65bc7b] text-lg font-bold">${first_price } - ${second_price}</span>
          </div>
          <div className="flex justify-center">
            
            <Link to={`/property-details/${_id}`}>
            <button className="relative overflow-hidden  border border-[#65bc7b] text-[#65bc7b] py-3 px-3 text-xs font-bold uppercase tracking-wider transition-all duration-150 ease-in-out focus:outline-none group mt-3">
                <span className="absolute inset-0 bg-[#65bc7b] transform scale-x-0 origin-left transition-transform duration-150 ease-in-out group-hover:scale-x-100"></span>
                <span className="relative z-10 transition-colors duration-150 ease-in-out group-hover:text-white">
                  View Property
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPropertySinglePage;
