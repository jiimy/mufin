import Button from '@/components/button/Button';
import React from 'react';
import s from './sponsor.module.scss';
import { Handshake } from '@/components/images';

const Sponsor = () => {
  return (
    <div className={s.sponsor}>
      <div className="content">
        <strong>기부를 통해 따뜻한 마음을 보내고 싶다면,</strong>
        <p>
          후원계좌 안내 
          <span className='block mt-9'>
           국민 924501-01-351204 / 사단법인 사색의향기
          </span>
        </p>
        <div className={s.button_wrap}>
          <Button $uiType='line' $theme='primary' className='gap-8'><Handshake/>정기후원</Button>
          <Button $uiType='line' $theme='primary'>일시후원</Button>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;