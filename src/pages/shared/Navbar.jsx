import { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Tooltip } from "react-tooltip";
import userProfile from "../../assets/images/profile.png";
import Swal from "sweetalert2";
import axios from "axios";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownLeft, setDropdownLeft] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownRight, setShowDropdownRight] = useState(false);

  const toggleDropdown = (left) => {
    setShowDropdown(!showDropdown);
    setDropdownLeft(left);
  };

  const handleLogOut = () => {
   
        logOut()
        .then(() => { Swal.fire({
          title: "Success!",
          text: " Successfully Logout",
          icon: "success",
          confirmButtonText: "Cool",
        }) })
            .catch(error => console.log(error));
      
  };
  
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-lg text-[#65bc7b]"
              : "font-bold text-lg"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="all-property"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-lg text-[#65bc7b]"
              : "font-bold text-lg"
          }
        >
          All properties
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-lg text-[#65bc7b]"
              : "font-bold text-lg  "
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-lg text-[#65bc7b]"
              : "font-bold text-lg "
          }
        >
          Contact
        </NavLink>
      </li>
     
      
    </>
  );
  return (
    <div className="sticky top-0 z-10">
      <div className="navbar max-w-7xl mx-auto">
        <div className=" ">
          <div className="dropdown w-full">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
              onClick={() => toggleDropdown(0)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {showDropdown && (
              <ul
                className="menu menu-sm  dropdown-content z-30 mt-3 p-2 shadow bg-base-100 rounded-box absolute "
                style={{ left: dropdownLeft, width: 150, padding: 12 }}
              >
                {navOptions}
              </ul>
            )}
          </div>
          <NavLink to={"/"} className="btn btn-ghost text-xl">
            <a className="">
              <img className="w-28" src={logo} />
            </a>
          </NavLink>
        </div>
        <div className="navbar-center hidden mx-auto lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className=" space-x-1">
        
          <div>
            
          </div>
          {!user ? (
            <Link to="/login" className="">
              {" "}
              <button className="btn btn-outline w-24 btn-md text-[#65bc7b] ">
                Login
              </button>
            </Link>
          ) : (
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar"
                onClick={() => setShowDropdownRight(!showDropdownRight)}
              >
                <div className="w-16 rounded-full my-anchor-element">
                  <img src={user.photoURL || userProfile} alt="User Avatar" />
                </div>
              </label>
              <Tooltip
                anchorSelect=".my-anchor-element"
                className="z-30"
                content={user?.displayName || "User"}
              ></Tooltip>

              {showDropdownRight && (
                <div className="absolute z-10 -left-[120px] bg-white p-5 border-gray-600 shadow-xl rounded-lg">
                  <ul>
                    <li className="border-b-2  border-red-200">
                      {user?.displayName || "User"}
                    </li>
                    <li>
                      {" "}
                      <button
                        onClick={handleLogOut}
                        className="btn bg-[#65bc7b]  text-white mt-2"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
