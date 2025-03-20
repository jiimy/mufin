import React, { useState } from 'react';
import TabNav from './TabNav';
import TabList from './TabList';

type TabProps = {
  children: React.ReactNode;
  defaultIndex?: number;
  className?: string
};

const Tab = ({ children, defaultIndex = 0, className }: TabProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === Tab.Nav) {  // ✅ 수정: TabNav → Tab.Nav
        return React.cloneElement(child, {
          activeIndex,
          setActiveIndex,
        } as React.ComponentProps<typeof TabNav>);
      }
      if (child.type === Tab.List) {  // ✅ 수정: TabList → Tab.List
        return React.cloneElement(child, {
          activeIndex,
        } as React.ComponentProps<typeof TabList>);
      }
    }
    return child;
  });


  return <div>{childrenWithProps}</div>;
};

Tab.Nav = TabNav;
Tab.List = TabList;

export default Tab;