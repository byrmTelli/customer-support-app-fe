import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import CreateNewSupport from "./pages/CreateNewSupport/CreateNewSupport";
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
export const pages = [
  {
    title: "Home",
    path: "/",
    breadCrum: "/",
    component: <HomePage />,
    auth: [],
  },
  {
    title: "Yönetim Paneli",
    path: "/admin",
    breadCrum: "/admin",
    component: <AdminPanel />,
    auth: ["Admin"],
  },
  {
    title: "Yönetim Paneli",
    path: "/admin/dashboard",
    breadCrum: "/admin/dashboard",
    component: <Dashboard />,
    auth: ["Admin"],
  },
  {
    title: "Customers",
    path: "/admin/customers",
    breadCrum: "/admin/customers",
    component: <CustomersPanel />,
    auth: ["Admin"],
  },
  {
    title: "Users",
    path: "/admin/users",
    breadCrum: "/admin/users",
    component: <UsersPanel />,
    auth: ["Admin"],
  },
  {
    title: "Yeni Destek Talebi",
    path: "/support/create",
    breadCrum: "/support/create",
    component: <CreateNewSupport />,
    auth: ["Customer"],
  },
  {
    title: "Login",
    path: "/login",
    breadCrum: "/login",
    component: <Login />,
    auth: [],
  },
  {
    title: "Sıkça Sorulan Sorular",
    path: "/popular-questions",
    breadCrum: "/popular-questions",
    component: <PopularQuestionsPage />,
    auth: [],
  },
  {
    title: "Şiremi Unuttum",
    path: "/forget-password",
    breadCrum: "/forget-password",
    component: <ForgetPassword />,
    auth: [],
  },
  {
    title: "Kayıt Ol",
    path: "/register",
    breadCrum: "/register",
    component: <Register />,
    auth: [],
  },
  {
    title: "Hizmet Geçmişi",
    path: "/admin/tickets",
    breadCrum: "/admin/tickets",
    component: <TicketListPage />,
    auth: ["Admin"],
  },
  {
    title: "Ticket Status",
    path: "/ticket-status/:id",
    breadCrum: "/ticket-status",
    component: <TicketStatusPage />,
    auth: ["Admin"],
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
      <div className="flex h-full flex-col gap-4">
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
