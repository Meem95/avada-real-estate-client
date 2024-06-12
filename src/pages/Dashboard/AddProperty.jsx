import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddProperty = () => {
  const { user } = useContext(AuthContext);
  const handleAddProperty = event => {
  
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const location = form.location.value;
    const image = form.image.value;
    const status = "pending";
    const first_price = form.first_price.value;
    const second_price = form.second_price.value;
    const email = user.email;
    const name = user.displayName;
    const userImage = user.photoURL;

    const newProperty = { title, location,image, status, first_price, second_price, email ,name,userImage}

    console.log(newProperty);

    //send data to the server
    fetch('http://localhost:5000/property', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newProperty)
    })
        .then(res => res.json())
        .then(data => {
         
            console.log(data);
            form.reset();
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Property Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
}
  return (
    <div>
      <div className="text-center m-5 text-4xl">
        <h1>Add Property</h1>
      </div>
      <div className="max-w-6xl mx-auto  p-4">
        <form onSubmit={handleAddProperty}>
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
                id="second_price"
                name="second_price"
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
                required
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
                required
              />
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
