import React from 'react';
import { useTab } from './Tab';
import s from './tab.module.scss';
import classNames from 'classnames';

type TabNavProps = {
  nav: string[];
  className?: string;
  isSelectClassName?: string;
};

const TabNav = ({ nav, className, isSelectClassName }: TabNavProps) => {
  const { setActiveIndex, activeIndex } = useTab();

  return (
    <div className={classNames([s.tab_nav], className)}>
      {nav.map((item, index) => (
        <button
          key={index}
          onClick={() => {setActiveIndex(index); console.log('dd', index, activeIndex)}} // 클릭 시 이벤트 핸들러 호출
          // className={classNames(isSelectClassName, {
          //   [s.is_select]: index === activeIndex
          // })}
          className={classNames({ [isSelectClassName || '']: index === activeIndex })}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default TabNav;