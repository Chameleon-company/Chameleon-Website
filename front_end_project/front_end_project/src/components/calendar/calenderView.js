import './calendarView.css';
import ReactCalendar from 'react-calendar';
import React, { useState } from 'react';
import Format from 'date-fns/format';
import EventViewCard from './eventViewCard';
import Events from './events';

function Calendar() {
  const [date, setDate] = useState(new Date());
  const [eventView, setEventView] = useState();
  const futureDate = new Date();
  const pastDate = new Date();
  const datesActive = new Set([]);

  Events.map((event) => {
    datesActive.add(event.date);
  });

  futureDate.setDate(futureDate.getDate() + 200);
  pastDate.setDate(futureDate.getDate() - 30);

  const onChange = (date) => {
    setDate(date);

    if (datesActive.has(Format(date, 'MMM_dd_yyyy'))) {
      setEventView(Format(date, 'MMM_dd_yyyy'));
    } else {
      setEventView('null');
    }
  };

  return (
    <div className="calendar-full-container">
      <div className="calendar-container">
        <ReactCalendar
          onChange={onChange}
          value={date}
          maxDate={futureDate}
          minDate={pastDate}
          tileClassName={({ date, view }) => {
            if (datesActive.has(Format(date, 'MMM_dd_yyyy'))) {
              return 'event-holder';
            }
          }}
        />
      </div>
      <div className="event-view-container">
        <h2>{Format(date, 'MMM dd yyyy')}</h2>
        <div className="event-card-container">
          {Events.filter((events) => events.date.includes(eventView)).map(
            (events) => (
              <EventViewCard
                key={events.id}
                image={events.image}
                title={events.title}
                description={events.description}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
