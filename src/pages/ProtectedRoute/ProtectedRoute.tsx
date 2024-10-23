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

  console.log("USER: ", user);
  if (!user || !user.role) {
    return <div>Loading...</div>;
  }

  const userRole = user.role?.name || "";

  if (!user.isAuthenticated || !allowedRoles.includes(userRole)) {
    return <Navigate to="/not-found" />;
  }

  return children;
}
