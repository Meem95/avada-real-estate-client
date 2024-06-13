import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import { IoStar   } from "react-icons/io5";
import { FaStarHalfStroke } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const PropertyDetails = () => {
  const { title, location,image, second_price, first_price, _id ,name,email} = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
 


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

const handleAddToWishList = async () => {
  if (user && user.email) {
    try {
      const checkRes = await axiosSecure.get(`/wishlists/check/${user.email}/${_id}`);
      if (checkRes.data.exists) {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: `${title} is already in your wishlist`,
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        const wishlistItem = {
          propertyId: _id,
          email:user.email,
          name:user.displayName,
          title,
          location,
          image,
          first_price,
          second_price,
          agentEmail:email,
          agentName:name,
          
        };
        const res = await axiosSecure.post('/wishlists', wishlistItem);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${title} added to your wishlist`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  } else {
    Swal.fire({
      title: "You are not Logged In",
      text: "Please login to add to the wishlist?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, login!"
    }).then((result) => {
      if (result.isConfirmed) {
      
        navigate('/login', { state: { from: location } });
      }
    });
  }
};
  const handleSubmit = (event) => {
    event.preventDefault();
    const review = event.target.review.value;
    const email = user.email;
    const name = user.displayName;
    const userImage = user.photoURL;

    const newReview = { review, email ,name,userImage}
    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(newReview)
  })
      .then(res => res.json())
      .then(data => {
       
          console.log(data);
        
          if(data.insertedId){
            Swal.fire('Review Submitted', review, 'success');
            setIsModalOpen(false);
          }
      })
   
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto text-black my-10">
      <Helmet>
        <title>Avada | PropertyDetails</title>
      </Helmet>
      <div className="text-black bg-gray-100 shadow-2xl">
        <div className="max-w-5xl mx-auto flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card left */}
            <div className="flex flex-col justify-center">
              <div className="overflow-hidden">
                <div className="img-showcase flex w-full transition-all duration-500 ease-in-out h-full">
                 {/* <IoIosCheckmarkCircle /> */}
                </div>
              </div>
            </div>
            {/* Card right */}
            <div className="p-8">
              <h2 className="text-3xl capitalize font-bold text-gray-800 mb-4 relative">
               {title}
                <span className="absolute left-0 bottom-0 h-1 w-20 bg-gray-800 "></span>
              </h2>
              <span className="font-bold pb-4">Agent: {name}</span>
             
              <div className="text-[#65bc7b] mb-4 flex">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <FaStarHalfStroke />
               
              </div>
              <div className="mb-4 text-lg font-semibold">
                <p> Price: <span className="text-[#65bc7b]">{first_price} - {second_price}</span></p>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl text-gray-800 capitalize mb-2">about this Property: </h2>
                <p className="text-sm text-gray-600 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
          
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/checked.png" alt="check icon" className="w-4 h-4 mr-2" />
                    Color: <span className="font-normal ml-1">Black</span>
                  </li>
                  <li className="flex items-center">
                    <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/checked.png" alt="check icon" className="w-4 h-4 mr-2" />
                    Available: <span className="font-normal ml-1">in stock</span>
                  </li>
                  <li className="flex items-center">
                    <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/checked.png" alt="check icon" className="w-4 h-4 mr-2" />
                    Category: <span className="font-normal ml-1">Shoes</span>
                  </li>
                </ul>
              </div>
              <div className="mb-6 flex items-center">
                <button  onClick={handleAddToWishList} className="bg-[#65bc7b] text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity duration-500 ease-in-out">
                  Add to Wishlist <i className="fas fa-shopping-cart"></i>
                </button>
                <button 
                  onClick={toggleModal}
                  className="bg-gray-800 text-white px-4 py-2 rounded-full ml-2 hover:opacity-90 transition-opacity duration-500 ease-in-out"
                >
                  Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">Write a Review</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="review" className="block text-gray-700">Your Review</label>
                <textarea
                  id="review"
                  name="review"
                  rows="5"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-600 transition duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
