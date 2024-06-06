import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return <div className="flex justify-center h-screen items-center"> <span className="loading loading-dots loading-lg"></span></div>
    }

    if (user) {
        return children;
    }
    else{

        return <Navigate state={location.pathname} ></Navigate>;
    }

};
PrivateRoute.propTypes = {
    children:PropTypes.node,
}

export default PrivateRoute;