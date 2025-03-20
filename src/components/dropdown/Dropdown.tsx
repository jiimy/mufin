'use client';
import React, { useRef, useState } from 'react';
import s from './dropdown.module.scss';
import { useOutOfClick } from '@/hooks/useOutOfClick';
import classNames from 'classnames';

type Props = {
  data: string[];
  children?: React.ReactNode;
}

const Dropdown = ({ data, children }: Props) => {
  const targetRef = useRef(null);
  const [select, setSelect] = useState(data[0]);
  const [show, setShow] = useState(false);

  useOutOfClick(targetRef, () => {
    setShow(false);
  });

  const filteredData = data.filter((item) => item !== select);

  return (
    <div ref={targetRef} className={classNames([s.dropdown], {
      [s.is_show]: show
    })}>
      <span onClick={() => setShow(!show)}>{select}{children}</span>
      {
        show &&
        <ul>
          {filteredData.map((item, index) => (
            <li key={index} onClick={() => {
              setSelect(item);
              setShow(false);
            }}>
              {item}
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Dropdown;