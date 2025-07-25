import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

function Sidebar({ onClose }) {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const menuItems = [
    {
      title: "Dashboards",
      children: [
        { name: "HRM Dashboard", route: "/" }, 
        { name: "CRM Dashboard" , route:"/CRM-analytics"},            
        { name: "Employee Dashboard", route: "/employee-dashboard" },
      ],
    },
    { title: "HRM", children: ["Employee", "Profile", "Attendance"] },
    { title: "SRM", children: ["Leads", "Deals", "Setup"] },
    { title: "APPS", children: ["Store", "Settings"] },
    { title: "Payroll", children: ["Payslips", "Salary Setup"] },
    { title: "Expense", children: ["Travel", "Approvals"] },
    { title: "Company", children: ["Branches", "Overview"] },
    { title: "Clients", children: ["List", "Feedback"] },
    { title: "Projects", children: ["A", "B", "New"] },
    { title: "Tickets", children: ["Create", "All", "Settings"] }
  ];

  const staticItems = [
    "Activities", "Training", "Resignation", "Promotion", "Award",
    "Meeting", "Transfer", "Termination", "Document", "Announcement", "Invoice"
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Menu</h2>
      </div>

      <div className="sidebar-scroll">
        {menuItems.map((item, index) => (
          <div className="sidebar-section" key={index}>
            <h4 className="section-title" onClick={() => toggleSection(item.title)}>
              {item.title} {openSections[item.title] ? '▲' : '▼'}
            </h4>

            {openSections[item.title] && (
              <ul className="sidebar-menu">
                {item.children.map((child, i) => {
                  if (typeof child === "string") {
                    return <li key={i}>-- {child}</li>;
                  } else if (child.route) {
                    return (
                      <li key={i}>
                        <Link to={child.route}>-- {child.name}</Link>
                      </li>
                    );
                  } else {
                    return <li key={i}>-- {child.name}</li>;
                  }
                })}
              </ul>
            )}
          </div>
        ))}

        {staticItems.map((title, index) => (
          <div className="sidebar-section" key={`static${index}`}>
            <h4 className="section-title">{title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
