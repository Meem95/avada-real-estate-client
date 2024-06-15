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
import AddProperty from "../pages/Dashboard/AddProperty";
import PropertyAddedByAgent from "../pages/Dashboard/PropertyAddedByAgent";
import UpdateProperty from "../pages/Dashboard/UpdateProperty";
import SoldProperty from "../pages/Dashboard/SoldProperty";
import RequestedProperty from "../pages/Dashboard/RequestedProperty";
import UserWishlist from "../pages/Dashboard/UserWishlist";
import OfferedProperty from "../pages/Dashboard/OfferedProperty";
import BoughtProperty from "../pages/Dashboard/BoughtProperty";
import ManageReviewByUser from "../pages/Dashboard/ManageReviewByUser";
import AdminRoute from "./AdminRoute";
import UserProfile from "../pages/Dashboard/UserProfile";
import AgentProfile from "../pages/Dashboard/AgentProfile";
import ManageAdevertiseProperty from "../pages/Dashboard/ManageAdevertiseProperty";


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
                element: <PrivateRoute><AllProperty></AllProperty></PrivateRoute>
            },
            {
                path: '/property-details/:id',
                // element:<PrivateRoute> <PropertyDetails></PropertyDetails></PrivateRoute>,
                element:<PrivateRoute> <PropertyDetails></PropertyDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/property/${params.id}`)
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
          //admin's routes
          {
            path: 'profile',
            element: 
            <AdminRoute><Profile></Profile></AdminRoute>
          },
          {
            path: 'manage-user',
            element: <AdminRoute> <ManageUser></ManageUser></AdminRoute>
          },
          {
            path: 'manage-property',
            element: <AdminRoute><ManageProperty></ManageProperty></AdminRoute> ,
          },
          {
            path: 'manage-review-by-admin',
            element: <AdminRoute><ReviewByAdmin></ReviewByAdmin></AdminRoute> ,
          },
          {
            path: 'manage-advertise-by-admin',
            element: <AdminRoute><ManageAdevertiseProperty></ManageAdevertiseProperty></AdminRoute> ,
          },
          {
            path: 'agent-profile',
            element:<AgentProfile></AgentProfile>
          },
          {
            path: 'agent/add-property',
            element: <AddProperty></AddProperty>
          },
         
          {
            path: 'agent/property-list',
            element: <PropertyAddedByAgent></PropertyAddedByAgent>
          },
          {
            path: 'update-property/:id',
            element: <UpdateProperty></UpdateProperty>,
            loader: ({params}) => fetch(`http://localhost:5000/property/${params.id}`)
          },
          {
            path: 'sold-property',
            element: <SoldProperty></SoldProperty>
          },
          {
            path: 'requested-property',
            element: <RequestedProperty></RequestedProperty>
          },

          /// All User Route
          {
            path: 'user-wishlist',
            element: <UserWishlist></UserWishlist>
          },
          {
            path: 'user-profile',
            element:<UserProfile></UserProfile>
          },
          {
            path: 'offer-property/:id',
            element: <OfferedProperty></OfferedProperty>,
            loader:({params})=>fetch(`http://localhost:5000/offer-property/${params.id}`)
          },
          {
            path: 'bought-property',
            element: <BoughtProperty></BoughtProperty>
          },
         
          {
            path: 'manage-review-by-user',
            element: <ManageReviewByUser></ManageReviewByUser>,
         
          },
         
        ]
      }

]) 
export default router;