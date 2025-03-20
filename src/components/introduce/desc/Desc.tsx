import React from 'react';
import s from './desc.module.scss';
import Image from 'next/image';

const Desc = () => {
  return (
    <div className={s.desc}>
      <strong>
        새로운 문화 나눔을 만들어갑니다. <br />
        우리는 <Image src={'/img/desc.png'} width={280} height={94} alt='' /> <br />
        사색의향기입니다.
      </strong>
      <p>
        사색의향기는 문학인들의 커뮤니티로서 &quot;행복한 문화 나눔&quot;을 통한 사회 공헌과 선진적이고 <br />
        건전한 사회 문화를 만들어나가기 위해 노력하는 비영리 단체입니다.
      </p >
    </div>
  );
};

export default Desc;