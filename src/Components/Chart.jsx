import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import '../styles/chart.css';

const data = [
  { name: 'SUN', Sale: 75, Profit: 42 },
  { name: 'MON', Sale: 85, Profit: 54 },
  { name: 'TUE', Sale: 101, Profit: 56 },
  { name: 'WED', Sale: 95, Profit: 55 },
  { name: 'THU', Sale: 87, Profit: 60 },
  { name: 'FRI', Sale: 102, Profit: 58 },
  { name: 'SAT', Sale: 90, Profit: 62 },
];

const Chart = () => {
  return (
    <div className="order-overview-container">
      <h3 className="order-overview-title">Order Overview</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => [`$ ${value} thousands`, 'Sale']} />
          <Legend />
          <Bar dataKey="Sale" fill="#6a5af9" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Profit" fill="#1cc5b7" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
