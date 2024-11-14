import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    if (!userEmail) {
      navigate("/login");
    }
  }, [userEmail, navigate]);

  return (
    <main className="page-wrapper">
      
        <Sidebar />
        <Navbar />
      <div className="content-wrapper">
      
          <Outlet />
        
      </div>
    </main>
  );
};

export default Layout;
