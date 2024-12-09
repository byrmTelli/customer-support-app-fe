import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import PopularQuestionsPage from "./pages/PopularQuestions/PopularQuestionsPage";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Register from "./pages/Register/Register";
import TicketListPage from "./pages/AdminPanel/TicketList/TicketList";
import Dashboard from "./pages/AdminPanel/Dashboard/Dashboard";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import CustomersPanel from "./pages/AdminPanel/Customers/CustomersPanel";
import UsersPanel from "./pages/AdminPanel/Users/UsersPanel";
import TicketStatusPage from "./pages/TicketStatusPage/TicketStatusPage";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProfile from "./pages/AdminPanel/Users/UserProfile/UserProfile";
import CreateNewSupport from "./pages/CustomerPanel/CreateNewSupport/CreateNewSupport";
import CustomerProfile from "./pages/CustomerPanel/CustomerProfile/CustomerProfile";
import HelpdeskProfile from "./pages/HelpdeskPanel/HelpdeskProfile/HelpdeskProfile";
import AdminProfile from "./pages/AdminPanel/AdminProfile/AdminProfile";
import CategoriesPage from "./pages/AdminPanel/CategoriesPage/CategoriesPage";
import NotificationsPage from "./pages/AdminPanel/NotificationsPage/NotificationsPage";

export const pages = [
  {
    path: "/",
    breadCrum: "",
    component: <HomePage />,
    auth: [],
  },
  {
    title: "Profile",
    path: "/admin/profile",
    breadCrum: "/admin/profile",
    component: <AdminProfile />,
    auth: ["Admin"],
  },
  {
    path: "/admin",
    breadCrum: "admin panel",
    component: <AdminPanel />,
    auth: ["Admin"],
  },
  {
    path: "/admin/dashboard",
    breadCrum: "/admin/dashboard",
    component: <Dashboard />,
    auth: ["Admin"],
  },
  {
    path: "/admin/customers",
    breadCrum: "/admin/customers",
    component: <CustomersPanel />,
    auth: ["Admin"],
  },
  {
    path: "/admin/categories/:id",
    breadCrum: "/admin/categories",
    component: <CategoriesPage />,
    auth: ["Admin"],
  },
  {
    path: "/admin/users",
    breadCrum: "/admin/users",
    component: <UsersPanel />,
    auth: ["Admin"],
  },
  {
    path: "/admin/user/:id",
    breadCrum: "/User Informations",
    component: <UserProfile />,
    auth: ["Admin"],
  },
  {
    path: "customer/ticket/create",
    breadCrum: "customer/ticket/create",
    component: <CreateNewSupport />,
    auth: ["Admin", "Customer"],
  },
  {
    path: "/login",
    breadCrum: "login",
    component: <Login />,
    auth: [],
  },
  {
    path: "/popular-questions",
    breadCrum: "popular-questions",
    component: <PopularQuestionsPage />,
    auth: [],
  },
  {
    path: "/forget-password",
    breadCrum: "forget-password",
    component: <ForgetPassword />,
    auth: [],
  },
  {
    path: "/register",
    breadCrum: "register",
    component: <Register />,
    auth: [],
  },
  {
    path: "/admin/tickets",
    breadCrum: "/admin/tickets",
    component: <TicketListPage />,
    auth: ["Admin"],
  },
  {
    path: "/admin/notifications",
    breadCrum: "/admin/notifications",
    component: <NotificationsPage />,
    auth: ["Admin"],
  },
  {
    path: "/ticket-status/:id",
    breadCrum: "ticket-status",
    component: <TicketStatusPage />,
    auth: ["Admin", "Customer Support", "Customer"],
  },
  {
    path: "customer/profile",
    breadCrum: "/customer/profile",
    component: <CustomerProfile />,
    auth: ["Customer"],
  },
  {
    path: "customer-support/profile",
    breadCrum: "/customer-support/profile",
    component: <HelpdeskProfile />,
    auth: ["Customer Support"],
  },
];

function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      <ToastContainer
        rtl={false}
        closeOnClick
        draggable
        pauseOnHover
        theme="dark"
        pauseOnFocusLoss
        hideProgressBar
        newestOnTop={false}
        position="top-left"
        autoClose={500}
      />
      <Navbar />
      <div className="flex h-full flex-col">
        <Routes>
          {pages.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={
                item.auth.length > 0 ? (
                  <ProtectedRoute allowedRoles={item.auth}>
                    {item.component}
                  </ProtectedRoute>
                ) : (
                  item.component
                )
              }
            />
          ))}
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
