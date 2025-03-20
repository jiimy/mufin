import React, { useContext } from 'react';
import { TabContext, useTab } from './Tab';
import s from './tab.module.scss';
import classNames from 'classnames';

type TabListProps = {
  children: React.ReactNode;
  childrenIndex?: number;
  className?: string;
};

const TabList = ({ children, childrenIndex, className }: TabListProps) => {
  const { activeIndex } = useTab();

  // console.log('aa', activeIndex);

  // 현재 활성화된 탭과 일치하는 경우에만 내용을 렌더링
  if (childrenIndex) {
    return activeIndex === childrenIndex - 1 ? <div className={classNames([s.tab_list], className)}>{children}</div> : null;
  }
};

export default TabList;