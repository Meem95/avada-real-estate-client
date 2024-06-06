import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Root from "../layouts/Root";
// import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
 import AddFood from "../pages/Property/AddFood";
import PrivateRoute from "./PrivateRoute";
import AllAvailableFood from "../pages/AllProperty";
import FoodDetails from "../pages/Property/PropertyDetails";
import MyLists from "../pages/MyList/MyLists";
import UpdateFood from "../pages/UpdateFood";
//  import NotFoundPage from "../pages/NotFoundPage";
import Request from "../pages/MyList/Request";
import AllProperty from "../pages/AllProperty";
import PropertyDetails from "../pages/Property/PropertyDetails";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Dashboard/Profile";
import ManageUser from "../pages/Dashboard/ManageUser";
import ManageProperty from "../pages/Dashboard/ManageProperty";
import ReviewByAdmin from "../pages/Dashboard/ReviewByAdmin";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        //  errorElement: <NotFoundPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>, 
            //   loader: async () => {
            //     const [locationData, otherData] = await Promise.all([
            //         fetch('').then(res => res.json())
            //     ]);
            //     return { locationData, otherData };
            // }
               
            },
            
            {
                path: '/all-property',
               // element:<PrivateRoute> <AddFood></AddFood></PrivateRoute>
                element: <AllProperty></AllProperty>
            },
            {
                path: '/property-details',
                // element:<PrivateRoute> <PropertyDetails></PropertyDetails></PrivateRoute>,
                element:<PropertyDetails></PropertyDetails>,
              //  loader:({params})=>fetch(`https://b9a11-food-server.vercel.app/food/${params.id}`)
            },
            
            {
                path: '/my-list/',
                element:<PrivateRoute> <MyLists></MyLists></PrivateRoute>,
                //loader:()=>fetch('https://b9a11-food-server.vercel.app/food')

            },
            
            {
                path: '/my-request-list/',
                element:<PrivateRoute> <Request></Request></PrivateRoute>,
                loader:()=>fetch('https://b9a11-food-server.vercel.app/food')

            },
            {
                path: 'update-my-list/:id', 
                element:<PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>, 
                loader: ({params}) => fetch(`https://b9a11-food-server.vercel.app/food/${params.id}`)
              },
            
            {
                path: '/available-food',
                element: <AllAvailableFood></AllAvailableFood>,
                loader:()=>fetch('https://b9a11-food-server.vercel.app/food')
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            },
          
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        // element: <Dashboard></Dashboard>,
        children: [
          // normal user routes
          {
            path: 'profile',
            element: <Profile></Profile>
          },
          {
            path: 'manage-user',
            element: <ManageUser></ManageUser>
          },
          {
            path: 'manage-property',
            element: <ManageProperty></ManageProperty>
          },
          {
            path: 'manage-review-by-admin',
            element: <ReviewByAdmin></ReviewByAdmin>
          },
         
        ]
      }

]) 
export default router;