import React from 'react';

interface CalendarProps {
  daysOfWeek: string[];
  firstDayOfMonth: number;
  calendarDates: number[];
}

const Calendar: React.FC<CalendarProps> = ({ daysOfWeek, firstDayOfMonth, calendarDates }) => {
  return (
    <div className="grid grid-cols-7 gap-2 text-center">
      {daysOfWeek.map((day, index) => (
        <div key={index} className={`p-2 font-bold ${index === 0 ? 'text-red-500' : index === 6 ? 'text-blue-500' : ''}`}>
          {day.substring(0, 3)}
        </div>
      ))}
      {Array.from({ length: firstDayOfMonth }).map((_, index) => (
        <div key={`empty-${index}`} className="p-4 border rounded bg-gray-800 text-lg font-bold"></div>
      ))}
      {calendarDates.map((date) => (
        <div key={date} className="p-4 border rounded bg-gray-800 text-lg font-bold">
          {date}
        </div>
      ))}
    </div>
  );
};

export default Calendar;