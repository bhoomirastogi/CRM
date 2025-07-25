import React from 'react';
import '../styles/stat.css';
import { FaUser, FaBriefcase, FaProjectDiagram, FaUsers, FaMoneyBill, FaChartLine } from "react-icons/fa";

const dummyStats = [
  { title: "Total Employee", value: 313, change: "+10%", note: "Than Last Year", icon: <FaUser />, changeType: "positive" },
  { title: "On Leave Employee", value: 55, change: "+2.15%", note: "Than Last Month", icon: <FaBriefcase />, changeType: "positive" },
  { title: "Total Project", value: 313, change: "+5.15%", note: "Than Last Month", icon: <FaProjectDiagram />, changeType: "positive" },
  { title: "Complete  Project", value: 150, change: "-5.5%", note: "Than Last Month", icon: <FaChartLine />, changeType: "negative" },
  { title: "Total Client", value: 151, change: "+2.15%", note: "Than Last Month", icon: <FaUsers />, changeType: "positive" },
  { title: "Total Revenue", value: "$55", change: "+2.15%", note: "Than Last Month", icon: <FaMoneyBill />, changeType: "positive" },
  { title: "Total Jobs", value: 55, change: "+2.15%", note: "Than Last Month", icon: <FaBriefcase />, changeType: "positive" },
  { title: "Total Ticket", value: 55, change: "+2.15%", note: "Than Last Month", icon: <FaMoneyBill />, changeType: "positive" }
];

const StatsCard = () => {
  return (
    <div className="dashboard">
      {dummyStats.map((stat, index) => (
        <div className="stats-card" key={index}>
          <div className="icon">{stat.icon}</div>
          <div className="stats-info">
            <p className="title">{stat.title}</p>
            <p className="value">{stat.value}</p>
            <p className={`change ${stat.changeType}`}>↑ {stat.change}</p>
            <p className="comparison">{stat.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
