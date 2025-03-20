import React from 'react';
import s from './footer.module.scss';
import Button from '../button/Button';
import { LineArrowRight24, Logo } from '../images';
import classNames from 'classnames';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={classNames([s.footer_inner], '')}>
        <div>
          <Logo fill='#909090' className={s.logo}/>
          <ul className={classNames([s.f16], 'flex gap-16 mt-76 mb-32')}>
            <li><Link href="">개인정보 처리방침</Link></li>
            <li><Link href="">이용약관</Link></li>
            <li><span>고객센터 평일 08:00~19:00 (주말 및 공휴일 휴무)</span></li>
          </ul>

          <ul className={classNames([s.f12], 'flex gap-16 mb-10')}>
            <li>사단법인 사색의향기</li>
            <li><span>이사장</span>오덕균</li>
            <li><span>고유번호</span>355-82-00129</li>
          </ul>
          <ul className={classNames([s.f12], 'flex gap-16 mb-10')}>
            <li><span>주소</span>서울시 강남구 테헤란로 19길 28 이림빌딩3층(역삼동)</li>
            <li><span>전화</span>02-539-5101</li>
            <li><span>팩스</span>070-8668-5091</li>
            <li><span>이메일</span>culppy@culppy.com</li>
          </ul>
          <ul>
            <li>Copyright &copy; 2025 사색의향기.All Rights Reserved</li>
          </ul>
        </div>
        <div className={s.right}>
          <strong>뉴스레터 구독하기</strong>
          <p>이메일 구독을 통해 사색의향기의 최신 소식과 교육 및 이벤트 소식을
            빠르게 받아보실 수 있습니다.</p>
          <Button href="/aa" className={s.button} $uiType='line' $theme='secondary' $full>이메일 구독 신청 <LineArrowRight24 /> </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;