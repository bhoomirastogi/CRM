import React from 'react';
import '../styles/absent.css';
import { FaEllipsisV } from 'react-icons/fa';

const absentData = [
  { name: 'John Doe', status: 'Absent' },
  { name: 'Jane Smith', status: 'Absent' },
  { name: 'Alex Johnson', status: 'Absent' },
  { name: 'Emily Davis', status: 'Absent' },
  { name: 'Chris Brown', status: 'Absent' },
  { name: 'Olivia Wilson', status: 'Absent' },
  { name: 'Daniel Lee', status: 'Absent' },
  { name: 'Sophia Taylor', status: 'Absent' },
  { name: 'Michael Scott', status: 'Absent' },
  { name: 'Sarah Clark', status: 'Absent' },
  { name: 'David Harris', status: 'Absent' },
  { name: 'Emma Walker', status: 'Absent' },
  { name: 'Ethan Hall', status: 'Absent' },
  { name: 'Mia Lewis', status: 'Absent' },
  { name: 'Logan Young', status: 'Absent' },
  { name: 'Grace Allen', status: 'Absent' },
  { name: 'Lucas King', status: 'Absent' },
  { name: 'Zoe Wright', status: 'Absent' },
  { name: 'Liam Green', status: 'Absent' },
  { name: 'Ava Baker', status: 'Absent' }
];

function Absent() {
  return (
    <div className="absent-container">
      <div className="absent-header">
        <h3 className="absent-title">Absent Today</h3>
        <FaEllipsisV className="absent-menu-icon" />
      </div>
      <div className="absent-table-wrapper">
        <table className="absent-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {absentData.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Absent;
