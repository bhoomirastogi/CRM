import React from 'react';
import '../styles/crm.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaShoppingCart, FaEye, FaUserFriends, FaDollarSign } from 'react-icons/fa';

const data = [
  { month: 'Jan', sales1: 30, sales2: 20 },
  { month: 'Feb', sales1: 45, sales2: 25 },
  { month: 'Mar', sales1: 28, sales2: 30 },
  { month: 'Apr', sales1: 60, sales2: 50 },
  { month: 'May', sales1: 75, sales2: 65 },
  { month: 'Jun', sales1: 90, sales2: 80 },
  { month: 'Jul', sales1: 85, sales2: 100 },
];

function Crm() {
  return (
    <div className="crm-container">
      <div className="sales-overview">
        <div className="sales-header">
          <h2>Sales Overview</h2>
          <div className="time-toggle">
            <button>1Y</button>
            <button>1M</button>
            <button className="active">1W</button>
          </div>
        </div>
        <div className="sales-values">
          <div>
            <h3>$5900.00</h3>
            <p><span className="dot blue"></span> Sale Today <span className="green">8.5%</span></p>
          </div>
          <div>
            <h3>$5900.00</h3>
            <p><span className="dot green"></span> Sale Today <span className="red">8.5%</span></p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales1" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="sales2" stroke="#00c6ff" strokeWidth={2} fill="#e1f3ff" />
          </LineChart>
        </ResponsiveContainer>
        <div className="download-report">📥 Download Report</div>
      </div>

      <div className="stat-cards">
        <div className="stat-card">
          <FaShoppingCart className="icon" />
          <h4>Total Order</h4>
          <h2>$84.00K</h2>
          <p className="green">↑ +17.5% Than Last Week</p>
        </div>
        <div className="stat-card">
          <FaEye className="icon" />
          <h4>Product Views</h4>
          <h2>3.00M</h2>
          <p className="green">↑ +17.5% Than Last Week</p>
        </div>
        <div className="stat-card">
          <FaUserFriends className="icon" />
          <h4>Total Customers</h4>
          <h2>12.00K</h2>
          <p className="red">↓ -17.5% Than Last Week</p>
        </div>
        <div className="stat-card">
          <FaDollarSign className="icon" />
          <h4>Total Income</h4>
          <h2>$59.00K</h2>
          <p className="green">↑ +17.5% Than Last Week</p>
        </div>
      </div>
    </div>
  );
}

export default Crm;
