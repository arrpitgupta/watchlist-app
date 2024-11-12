import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <main className="page-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
