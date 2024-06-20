import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import UseSeller from "../hooks/useSeller";


const AgentRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isSeller, isSellerLoading] = UseSeller();
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <progress className="progress w-56 "></progress>
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AgentRoute;