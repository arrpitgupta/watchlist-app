import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    setUserEmail(localStorage.getItem("userEmail"));
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("watchlist");
    localStorage.removeItem("userEmail");
    setUserEmail(null);
    navigate("/login");
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
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={sidebarRef}
    >
      <div className="sidebar-top">
        {/* <div className="sidebar-brand">
          <span className="sidebar-brand-text">Watchlists</span>
        </div> */}
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
            <li className="menu-item">
              <Link to="/watchlist" className="menu-link">
                <span className="menu-link-icon">📽️</span>
                <span className="menu-link-text">Watchlist</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            {userEmail ? (
              <li className="menu-item">
                <button onClick={handleLogout} className="menu-link">
                  <span className="menu-link-icon">🔓</span>
                  <span className="menu-link-text">Logout</span>
                </button>
              </li>
            ) : (
              <li className="menu-item">
                <Link to="/login" className="menu-link">
                  <span className="menu-link-icon">🔒</span>
                  <span className="menu-link-text">Login</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Sidebar;
