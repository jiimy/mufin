'use client';
import Desc from '@/components/introduce/desc/Desc';
import Download from '@/components/introduce/download/Download';
import Greeting from '@/components/introduce/greeting/Greeting';
import Sponsor from '@/components/introduce/sponsor/Sponsor';
import Tab from '@/components/tab/Tab';
// import Tab from '@/components/tab2/Tab';
import React from 'react';
import s from './page.module.scss';
import Image from 'next/image';
import SlickSlider from '@/components/slider/SlickSlider';

const IntroducePage = () => {
  return (
    <div className={s.introduce_page}>
      <SlickSlider />
      <Desc />
      <Greeting />
      <Tab className={s.introduce_tab}>
        <Tab.TabNav nav={['함께하는 일', '우리의 흔적']} className={s.tab_nav} isSelectClassName={s.is_selected} />
        <Tab.TabList className={s.tab_list}>
          <ul>
            <li>
              <div>
                <Image src="/img/tab1content1.png" width={852} height={171} alt='' />
              </div>
              <div>
                <p>깊은 사유와 따뜻한 대화가 어우러진 시간 <br />
                  마음을 울리는 문학과 인문학의 이야기</p>
                <strong>인문학 콘서트</strong>
              </div>
            </li>
            <li>
              <div>
                <Image src="/img/tab1content2.png" width={852} height={171} alt='' />
              </div>
              <div>
                <p>지역의 숨결을 느끼며 함께 웃는 하루 <br /> 소박한 만남속에 커지는 온기</p>
                <strong>지역 축제</strong>
              </div>
            </li>
            <li>
              <div>
                <Image src="/img/tab1content3.png" width={852} height={171} alt='' />
              </div>
              <div>
                <p>행복이 전해지는 물건들, 그 속의 이야기들</p>
                <strong>나눔 바자회</strong>
              </div>
            </li>
            <li>
              <div>
                <Image src="/img/tab1content4.png" width={852} height={171} alt='' />
              </div>
              <div>
                <p>작은 나눔이 모여 큰 울림이 됩니다 <br /> 사색의향기와 함께 만들어가는 더 나은 내일</p>
                <strong>따뜻한 후원</strong>
              </div>
            </li>
          </ul>
        </Tab.TabList>
        <Tab.TabList>두번째 탭</Tab.TabList>
      </Tab>
      <Sponsor />
      <Download />
      <SlickSlider type='slide'/>
    </div>
  );
};

export default IntroducePage;