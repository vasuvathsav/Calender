import React, { useState } from "react";
import "./calender.css";
import { getCalendarMatrix } from "./Calenderutils"; 

const dayHeaders = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function Calendar({ date }) {
  const initialDate = date || new Date();

  const [currentYear, setCurrentYear] = useState(initialDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth());
  const [selectedDay, setSelectedDay] = useState(initialDate.getDate());

  const today = new Date();

  const matrix = getCalendarMatrix(currentYear, currentMonth);
  const monthName = new Date(currentYear, currentMonth).toLocaleString(
    "default",
    { month: "long" }
  );

  // 👉 Change month
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // 👉 Change year
  const goToNextYear = () => setCurrentYear(currentYear + 1);
  const goToPrevYear = () => setCurrentYear(currentYear - 1);

  // 👉 Select date
  const onDateClick = (day) => {
    if (day > 0) setSelectedDay(day);
  };

  return (
    <div className="cal-box">

      {/* Navigation */}
      <div className="cal-nav">
        <button onClick={goToPrevYear}>«</button>
        <button onClick={goToPrevMonth}>‹</button>
        <div className="cal-header">
          {monthName} {currentYear}
        </div>
        <button onClick={goToNextMonth}>›</button>
        <button onClick={goToNextYear}>»</button>
      </div>

      {/* Day Headers */}
      <div className="cal-row cal-days">
        {dayHeaders.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      {/* Calendar Dates */}
      {matrix.map((week, i) => (
        <div key={i} className="cal-row">
          {week.map((day, j) => {
            const isToday =
              day === today.getDate() &&
              currentMonth === today.getMonth() &&
              currentYear === today.getFullYear();

            const isSelected = day === selectedDay;

            return (
              <span
                key={j}
                className={`${isSelected ? "cal-active" : ""} ${
                  isToday ? "cal-today" : ""
                }`}
                onClick={() => onDateClick(day)}
              >
                {day === 0 ? " " : day}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
