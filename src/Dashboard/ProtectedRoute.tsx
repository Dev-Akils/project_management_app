import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
    children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
