import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_kEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProperty = () => {
  const {
    title,
    location,
    second_price,
    image,
    first_price,
    _id,
    agentName,
    agentEmail,
    agentImage,
    description,
  } = useLoaderData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(image);
  const [selectedImage, setSelectedImage] = useState(null);
  const [response, setResponse] = useState(null);
  console.log(selectedImage)
  const handleFileChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const axiosPublic = useAxiosPublic();
  // console.log(axiosPublic)
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    // console.log(imageFile.image);
    if(imageFile.image !== undefined){
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },

      },
     
    );
    setResponse(res)
    }
    console.log(response)
    const propertyItem = {
      title: data.title,
      location: data.location,
      description: data.description,
      image: response?.data?.display_url || image,
      agentEmail: agentEmail,
      agentName: agentName,
      agentImage: agentImage,
      first_price: parseFloat(data.first_price),
      second_price: parseFloat(data.second_price),
    };
    console.log(propertyItem);
    const propertyRes = await axiosSecure.put(`/property/${_id}`, propertyItem);
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
                id="agentName"
                name="agentName"
                defaultValue={agentName}
                {...register("agentName")}
                disabled
              />
            </div>

            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Property Image
              </label>
              <input
                {...register("image")}
                onChange={handleFileChange}
                type="file"
                className="file-input w-full max-w-xs"
              />

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
                htmlFor="email"
              >
                Agent Email
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#65bc7b]"
                type="text"
                placeholder="Enter Second Price"
                id="agentEmail"
                name="agentEmail"
                defaultValue={agentEmail}
                {...register("agentEmail")}
                disabled
              />
              <label className="label">
                <span className="label-text">Description*</span>
              </label>
              <textarea
                placeholder="Enter Property Description"
                defaultValue={description}
                {...register("description", { required: true })}
                className="textarea textarea-bordered w-full h-34"
              ></textarea>
              {errors.description && (
                <p className="text-red-600">Description is required</p>
              )}
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
