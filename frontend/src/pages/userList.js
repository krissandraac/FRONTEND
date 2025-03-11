import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../styles/menuInventory.css";
import "../pages/inventoryDashboard.js";

const UserList = () => {
  const users = [
    { id: 1, empNumber: "32012345", firstName: "Marshall", middleInitial: "D", lastName: "Teach", divisionCode: "210321267", deptCode: "210321267" },
    { id: 2, empNumber: "32012346", firstName: "Mel Chor", middleInitial: "D", lastName: "Garp", divisionCode: "210321268", deptCode: "210321268" },
  ];

  return (
    <div className="userlist-container">
      <h2>User List</h2>
      <div className="userlist-table-container">
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Employee Number</th>
              <th>First Name</th>
              <th>M.I</th>
              <th>Surname</th>
              <th>Division Code</th>
              <th>Department Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.empNumber}</td>
                <td>{user.firstName}</td>
                <td>{user.middleInitial}</td>
                <td>{user.lastName}</td>
                <td>{user.divisionCode}</td>
                <td>{user.deptCode}</td>
                <td className="userlist-actions">
                  <FaEdit className="userlist-edit-icon" />
                  <FaTrash className="userlist-delete-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
