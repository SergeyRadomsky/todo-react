// import styled from 'styled-components';
import { Carousel } from 'antd';
import styled from 'styled-components';

export const customCarousel = styled.div`
  /* max-width: 400px;
  max-height:400px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const changedStyleCarousel = styled(Carousel)`
  .slick-list {
    display: flex;
    width: 400px;
    height: 300px;
    margin: 0 25px;
    border-radius: 10px;
  }

  .slick-track {
    display: flex;
    background-color: aliceblue;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 400px;

    .slick-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      /* height: 0; */
    }
  }

  .slick-dots-bottom {
    /* border: 1px solid red; */
    /* width: 600px; */
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    /* height: 50px; */

    /* margin-top: 90px; */
  }

  .slick-active {
    li {
      border: 1px solid red;
    }
  }
  .slick-dots {
    li {
      height: 30px;
      border: 1px solid red;
      button {
        margin-left: 10px;
        width: 10px;
      }
    }
  }
`;
