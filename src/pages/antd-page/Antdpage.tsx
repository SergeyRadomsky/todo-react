import React from 'react';
import { Button, DatePicker, Pagination, Space } from 'antd';
import * as S from './styles';

const Antdpage = () => {
  return (
    <div>
      <S.Scanner id={'qr-reader'}>Barcode Scanner</S.Scanner>
      <Button>fuck</Button>
      <Space>
        <DatePicker />
        <Button type="primary">Primary Button</Button>
      </Space>
      <Pagination total={50} />
    <S.Slider>
      <S.Images>
        <img className="slider-image" src="image1.jpg" alt="Image 1"></img>
        <img className="slider-image" src="image2.jpg" alt="Image 2"></img>
        <img className="slider-image" src="image3.jpg" alt="Image 3"></img>
      </S.Images>
    </S.Slider>
    </div>
  );
};

export default Antdpage;
