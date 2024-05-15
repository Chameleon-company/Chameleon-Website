import React from 'react';
import CalendarView from '../../components/calendar/calenderView';
import './calendar.css';

function Calendar() {
  return (
    <div className="calendar-container">
      <div className="calendar-row">
        <h1>Events Calendar</h1>
        <div className="calendar-view">
          <CalendarView />
        </div>
        <div className="calendar-column">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
