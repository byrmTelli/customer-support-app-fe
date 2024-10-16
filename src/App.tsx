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
import TicketHistoryPage from "./pages/TicketHistory/TicketHistoryPage";
import Dashboard from "./pages/AdminPanel/Dashboard/Dashboard";

export const pages = [
  {
    title: "Home",
    path: "/",
    breadCrum: "/",
    component: <HomePage />,
  },
  {
    title: "Yönetim Paneli",
    path: "/admin",
    breadCrum: "/admin",
    component: <AdminPanel />,
  },
  {
    title: "Yönetim Paneli",
    path: "/admin/dashboard",
    breadCrum: "/admin/dashboard",
    component: <Dashboard />,
  },
  {
    title: "Yeni Destek Talebi",
    path: "/support/create",
    breadCrum: "/support/create",
    component: <CreateNewSupport />,
  },
  {
    title: "Login",
    path: "/login",
    breadCrum: "/login",
    component: <Login />,
  },
  {
    title: "Sıkça Sorulan Sorular",
    path: "/popular-questions",
    breadCrum: "/popular-questions",
    component: <PopularQuestionsPage />,
  },
  {
    title: "Şiremi Unuttum",
    path: "/forget-password",
    breadCrum: "/forget-password",
    component: <ForgetPassword />,
  },
  {
    title: "Kayıt Ol",
    path: "/register",
    breadCrum: "/register",
    component: <Register />,
  },
  {
    title: "Hizmet Geçmişi",
    path: "/ticket-history",
    breadCrum: "/ticket-history",
    component: <TicketHistoryPage />,
  },
];

function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="">
        <Navbar />
      </div>
      <div className="flex flex-col gap-4">
        <Routes>
          {pages.map((item, index) => (
            <Route key={index} path={item.path} element={item.component} />
          ))}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
