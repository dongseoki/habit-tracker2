import { useState } from 'react'
import './App.css'

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const MainPage = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString('default', { month: 'long' });

  // Get the first day of the month
  const firstDayOfMonth = new Date(year, today.getMonth(), 1).getDay();
  const daysInMonth = new Date(year, today.getMonth() + 1, 0).getDate();

  // Create an array to represent the dates in the calendar
  const calendarDates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white p-4 rounded-lg">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold">날짜에 신호등 색 표기</h2>
        <p className="text-sm">0~33~66~100 기준: 빨 / 노랑 / 파랑. 아직 도달안함 흰색</p>
        <p className="text-sm">{year}년 {month}</p>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {daysOfWeek.map((day, index) => (
          <div key={index} className={`p-2 font-bold ${index === 0 ? 'text-red-500' : index === 6 ? 'text-blue-500' : ''}`}>
            {day.substring(0, 3)}
          </div>
        ))}
        {/* Empty cells for days before the first day of the month */}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="p-4 border rounded bg-gray-800 text-lg font-bold"></div>
        ))}
        {calendarDates.map((date) => (
          <div key={date} className="p-4 border rounded bg-gray-800 text-lg font-bold">
            {date}
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-between mt-4">
        <button className="p-2 bg-gray-700 rounded-lg">📅</button>
        <button className="p-2 bg-green-500 rounded-lg">✔</button>
        <button className="p-2 bg-gray-700 rounded-lg">⚙️</button>
      </div>
    </div>
  );
};

export default MainPage;