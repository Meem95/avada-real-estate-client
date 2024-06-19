import React, { useEffect, useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { IoStar } from 'react-icons/io5';
import { FaStarHalf } from 'react-icons/fa';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import axios from 'axios';

const PropertyDetails = () => {
  const { title, location, image, second_price, first_price, _id, agentName, agentEmail, description } = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);


 
const {data: reviewsProperty = [], isPending: loading, refetch} = useQuery({
  queryKey: ['reviewsProperty'], 
  queryFn: async() =>{
      const res = await axios.get(`http://localhost:5000/reviews-property/${_id}`);
      return res.data;
  }
})


console.log(reviewsProperty)
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddToWishList = async () => {
    if (user && user.email) {
      try {
        const checkRes = await axiosSecure.get(`/wishlists/check/${user.email}/${_id}`);
        if (checkRes.data.exists) {
          Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: `${title} is already in your wishlist`,
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          const wishlistItem = {
            propertyId: _id,
            email: user.email,
            name: user.displayName,
            title,
            location,
            image,
            offer_price: "",
            first_price,
            second_price,
            agentEmail,
            agentName,
          };
          const res = await axiosSecure.post('/wishlists', wishlistItem);
          if (res.data.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
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
        title: 'You are not Logged In',
        text: 'Please login to add to the wishlist?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, login!'
      }).then((result) => {
        if (result.isConfirmed) {
          // Navigate to login page
          // You should implement your own navigation method or use a router library like react-router-dom
          // Example: history.push('/login');
        }
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reviewText = event.target.review.value;
    
    try {
      const newReview = {
        review: reviewText,
        email: user.email,
        name: user.displayName,
        userImage: user.photoURL,
        propertyId: _id,
        title
      };

      const res = await axiosSecure.post('/reviews', newReview);
      if (res.data.insertedId) {
        Swal.fire('Review Submitted', reviewText, 'success');
        setIsModalOpen(false);
        refetch(); // Fetch reviews again after submitting a new review
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto text-black my-10">
      <Helmet>
        <title>Avada | {title}</title>
      </Helmet>
      <div className="text-black bg-gray-100 shadow-2xl">
        <div className="max-w-5xl mx-auto flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card left */}
            <div className="flex flex-col justify-center">
              <div className="overflow-hidden">
                <div className="img-showcase flex w-full transition-all duration-500 ease-in-out h-full">
                  <img src={image} alt="" />
                </div>
              </div>
            </div>
            {/* Card right */}
            <div className="p-8">
              <h2 className="text-3xl capitalize font-bold text-gray-800 mb-4 relative">
                {title}
                <span className="absolute left-0 bottom-0 h-1 w-20 bg-gray-800 "></span>
              </h2>
              <span className="font-bold pb-4">Agent: {agentName}</span>
              {/* Star rating */}
              <div className="text-[#65bc7b] mb-4 flex">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <FaStarHalf />
              </div>
              {/* Price */}
              <div className="mb-4 text-lg font-semibold">
                <p>
                  Price:{' '}
                  <span className="text-[#65bc7b]">
                    ${first_price} - ${second_price}
                  </span>
                </p>
              </div>
              {/* Property description */}
              <div className="mb-4">
                <h2 className="text-2xl text-gray-800 capitalize mb-2">
                  about this Property:{' '}
                </h2>
                <p className="text-sm text-gray-600 mb-2">{description}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {/* Property details */}
                  <li className="flex items-center">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/checked.png"
                      alt="check icon"
                      className="w-4 h-4 mr-2"
                    />
                    Location:{' '}
                    <span className="font-normal ml-1">{location}</span>
                  </li>
                  <li className="flex items-center">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/checked.png"
                      alt="check icon"
                      className="w-4 h-4 mr-2"
                    />
                    Status:{' '}
                    <span className="font-normal ml-1">Available for Rent</span>
                  </li>
                  <li className="flex items-center">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/checked.png"
                      alt="check icon"
                      className="w-4 h-4 mr-2"
                    />
                    Type: <span className="font-normal ml-1">Apartment</span>
                  </li>
                </ul>
              </div>
              {/* Buttons */}
              <div className="mb-6 flex items-center">
                <button
                  onClick={handleAddToWishList}
                  className="bg-[#65bc7b] text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity duration-500 ease-in-out"
                >
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
                <label htmlFor="review" className="block text-gray-700">
                  Your Review
                </label>
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

      {/* Reviews section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        {reviewsProperty.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {reviewsProperty.map((review) => (
              <li key={review._id} className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={review.userImage}
                      alt={review.name}
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.createdAt}</p>
                    </div>
                    <p className="text-sm text-gray-500">{review.review}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;
