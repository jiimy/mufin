import React from 'react';

type TabListProps = {
  children: React.ReactNode;
  activeIndex: number; // 현재 활성 탭 인덱스
  index?: number; // 탭 인덱스 (선택 사항)
};

const TabList = ({ children, activeIndex, index = 0 }: TabListProps) => {
  // 현재 활성 탭과 일치하는 경우에만 내용을 렌더링
  return activeIndex === index ? <div>{children}</div> : null;
};

export default TabList;