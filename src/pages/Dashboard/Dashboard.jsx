import React from "react";
import {
  FaAd,
  FaBook,
  FaHome,
  FaPaypal,
  FaPlus,
  FaStripe,
  FaUsers,
} from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { CgBriefcase } from "react-icons/cg";
import { CiBoxList } from "react-icons/ci";
import { GoGitPullRequest } from "react-icons/go";
import { MdRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { SiContactlesspayment } from "react-icons/si";
import { FaUpDown } from "react-icons/fa6";
import UseAdmin from "../../hooks/useAdmin";
import UseSeller from "../../hooks/useSeller";
import { CgProfile } from "react-icons/cg";
import sidebarImage from "../../assets/images/sidebar4.png"; 
import Profile from "./Profile";

const Dashboard = () => {
  const [isAdmin] = UseAdmin();
  const [isSeller] = UseSeller();

  return (
    <div>
      <div className="flex">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <label
              htmlFor="my-drawer-2"
              className="bg-primary btn  z-10  text-white font-popins text-xl drawer-button lg:hidden"
            >
              Dashboard
              <FaUpDown></FaUpDown>
            </label>
            <div className="">
              <Outlet></Outlet>
            </div>
          </div>
          <div
            className="drawer-side w-32 "
          
          >
            <label htmlFor="" aria-label="close sidebar" className="drawer-overlay"></label>
            <div className="max-w-6xl flex flex-col lg:mt-2 mt-12 justify-between min-h-screen  bg-opacity-50 font-popins text-white"   style={{
              backgroundImage: `url(${sidebarImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',

            }}>
              {/* {isAdmin ? ( */}
                <ul className="md:p-4 p-1 md:flex md:flex-col md:justify-start md:items-start">
                  <li className="mb-3 border-b-3">
                    <NavLink
                      to={"/dashboard/profile"}
                      end
                      className={({ isActive }) =>
                        isActive
                          ? "text-special-button-hover border-special-button-hover"
                          : "text-center border-b-3 border-primary font-normal gap-6 text-[18px]"
                      }
                    >
                      <p className="flex text-center md:flex-row flex-col gap-2 justify-center items-center">
                      <CgProfile className="md:text-3xl" /> Admin Profile
                      </p>
                    </NavLink>
                  </li>
                  <li className="mb-3 border-b-3">
                    <NavLink
                      to={"/dashboard/manage-user"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-special-button-hover border-special-button-hover"
                          : "text-center border-b-3 border-primary font-normal gap-6 text-[18px]"
                      }
                    >
                      <p className="text-center flex md:flex-row flex-col gap-2 justify-center items-center">
                        <FaUsers className="md:text-2xl"></FaUsers> Manage Users
                      </p>
                    </NavLink>
                  </li>
                  <li className="mb-3 border-b-3">
                    <NavLink
                      to={"/dashboard/manage-property"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-special-button-hover border-special-button-hover"
                          : "text-center border-b-3 border-primary font-normal gap-6 text-[18px]"
                      }
                    >
                      <p className="text-center flex md:flex-row flex-col gap-2 justify-center items-center">
                        <BiSolidCategoryAlt className="md:text-2xl" /> Manage Properties
                        
                      </p>
                    </NavLink>
                  </li>
                  <li className="mb-3 border-b-3">
                    <NavLink
                      to={"/dashboard/manage-review-by-admin"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-special-button-hover border-special-button-hover"
                          : "text-center border-b-3 border-primary font-normal gap-6 text-[18px]"
                      }
                    >
                      <p className="text-center flex md:flex-row flex-col gap-2 justify-center items-center">
                      <MdRateReview className="md:text-3xl"/>  Manage reviews
                      </p>
                    </NavLink>
                  </li>
                </ul>
              {/* ) : isSeller ? ( */}
                <>
                  <ul className="md:p-4 p-1 md:flex md:flex-col md:justify-start md:items-start">
                    <li className="mb-3 border-b-3">
                      <NavLink
                        to={"/dashboard/profile"}
                        end
                        className={({ isActive }) =>
                          isActive
                            ? "text-special-button-hover border-special-button-hover"
                            : "text-center border-b-3 border-primary font-normal gap-6 text-[18px]"
                        }
                      >
                        <p className="flex text-center md:flex-row flex-col gap-2 justify-center items-center">
                        <CgProfile className="md:text-3xl" /> Agent Profile
                        </p>
                      </NavLink>
                    </li>
                    <li className="mb-3 border-b-3">
                      <NavLink
                        to={"/dashboard/add-property"}
                        className={({ isActive }) =>
                          isActive
                            ? "text-special-button-hover border-special-button-hover"
                            : "text-center border-b-3 border-primary font-normal gap-6 text-[18px]"
                        }
                      >
                        <p className="flex text-center md:flex-row flex-col gap-2 justify-center items-center">
                          <FaPlus className="md:text-3xl"></FaPlus> Add Property
                        </p>
                      </NavLink>
                    </li>
                    <li className="mb-3 border-b-3">
                      <NavLink
                        to={"/dashboard/property-list"}
                        className={({ isActive }) =>
                          isActive
                            ? "text-special-button-hover border-special-button-hover"
                            : "text-center border-b-3 border-primary font-normal gap-6 text-[18px]"
                        }
                      >
                        <p className="flex text-center md:flex-row flex-col gap-2 justify-center items-center">
                         
                          <CiBoxList className="md:text-3xl"/>  Added properties
                        </p>
                      </NavLink>
                    </li>
                    <li className="mb-3 border-b-3">
                      <NavLink
                        to={"/dashboard/sold-property"}
                        className={({ isActive }) =>
                          isActive
                            ? "text-special-button-hover border-special-button-hover"
                            : "text-center border-b-3 border-primary font-normal gap-6 text-[18px]"
                        }
                      >
                        <p className="flex text-center md:flex-row flex-col gap-2 justify-center items-center">
                          <CgBriefcase className="md:text-3xl"/> Sold Properties
                        </p>
                      </NavLink>
                    </li>
                        <li className="mb-3 border-b-3">
                        <NavLink
                            to={"/dashboard/requested-property"}
                            className={({ isActive }) =>
                            isActive
                                ? "text-special-button-hover border-special-button-hover"
                                : "text-center border-b-3 border-primary font-normal gap-6 text-[18px]"
                            }
                        >
                            <p className="flex text-center md:flex-row flex-col gap-2 justify-center items-center">
                            <GoGitPullRequest className="md:text-3xl"/>Requested Properties
                            </p>
                        </NavLink>
                        </li>
                  </ul>
                </>
              {/* ) : ( */}
                <>
                  <ul className="md:p-4 p-1 md:flex md:flex-col md:justify-start md:items-start">
                    <li className="mb-3 border-b-3">
                      <NavLink
                        to={"/dashboard/profile"}
                        end
                        className={({ isActive }) =>
                          isActive
                            ? "text-special-button-hover border-special-button-hover"
                            : "text-center border-b-3 border-primary font-normal gap-6 text-[18px]"
                        }
                        
                      >
                       
                        <p className="flex text-center md:flex-row flex-col gap-2 justify-center items-center">
                        <CgProfile className="md:text-3xl" />User Profile
                        </p>
                      </NavLink>
                    </li>
                    <li className="mb-3 border-b-3">
                      <NavLink
                        to={"/dashboard/user-wishlist"}
                        end
                        className={({ isActive }) =>
                          isActive
                            ? "text-special-button-hover border-special-button-hover"
                            : "text-center border-b-3 border-primary font-normal gap-6 text-[18px]"
                        }
                      >
                        <p className="flex text-center md:flex-row flex-col gap-2 justify-center items-center">
                          
                          <GiSelfLove  className="md:text-3xl"/> Wishlist
                        </p>
                      </NavLink>
                    </li>
                    <li className="mb-3 border-b-3">
                      <NavLink
                        to={"/dashboard"}
                        end
                        className={({ isActive }) =>
                          isActive
                            ? "text-special-button-hover border-special-button-hover"
                            : "text-center border-b-3 border-primary font-normal gap-6 text-[18px]"
                        }
                      >
                        <p className="flex text-center md:flex-row flex-col gap-2 justify-center items-center">
                        <SiContactlesspayment className="md:text-3xl"/> Property bought
                        </p>
                      </NavLink>
                    </li>
                    <li className="mb-3 border-b-3">
                      <NavLink
                        to={"/dashboard"}
                        end
                        className={({ isActive }) =>
                          isActive
                            ? "text-special-button-hover border-special-button-hover"
                            : "text-center border-b-3 border-primary font-normal gap-6 text-[18px]"
                        }
                      >
                        <p className="flex text-center md:flex-row flex-col gap-2 justify-center items-center">
                         
                          <MdRateReview className="md:text-3xl"/> My reviews
                        </p>
                      </NavLink>
                    </li>
                  </ul>
                </>
              {/* )} */}
              <div className="divider  "></div>
              <ul className="md:p-4 p-1 md:flex md:flex-col md:justify-start md:items-start">
               
                <li className="mb-3 border-b-3">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-special-button-hover border-special-button-hover"
                        : "text-center border-b-3 border-primary font-normal gap-6 text-[18px]"
                    }
                  >
                    <p className="text-center flex md:flex-row flex-col gap-2 justify-center items-center">
                      <FaHome className="md:text-2xl"></FaHome> Home
                    </p>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
