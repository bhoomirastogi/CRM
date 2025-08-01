import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import StatsCard from './Components/Statscard';
import Meetings from './Components/Meetings';
import Absent from './Components/Absent';
import Calendar from './Components/Calendar';
import Chart from './Components/Chart';
import EmployeeDashboard from './pages/EmployeeDashboard';
import Crm from './pages/Crm';
import './styles/layout.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <BrowserRouter basename="/CRM">
      <div className={`layout ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
        <Navbar toggleSidebar={toggleSidebar} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <StatsCard />
                <Meetings />
                <Absent />
                <Calendar />
                <Chart />
              </>
            }
          />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/CRM-analytics" element={<Crm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 