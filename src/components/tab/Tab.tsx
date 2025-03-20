'use client';
import React, { createContext, useContext, useState } from 'react';
import TabNav from './TabNav';
import TabList from './TabList';
import classNames from 'classnames';
import s from './tab.module.scss';

type TabType = {
  children: React.ReactNode;
  tabIndex?: number; // 초기 탭 인덱스 (선택 사항)
  className?: string;
};

type TabContextType = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

// TabContext 생성
export const TabContext = createContext<TabContextType | undefined>(undefined);

export const useTab = () => {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error("Tab Context가 없습니다.");
  }
  return context;
}

const Tab = ({ children, tabIndex = 0, className }: TabType) => {
  const [activeIndex, setActiveIndex] = useState(tabIndex); // 현재 활성화된 탭 인덱스

  return (
    <TabContext.Provider value={{ activeIndex, setActiveIndex }}>
      {/* {children} */}
      <div className={classNames([s.tab], className)}>
      {React.Children.map(children, (child, childrenIndex) => {
        return React.cloneElement(child as React.ReactElement<any>, { childrenIndex });
      })}
      </div>
    </TabContext.Provider>
  );
};

// TabNav와 TabList를 Tab의 서브 컴포넌트로 등록
Tab.TabNav = TabNav;
Tab.TabList = TabList;

export default Tab;
export type { TabType }