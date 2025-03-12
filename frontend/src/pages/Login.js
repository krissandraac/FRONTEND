import React, { useState } from "react";
import MenuInventory from "./menuInventory"; // Import sidebar
import { FaEdit, FaTrash } from "react-icons/fa";
import "../styles/inventoryUserlist.css";

const InventoryUserList = ({ hideContent = false }) => {
  // Sample user data
  const [users, setUsers] = useState([
    { id: 1, empNum: "32012345", firstName: "Marshall", mi: "D", surname: "Teach", divCode: "210321267", deptCode: "210321267" },
    { id: 2, empNum: "32012346", firstName: "Mel Chor", mi: "D", surname: "Garp", divCode: "210321268", deptCode: "210321268" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [entriesToShow, setEntriesToShow] = useState(15);
  const [modalData, setModalData] = useState(null);

  return (
    <div className="inventory-userlist-container">
      {/* Sidebar */}
      <MenuInventory />

      {/* Hide content when hideContent is true */}
      {!hideContent && (
        <div className="main-content">
          {/* Filters & Search */}
          <div className="filter-container">
            <label>Show 
              <select value={entriesToShow} onChange={(e) => setEntriesToShow(e.target.value)}>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="25">25</option>
              </select> entries
            </label>

            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
              <option value="">Select Department</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
              <option value="Planning">Planning</option>
              <option value="Sales">Sales</option>
            </select>

            <select value={selectedDivision} onChange={(e) => setSelectedDivision(e.target.value)}>
              <option value="">Select Division</option>
              <option value="Division A">Division A</option>
              <option value="Division B">Division B</option>
              <option value="Division C">Division C</option>
            </select>
          </div>

          {/* User Table */}
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Employee Number</th>
                <th>First Name</th>
                <th>M.I.</th>
                <th>Surname</th>
                <th>Division Code</th>
                <th>Department Code</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.slice(0, entriesToShow).map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.empNum}</td>
                  <td>{user.firstName}</td>
                  <td>{user.mi}</td>
                  <td>{user.surname}</td>
                  <td>{user.divCode}</td>
                  <td>{user.deptCode}</td>
                  <td>
                    <FaEdit className="edit-icon" onClick={() => setModalData(user)} />
                    <FaTrash className="delete-icon" onClick={() => setUsers(users.filter(u => u.id !== user.id))} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            <button>Previous</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryUserList;
