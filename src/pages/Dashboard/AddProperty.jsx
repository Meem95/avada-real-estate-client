import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_kEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddProperty = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    //  console.log(res.data)
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const newProperty = {
        title: data.title,
        location: data.location,
        description: data.description,
        image: res.data.data.display_url,
        status: "pending",
        first_price: parseFloat(data.first_price),
        second_price: parseFloat(data.second_price),
        agentEmail: user.email,
        agentName: user.displayName,
        agentImage: user.photoURL,
        agentRole: "agent",
        addvertise: "no",
      };
      //
      const propertyRes = await axiosSecure.post("/property", newProperty);
      console.log(propertyRes.data);
      if (propertyRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} is added to the Property.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <div className="text-center m-5 text-4xl">
        <h1>Add Property</h1>
      </div>
      <div className="max-w-6xl mx-auto  p-4">
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
                name="title"
                {...register("title", { required: true })}
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
                {...register("location", { required: true })}
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
                id="second_price"
                name="second_price"
                {...register("second_price", { required: true })}
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
                {...register("image", { required: true })}
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
                {...register("first_price", { required: true })}
              />
              <label className="label">
                <span className="label-text">Description*</span>
              </label>
              <textarea
                placeholder="Enter Property Description"
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
            value="Add Property"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
