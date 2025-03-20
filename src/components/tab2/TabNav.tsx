import React from 'react';

type TabNavProps = {
  nav: string[]; // 탭 네비게이션 라벨
  activeIndex: number; // 현재 활성 탭 인덱스
  setActiveIndex: (index: number) => void; // 탭 인덱스 변경 함수
};

const TabNav = ({ nav, activeIndex, setActiveIndex }: TabNavProps) => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {nav.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          style={{
            fontWeight: activeIndex === index ? 'bold' : 'normal',
            color: activeIndex === index ? 'blue' : 'black',
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default TabNav;