import { Button, Carousel, Image } from 'antd';
import React from 'react';
import * as S from './styles';

const CustomCarousel = () => {
  return (
    <S.customCarousel>
      <Button>{'<'}</Button>
      <Carousel >
        <div>
          <p>wrnbewneyn</p>
          <Image src="" />
        </div>
        <div>
          <p>wrnbewneyn</p>
          <Image src="" />
        </div>
        <div>
          <p>wrnbewneyn</p>
          <Image src="" />
        </div>
      </Carousel>
      <Button>{'>'}</Button>
    </S.customCarousel>
  );
};

export default CustomCarousel;
