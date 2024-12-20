import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles: string[];
}

export default function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const user = useAppSelector((state) => state.user);

  if (!user.isAuthenticated || !user.role?.name) {
    return <Navigate to="/" />; 
  }

  const userRole = user.role?.name || "";

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/not-found" />;
  }

  return children;
}
