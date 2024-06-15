import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Helmet } from "react-helmet";
import r2 from "../assets/images/reg.json";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = data => {
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        const createdAt = result.user?.metadata?.creationTime;
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
              photoURL: data.photoURL,
              createdAt: createdAt
            };
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
                }
              });
          })
          .catch(error => console.log(error));
      });
  };

  return (
    <div>
      <Helmet>
        <title>H-food | Registrations</title>
      </Helmet>
      <div className="my-8">
        <h1 className="text-4xl font-bold text-center">Registrations</h1>
      </div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-100 shadow-2xl text-black mx-auto my-14">
        <Lottie className="h-28 w-full" animationData={r2} />
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-black">Username</label>
            <input
              type="text"
              name="displayName"
              id="username"
              placeholder="Username"
              {...register("name", { required: true })}
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-black">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photoURL" className="block text-black">photoURL</label>
            <input
              type="text"
              name="photoURL"
              id="photoURL"
              placeholder="photoURL"
              {...register("photoURL", { required: true })}
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-black">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
              })}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400"
            />
            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be at least 6 characters</p>}
            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase, one lowercase, one number, and one special character.</p>}
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white bg-lime-600 font-semibold">
            Registrations
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 text-black">
          Already have an account? <Link to="/login" className="underline text-black">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
