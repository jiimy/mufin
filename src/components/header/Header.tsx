'use client';
import Image from 'next/image';
import React from 'react';
import Dropdown from '../dropdown/Dropdown';
import s from './header.module.scss';
import { ArrowBottom20 } from '../images';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

type Props = {
  children?: React.ReactNode
}

const Header = ({ children }: Props) => {
  const currentPath = usePathname();
  const route = currentPath.split('/')[1];

  return (
    <div className={s.header}>
      {
        children ? children :
          <>
            <Image src={'/icon/headerlogo.svg'} width={180} height={42} alt='로고' />
            <div className={s.menu}>
              <ul>
                <li className={classNames('', {
                  [s.is_active]: route === 'introduce'
                })}>
                  <Link href={'/introduce'}>
                    소개
                  </Link>
                </li>
                <li className={classNames('', {
                  [s.is_active]: route === 'app'
                })}>
                  <Link href={'/app'}>
                    소소담담 APP
                  </Link>
                </li>
                <li className={classNames('', {
                  [s.is_active]: route === 'activity'
                })}>
                  <Link href={'/activity'}>
                    활동
                  </Link>
                </li>
              </ul>
              <Dropdown data={['KOR', 'ENG']}>
                <ArrowBottom20 />
              </Dropdown>
            </div>
          </>
      }
    </div>
  );
};

export default Header;