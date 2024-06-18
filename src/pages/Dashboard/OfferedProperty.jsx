import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const OfferedProperty = () => {
  const { title, location, image, second_price, first_price, _id, name, email, agentName, agentEmail,propertyId } = useLoaderData();
  console.log(name, email);
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    //console.log(data.offer_price);
    const offerPrice = parseInt(data.offer_price);

    if (offerPrice < data.first_price || offerPrice > data.second_price) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Offer',
        text: `The offer amount must be between ${data.first_price} and ${data.second_price}.`,
        confirmButtonText: 'Ok'
      });
      return;
    }

    const sellsItem = {
      title,
      location,
      propertyId,
      date: data.date,
      name: name,
      email: email,
      image,
      first_price: parseFloat(data.first_price),
      second_price: parseFloat(data.second_price),
      offer_price: data.offer_price,
      agentEmail,
      agentName,
      status: "pending"
    };
    console.log(sellsItem);
    const sellsRes = await axiosSecure.post('/sells', sellsItem);
    console.log(sellsRes);
    if (sellsRes.data.insertedId ) {
    
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `You offer for ${title} is successful.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div className="text-center m-5 text-4xl">
        <h1>Offered Property</h1>
      </div>
      <div className="max-w-6xl mx-auto p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-8">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="title">
                Property Title
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                type="text"
                placeholder="Title"
                id="title"
                defaultValue={title}
                {...register("title")}
                disabled
              />

              <label className="block mt-4 mb-2 dark:text-white" htmlFor="location">
                Property Location
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                type="text"
                placeholder="Enter Location"
                id="location"
                defaultValue={location}
                {...register("location")}
                disabled
              />

              <label className="block mt-4 mb-2 dark:text-white" htmlFor="agentName">
                Agent Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                type="text"
                placeholder="Enter Agent Name"
                id="agentName"
                defaultValue={agentName}
                {...register("agentName")}
                disabled
              />

              <label className="block mt-4 mb-2 dark:text-white" htmlFor="email">
                Buyer Email
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                type="text"
                placeholder="Enter Buyer Email"
                id="email"
                defaultValue={email}
                {...register("email")}
                disabled
              />

              <label className="block mb-2 mt-4 dark:text-white" htmlFor="date">
                Buying Date
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                type="date"
                placeholder="Enter Buying Date"
                id="date"
                {...register("date")}
                required
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

              <label className="block mb-2 mt-4 dark:text-white" htmlFor="offer_price">
                Offered Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                type="number"
                placeholder="Enter Offered Price"
                id="offer_price"
                {...register("offer_price")}
                required
              />

              <label className="block mb-2 mt-4 dark:text-white" htmlFor="first_price">
                First Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                type="number"
                placeholder="Enter First Price"
                id="first_price"
                defaultValue={first_price}
                {...register("first_price")}
                required
              />

              <label className="block mb-2 mt-4 dark:text-white" htmlFor="second_price">
                Second Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                type="number"
                placeholder="Enter Second Price"
                id="second_price"
                defaultValue={second_price}
                {...register("second_price")}
                required
              />

              <label className="block mb-2 mt-4 dark:text-white" htmlFor="name">
                Buyer Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                type="text"
                placeholder="Enter Buyer Name"
                id="name"
                defaultValue={name}
                {...register("name")}
                disabled
              />
            </div>
          </div>
          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#65bc7b] bg-[#65bc7b] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Offered"
          />
        </form>
      </div>
    </div>
  );
};

export default OfferedProperty;
