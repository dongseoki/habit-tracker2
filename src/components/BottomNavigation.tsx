import React from 'react';

const BottomNavigation: React.FC = () => {
  return (
    <div className="flex justify-between mt-4">
      <button className="p-2 bg-gray-700 rounded-lg">📅</button>
      <button className="p-2 bg-green-500 rounded-lg">✔</button>
      <button className="p-2 bg-gray-700 rounded-lg">⚙️</button>
    </div>
  );
};

export default BottomNavigation;