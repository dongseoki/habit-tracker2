import React from 'react';

interface CalendarProps {
  daysOfWeek: string[];
  firstDayOfMonth: number;
  calendarDates: number[];
  year: number;
  month: number;
}

const Calendar: React.FC<CalendarProps> = ({ daysOfWeek, firstDayOfMonth, calendarDates, year, month }) => {
  // 오늘의 년, 월, 일
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1
  const todayDate = today.getDate();

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
        <div 
          key={date} 
          className={`p-4 border rounded bg-gray-800 text-lg font-bold
            ${year === todayYear && month === todayMonth && date === todayDate ? 'border-2 border-yellow-500' : ''}`}
        >
          {date}
        </div>
      ))}
    </div>
  );
};

export default Calendar;