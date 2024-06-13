import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProperty = () => {
  const { title, location, second_price, first_price, _id ,name,email} = useLoaderData();
  const { register, handleSubmit } = useForm();

  // const axiosPublic = useAxiosPublic();
  // console.log(axiosPublic)
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // const imageFile = { image: data.image[0] };
    // const res = await useAxiosPublic.post(image_hosting_api, imageFile, {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // });
   
 
      const propertyItem = {
        title: data.title,
        location: data.location,
        first_price: parseFloat(data.first_price),
        second_price: parseFloat(data.second_price),
      };
       console.log(propertyItem);
      const propertyRes = await useAxiosPublic.put(`/property/${_id}`, propertyItem);
      console.log(propertyRes.data);
      if (propertyRes.data.modifiedCount > 0) {
        // show success popup
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} is updated to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    
    // console.log("with image url", res.data);
  };
  return (
    <div>
      <div className="text-center m-5 text-4xl">
        <h1>Updated Property</h1>
      </div>
      <div className="max-w-7xl mx-auto  p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="name">
                Property Title
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                type="text"
                placeholder=" Title"
                id="title"
                defaultValue={title}
                {...register("title")}
                required
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="location"
              >
                Property Location
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                type="text"
                placeholder="Enter Location"
                id="location"
                name="location"
                defaultValue={location}
                {...register("location")}
                required
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="location"
              >
                Second Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                type="number"
                placeholder="Enter Second Price"
                id="location"
                name="second_price"
                defaultValue={second_price}
                {...register("second_price")}
                required
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="location"
              >
                Agent Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                defaultValue={name}
                {...register("name")}
                disabled
              />
            </div>

            <div className="flex-1">
              {/* <label className="block mb-2 dark:text-white" htmlFor="image">
                Property Image
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              /> */}

              <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                First Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                type="number"
                placeholder="Enter First Price"
                id="first_price"
                name="first_price"
                defaultValue={first_price}
                {...register("first_price")}
                required
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="location"
              >
                Agent Email
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                type="text"
                placeholder="Enter Second Price"
                id="email"
                name="email"
                defaultValue={email}
                {...register("email")}
                disabled
              />
            </div>
          </div>
          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#65bc7b]  bg-[#65bc7b] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Update Property"
          />

        </form>
      </div>
    </div>
  );
};

export default UpdateProperty;
