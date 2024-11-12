import { Link } from "react-router-dom";
import  { useEffect, useRef, useState } from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`} ref={sidebarRef}>
      <div className="sidebar-top">
        <div className="sidebar-brand">
          
          <span className="sidebar-brand-text">Watchlists</span>
        </div>
        <button className="sidebar-close-btn" onClick={toggleSidebar}>
          ×
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">🏠</span>
                <span className="menu-link-text">Home</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/login" className="menu-link">
                <span className="menu-link-icon">🔒</span>
                <span className="menu-link-text">Login</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
