import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import CustomerPanel from "./pages/CustomerPanel/AdminPanel";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      <div className="h-[60px]">
        <Navbar />
      </div>
      <div className="flex-grow overflow-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/customer" element={<CustomerPanel />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
