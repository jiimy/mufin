import Link from 'next/link';
import React from 'react';
import { images } from './images';
import Image from 'next/image';
import s from './greeting.module.scss';
import classNames from 'classnames';
import { ArrowBottom20 } from '@/components/images';

const Greeting = () => {
  return (
    <div className={s.greeting}>
      <div className="content">
        <strong>이사장 인사말</strong>
        <p>안녕하세요, 사색의향기 이사장 오덕균 입니다.
        </p>
        <p className='mt-10'>
          사색의향기는 ‘행복한 문화 나눔’을 통해 더 나은 사회를 만들어가고자 <br/>
          노력해왔습니다. 앞으로도 문학과 인문학의 가치를 공유하며, 열린 커뮤니티로서 함께 성장하겠습니다.
        </p>
        <p className='mt-12'>많은 관심과 응원 부탁드립니다. 감사합니다.</p>
        <Image src={'/img/sign.png'} alt='' width={554} height={79} className="mt-10 mb-9" />
        <Link href="/" className='flex'>인터뷰 더보기 <ArrowBottom20 width={24} height={24} fill={'#111'} /> </Link>
      </div>
      <Image src={'/img/greetingImg.png'} alt='' width={660} height={435} className={s.bigProfile}/>
      <div className={classNames([s.imgs], 'content')}>
        {images.map((image, index) => (
          <Image key={index} src={image} alt='' width={270} height={326} />
        ))}
      </div>
    </div>
  );
};

export default Greeting;