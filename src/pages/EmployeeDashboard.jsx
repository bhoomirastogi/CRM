import React, { useState } from 'react';
import '../styles/employee.css';


const EmployeeDashboard = () => {
  const [showGreen, setShowGreen] = useState(true);
  const [showRed, setShowRed] = useState(true);

  return (
    <div className="employee-dashboard">
  

      <div className="notifications">
        {showGreen && (
          <div className="notification green">
            <span>Your leave on 23 July has been approved. Enjoy!</span>
            <button onClick={() => setShowGreen(false)}>×</button>
          </div>
        )}
        {showRed && (
          <div className="notification red">
            <span>Your loan hasn't been approved. Please talk to HR for further assistance.</span>
            <button onClick={() => setShowRed(false)}>×</button>
          </div>
        )}
      </div>

      <div className="stats-cards">
        <div className="card">Employees: 124</div>
        <div className="card">On Leave Today: 8</div>
        <div className="card">Pending Tasks: 32</div>
        <div className="card">Interviews Today: 4</div>
      </div>

      <div className="attendance-section">
        <h3>Mark Attendance</h3>
        <button className="clock-btn">Clock In</button>
        <button className="clock-btn">Clock Out</button>
        <p>Timings: 9:00 AM - 6:00 PM</p>
      </div>

      <div className="meeting-schedule">
        <h3>Meeting Schedule</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Team Sync</td><td>11:00 AM</td><td>22 July</td></tr>
              <tr><td>Project Brief</td><td>2:00 PM</td><td>22 July</td></tr>
              <tr><td>Client Call</td><td>4:00 PM</td><td>22 July</td></tr>
              <tr><td>Design Review</td><td>5:30 PM</td><td>22 July</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bottom-section">
        <div className="chat-box">
          <h3>Live Chat</h3>
          <div className="chat-window">
            <p><strong>Alice:</strong> Please upload the new designs.</p>
            <p><strong>Bob:</strong> Sure! Will do it by EOD.</p>
          </div>
          <input type="text" placeholder="Type a message..." />
        </div>

        <div className="info-box">
          <h3>Attendance & Leaves</h3>
          <p>Total Days: 30</p>
          <p>Present: 26</p>
          <p>Leaves Taken: 3</p>
          <p>Late Marks: 1</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
