'use client';
import classNames from 'classnames';
import React from 'react';
import styled, { css } from 'styled-components';
import s from './button.module.scss';

type Props = {
  $theme?: 'primary' | 'secondary';
  $uiType?: 'line';
  $size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  $full?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string; // href가 있으면 <a> 태그로 렌더링
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

// styled.button 대신 styled을 사용하여 동적으로 태그 변경
const ButtonStyle = styled('button').attrs<Props>((props) => ({
  as: props.href ? 'a' : 'button', // href가 있으면 <a> 태그로, 없으면 <button> 태그로
})) <Props>`
  ${(props) =>
    props.$full &&
    css`
      width: 100%;
      text-align: center;
    `}
  ${(props) =>
    props.$uiType === 'line' &&
    css`
      border: 1px solid white;
      border-radius: 10vw;
      color: white;
    `}
  ${(props) =>
    props.$size === 'small' &&
    css`
      font-size: var(--sw-small-font-size);
      padding: var(--sw-small-padding);
    `}
  ${(props) =>
    props.$size === 'medium' &&
    css`
      font-size: 18px;
      padding: 0px 24px;
      height: 56px;
    `}
  ${(props) =>
    props.$size === 'large' &&
    css`
      font-size: var(--sw-large-font-size);
      padding: var(--sw-large-padding);
    `}

  ${(props) =>
    props.$theme === 'primary' &&
    css`
      border: 1px solid #111;
      color: #111;
    `}
  ${(props) =>
    props.$theme === 'secondary' &&
    css`
      border: 1px solid #fff;
      color: #fff;
    `}
`;

const Button = ({
  $theme = 'primary',
  $size = 'medium',
  onClick,
  $full,
  className,
  children,
  $uiType,
  href, // href가 있으면 <a> 태그로 렌더링
  ...rest
}: Props) => {
  return (
    <ButtonStyle
      $theme={$theme}
      $size={$size}
      $full={$full}
      $uiType={$uiType}
      onClick={onClick}
      className={classNames(s.button, className)}
      href={href} // href가 있으면 전달
      {...rest} // 나머지 props 전달
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;