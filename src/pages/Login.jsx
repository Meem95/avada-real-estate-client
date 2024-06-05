import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import app from "../firebase/firebase.config";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import axios from 'axios';
import r2 from "../assets/images/reg.json";
import Lottie from "lottie-react";

const Login = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  console.log(user)
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log('location i n the login page', location)
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        const email = result.user.email;
        console.log(loggedInUser);
        setUser(loggedInUser);
        const user = { email };
        axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
          .then(res => {
            console.log(res.data)
            if (res.data.success) {
              navigate(location?.state ? location?.state : '/')
            }
          })
        Swal.fire({
          title: 'Success!',
          text: 'Login Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        navigate(location?.state ? location.state : '/');
      }).catch((error) => {
        console.log(error.message);
        Swal.fire({
          title: 'error!',
          text: 'Invalid email or password. Please try again',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      });
  }
 


  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        //console.log(result.user);
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };
        axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
          .then(res => {
            console.log(res.data)
            if (res.data.success) {
              navigate(location?.state ? location?.state : '/')
            }
          })
        Swal.fire({
          title: 'Success!',
          text: 'Login Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        // navigate after login
        // navigate(location?.state ? location.state : '/');

      })
      .catch(error => {
        console.error(error);

        Swal.fire({
          title: 'error!',
          text: 'Invalid email or password. Please try again',
          icon: 'error',
          confirmButtonText: 'Sad'
        })

      })
  };
  return (
    <div>
      <Helmet>
        <title> Avada | Login</title>
      </Helmet>
      <div className="my-8">
      <h1 className="text-4xl font-bold text-center">Login</h1></div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-100  shadow-2xl text-black mx-auto mb-14">
        
        <Lottie className="h-28 w-full" animationData={r2} />
        <form onSubmit={handleLogin} noValidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-black">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-black">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white text-lg bg-lime-600">
            Login
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-black">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-black">
          Do not have an account?
          <Link to="/register">
            <a
              rel="noopener noreferrer"
              href="#"
              className="underline text-black"
            >
              {" "}
            Sign up
          </a>
          </Link>

        </p>
      </div>
    </div>
  );
};

export default Login;