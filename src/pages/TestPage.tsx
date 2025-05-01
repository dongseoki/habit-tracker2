import React from 'react';

const TestPage: React.FC = () => {
  const arr: number[] = [];
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">이것은 테스트 페이지입니다.</h1>
      <div className="space-y-4">
        {/* 여기에 TypeScript/JavaScript 연습 코드를 추가할 수 있습니다 */}
        <div>
          <ul>
            <li> 1 </li>
            <li>{ !!2 && '참인 내용이쥬'} </li>
            <li>{ arr.length > 0 ? '배열이 있음' : '기본값이쥬'} </li>
            <li>{ arr.length > 0 || '기본값이쥬2'} </li>
            <li>{(() => {
              return '즉시 실행함수 테스트';
            })()}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestPage; 