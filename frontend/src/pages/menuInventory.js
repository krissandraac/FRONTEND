import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { FaBars, FaUsers, FaClipboardList, FaSignOutAlt, FaTools, FaFileImport } from "react-icons/fa";
import { MdAssignment, MdManageAccounts, MdDevices, MdList } from "react-icons/md";
import "../styles/menuInventory.css";
import logo from "../assets/mmpc-logo.png";

const MenuInventory = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={`menu-container ${isCollapsed ? "collapsed" : ""}`}>
      {/* Header */}
      <div className="header">
        <span className="header-title">Mitsubishi Motors Philippines Corporation</span>
      </div>

      {/* Sidebar and Content */}
      <div className="content-container">
        {/* Sidebar */}
        <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
          <img src={logo} alt="Mitsubishi Logo" className={`sidebar-logo ${isCollapsed ? "hidden" : ""}`} />
          <ul>
            <li className={location.pathname === "/inventory-dashboard" ? "active" : ""} onClick={() => handleNavigation("/inventory-dashboard")}>
              <FaClipboardList />
              <span className={isCollapsed ? "hidden" : ""}>Dashboard</span>
            </li>
            <li className={location.pathname === "/inventory-userlist" ? "active" : ""} onClick={() => handleNavigation("/inventory-userlist")}>
              <FaUsers />
              <span className={isCollapsed ? "hidden" : ""}>User List</span>
            </li>
            <li className={location.pathname === "/device-list" ? "active" : ""} onClick={() => handleNavigation("/device-list")}>
              <MdList />
              <span className={isCollapsed ? "hidden" : ""}>Device List</span>
            </li>
            <li className={location.pathname === "/user-management" ? "active" : ""} onClick={() => handleNavigation("/user-management")}>
              <MdManageAccounts />
              <span className={isCollapsed ? "hidden" : ""}>User Management</span>
            </li>
            <li className={location.pathname === "/device-management" ? "active" : ""} onClick={() => handleNavigation("/device-management")}>
              <MdDevices />
              <span className={isCollapsed ? "hidden" : ""}>Device Management</span>
            </li>
            <li className={location.pathname === "/device-assignment" ? "active" : ""} onClick={() => handleNavigation("/device-assignment")}>
              <MdAssignment />
              <span className={isCollapsed ? "hidden" : ""}>Device Assignment</span>
            </li>
            <li className={location.pathname === "/repair-management" ? "active" : ""} onClick={() => handleNavigation("/repair-management")}>
              <FaTools />
              <span className={isCollapsed ? "hidden" : ""}>Repair Management</span>
            </li>
            <li className={location.pathname === "/import-files" ? "active" : ""} onClick={() => handleNavigation("/import-files")}>
              <FaFileImport />
              <span className={isCollapsed ? "hidden" : ""}>Import Files</span>
            </li>
            <li className={`logout ${location.pathname === "/" ? "active" : ""}`} onClick={() => handleNavigation("/")}>
              <FaSignOutAlt />
              <span className={isCollapsed ? "hidden" : ""}>Logout</span>
            </li>
          </ul>
        </div>

        {/* Hide Welcome Message if on Dashboard */}
        {location.pathname !== "/inventory-dashboard" && (
          <div className="menu-main-content">
            <h2>Welcome!</h2>
            <p>Please select a page to navigate through the system.</p>
          </div>
        )}
      </div>

      {/* Sidebar Toggle Button */}
      <button className="menu-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>
    </div>
  );
};

export default MenuInventory;
