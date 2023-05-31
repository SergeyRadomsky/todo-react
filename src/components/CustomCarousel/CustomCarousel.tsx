import { Button, } from 'antd';
import React, { useRef } from 'react';
import * as S from './styles';
import { CarouselRef } from 'antd/es/carousel';

const CustomCarousel = () => {
    const carouselRef = useRef<CarouselRef>(null);

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

  return (
    <S.customCarousel>
      <Button onClick={handlePrev}>{'<'}</Button>
      <S.changedStyleCarousel ref={carouselRef}>
        <div>
          <p>1111111111111111111111</p>
          {/* <Image src="" /> */}
        </div>
        <div>
          <p>2222222222222222222222</p>
          {/* <Image src="" /> */}
        </div>
        <div>
          <p>3333333333333333333333</p>
          {/* <Image src="" /> */}
        </div>
        <div>
          <p>3333yyyyyyyyyyyyyyy333</p>
          {/* <Image src="" /> */}
        </div>
        <div>
          <p>333333adfbvqerb3333333</p>
          {/* <Image src="" /> */}
        </div>
        <div>
          <p>3SDVBTNBERA33333333333</p>
          {/* <Image src="" /> */}
        </div>
        <div>
          <p>333337777 3333</p>
          {/* <Image src="" /> */}
        </div>
      </S.changedStyleCarousel>
      <Button onClick={handleNext}>{'>'}</Button>
    </S.customCarousel>
  );
};

export default CustomCarousel;
