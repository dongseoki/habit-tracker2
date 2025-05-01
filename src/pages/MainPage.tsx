import { useState } from 'react';
import Header from '../components/Header';
import Calendar from '../components/Calendar';
import BottomNavigation from '../components/BottomNavigation';

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const MainPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;

  // Get the first day of the month
  const firstDayOfMonth = new Date(year, currentDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();

  // Create an array to represent the dates in the calendar
  const calendarDates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white p-4 rounded-lg">
      <Header year={year} month={currentDate.toLocaleString('default', { month: 'long' })} />
      <div className="flex justify-between mb-4">
        <button onClick={handlePrevMonth} className="p-2 bg-gray-700 rounded-lg">Previous</button>
        <button onClick={handleNextMonth} className="p-2 bg-gray-700 rounded-lg">Next</button>
      </div>
      <Calendar daysOfWeek={daysOfWeek} firstDayOfMonth={firstDayOfMonth} calendarDates={calendarDates} year={year} month={month} />
      <BottomNavigation />
    </div>
  );
};

export default MainPage; 