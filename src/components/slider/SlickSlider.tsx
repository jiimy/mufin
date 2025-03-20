'use client';
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
// import s from "./slider.module.scss";
import './slider.scss';
import classNames from "classnames";

type Props = {
  type?: 'kv' | 'slide'
}



const SlickSlider = ({ type = 'kv' }: Props) => {
  const slideRef = useRef<Slider | null>(null);

  const previous = () => {
    if (slideRef.current) {
      slideRef?.current?.slickPrev();
    }
  };

  const next = () => {
    if (slideRef.current) {
      slideRef.current.slickNext();
    }
  };

  const slideSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    // centerMode: true,
    centerPadding: "60px", 
  };

  const kvSettings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };


  return (
    <div className={classNames("slide", {
      "is_kv": type === 'kv',
      "is_slide": type === 'slide'
    })}>
      {
        type === 'kv' &&
        <Slider {...kvSettings}>
          <div className="slide">
            <div className="img_wrap">
              <Image src={'img/slide1.jpg'} width={1920} height={850} alt=''  />
            </div>
            {/* <Image src={'img/dim.png'} width={1920} height={850} alt='' layout="responsive" className="dim"/> */}
            <div className="text">
              <span>특별한 나눔</span>
              <div className="line"></div>
              <strong>함께하는 마음이 만드는 소중한 변화</strong>
              <p>즐거움과 나눔이 있는 감동의 순간</p>
            </div>
          </div>
          <div className="slide">
            <div className="img_wrap">
              <Image src={'img/slide1.jpg'} width={1920} height={850} alt='' />
            </div>
            {/* <Image src={'img/dim.png'} width={1920} height={850} alt='' layout="responsive" className="dim" /> */}
            <div className="text">
              <span>특별한 나눔</span>
              <div className="line"></div>
              <strong>함께하는 마음이 만드는 소중한 변화1</strong>
              <p>즐거움과 나눔이 있는 감동의 순간</p>
            </div>
          </div>
        </Slider>
      }
      {
        type === 'slide' &&
        <>
          <div className="slide-wrap">
            <Slider {...slideSettings}
              ref={(slider) => { slideRef.current = slider; }}
            >
              <div className="slide">
                <Image src={'img/slidepng1.png'} width={308} height={200} alt='' />
                <strong>(주)행복한사람들</strong>
                <p>행복한 날, 행복한 사람들과 함께하는 특별한 날을 선사합니다.</p>
              </div>
              <div className="slide">
                <Image src={'img/slidepng2.png'} width={308} height={200} alt=''  />
                <strong>바른댓글 실천연대</strong>
                <p>바른댓글 정착으로 아름다운 사회를 만들어갑니다.</p>
              </div>
              <div className="slide">
                <Image src={'img/slidepng3.png'} width={308} height={200} alt=''/>
                <strong>아트리안</strong>
                <p>생활미술시장의 뉴 패러다임을 제안하는 상설 아트갤러리 프로젝트.</p>
              </div>
              <div className="slide">
                <Image src={'img/slidepng4.png'} width={308} height={200} alt=''/>
                <strong>대한민국위멘위원회</strong>
                <p>어린이를 위한 위대한 멘토, 위멘이
                  함께 합니다.</p>
              </div>
            </Slider>
          </div>
          <div className="content">
            <strong className="title">함께하는 <br /> 이들</strong>
            <button
              onClick={previous}
              type="button"
              className="slick-prev"
            >
              이전
            </button>
            <button
              onClick={next}
              type="button"
              className="slick-next"
            >
              다음
            </button>
          </div>
        </>
      }
    </div>
  );
};

export default SlickSlider;