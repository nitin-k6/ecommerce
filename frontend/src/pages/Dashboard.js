import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css'; 

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/users');
        setUsers(response.data.data);
        console.log(response.data.data); 
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Dashboard</h1>

      <div className="user-table-container">
        <h2 className="user-table-heading">All Users</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
