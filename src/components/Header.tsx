import React from 'react';

interface HeaderProps {
  year: number;
  month: string;
}

const Header: React.FC<HeaderProps> = ({ year, month }) => {
  return (
    <div className="text-center mb-4">
      <h2 className="text-lg font-bold">날짜에 신호등 색 표기</h2>
      <p className="text-sm">0~33~66~100 기준: 빨 / 노랑 / 파랑. 아직 도달안함 흰색</p>
      <p className="text-sm">{year}년 {month}</p>
    </div>
  );
};

export default Header;