// src/Components/Calendar.jsx
import React, { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../styles/calendar.css';

function Calendar() {
  const calendarRef = useRef(null);
  const [viewType, setViewType] = useState('dayGridMonth');
  const [year, setYear] = useState(new Date().getFullYear());

  const handleToday = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.today();
    setYear(calendarApi.getDate().getFullYear());
  };

  const handlePrev = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
    setYear(calendarApi.getDate().getFullYear());
  };

  const handleNext = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
    setYear(calendarApi.getDate().getFullYear());
  };

  const handleViewChange = (view) => {
    setViewType(view);
    calendarRef.current.getApi().changeView(view);
  };

  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value);
    setYear(newYear);
    const calendarApi = calendarRef.current.getApi();
    const currentDate = calendarApi.getDate();
    const updatedDate = new Date(currentDate.setFullYear(newYear));
    calendarApi.gotoDate(updatedDate);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="left-controls">
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
          <button className="today-btn" onClick={handleToday}>Today</button>
        </div>

        <div className="center-title">
          <h3>{calendarRef.current?.getApi()?.view?.title || `${year}`}</h3>
          <select value={year} onChange={handleYearChange}>
            {Array.from({ length: 26 }, (_, i) => 2000 + i).map((yr) => (
              <option key={yr} value={yr}>{yr}</option>
            ))}
          </select>
        </div>

        <div className="right-controls">
          <button
            className={viewType === 'dayGridMonth' ? 'active' : ''}
            onClick={() => handleViewChange('dayGridMonth')}
          >
            Month
          </button>
          <button
            className={viewType === 'timeGridWeek' ? 'active' : ''}
            onClick={() => handleViewChange('timeGridWeek')}
          >
            Week
          </button>
          <button
            className={viewType === 'timeGridDay' ? 'active' : ''}
            onClick={() => handleViewChange('timeGridDay')}
          >
            Day
          </button>
        </div>
      </div>

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={viewType}
        height="auto"
        slotMinTime="00:00:00"
        slotMaxTime="24:00:00"
        allDaySlot={false}
        slotDuration="01:00:00"
        firstDay={0}
      />
    </div>
  );
}

export default Calendar;
