import { Collapse } from 'antd';
import styled from 'styled-components';

export const StyledTestPsyho = styled.div`
  width: 600px;
`;

export const StyledPersonalBlock = styled.div`
  margin-top: 64px;
  height: 100%;
  border-bottom: 1px solid #888d96;
`;

export const StyledPersonalItems = styled.div`
  background-color: #ffffff;
  color: #888d96;
  height: 60px;
  padding: 0 20px;
  display: flex;
  width: 600px;
  flex-wrap: wrap;
  align-items: center;
  line-height: 15px;
  font-size: 13px;

  & > * {
    margin-right: 10px;
  }
`;

export const StyledTestPsyhoText = styled.div`
  display: flex;
  padding-left: 20px;
  align-items: center;
  color: #545864;
  font-size: 18px;
  font-weight: bold;
  height: 50px;
`;

export const StyledCollapse = styled(Collapse)`
  width: 100%;
  background-color: #f0f0f0;
  color: #545864;
  border-radius: 0px;
  border: 0px;
  svg {
    z-index: 2;
    transform: rotate(0deg);
    transition: transform 0.3s ease-in-out;
  }

  .ant-collapse-item {
    position: relative;
    /* РАБОТАЮТ В ПАРЕ СНИЗУ С ТАКИМ */
    border-bottom: 0px;
  }
  & .ant-collapse-item {
    background-color: white;
  }

  & > .ant-collapse-item-active {
    /* position: relative; */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      /* width: 30px;
      height: 49px; */
      width: 7%;
      height: 49px;
      background-color: #e9f8ff;
      /* ---------------------------- */
      z-index: 1;
    }

    > .ant-collapse-header {
      font-weight: bold;
      color: #545864;
      background-color: #e9f8ff;

      svg {
        transform: rotate(90deg);
        transition: transform 0.3s ease-in-out;
      }
    }
  }

  .ant-collapse-content {
    border-top: 0px;
    border-left: 10px solid #f0f0f0;
    border-right: 10px solid #f0f0f0;
    border-radius: 0;
    .ant-collapse-content {
      border-left: 0px;
      border-right: 0px;
    }
  }

  .ant-collapse > .ant-collapse-item:last-child {
    border-radius: 0;
    /* &.ant-collapse-header {
      border-radius: 0;
    } */
    &.ant-collapse-content {
      border-radius: 0;
    }
  }

  /* Выбираем все иконки SVG внутри элементов с классом ant-collapse-header */
  .ant-collapse-header {
    /* РАБОТАТЬ ДОЛЖНЫ В ПАРЕ С ТАКИМ СВЕРХУ ----- */
    border-bottom: 1px solid rgb(0 0 0 / 10%);
    border-radius: 0 !important;
    /* box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 19px 0px !important; */
    svg {
      width: 32px;
    }
  }

  /* Возвращаем значение ширины иконок первого уровня к исходному значению (32px) */
  .ant-collapse > .ant-collapse-item {
    border-bottom: 0px;
    position: relative;
    /* margin-left: 10px; */
    /* padding-left: 30px; */
    border-radius: 0 !important;
    /* background-color: white; */
    > .ant-collapse-header {
      /* margin-left: -60px;
      padding-left: 76px;
      width: 581px; */
    }

    .ant-collapse-item {
      /* margin-left: 0px; */
      /* border-left: 0; */
      padding-left: 30px;
      border-left: 0;
      /* третий и далее уровень вложенности -------------------------*/
    }

    .ant-collapse-header-text {
      /* color: red; */
      line-height: 15px;
      font-size: 16px;
    }

    & > .ant-collapse-header {
      border-bottom: 0;
      box-shadow: 0;

      /* box-shadow: outset 0px -2px 5px rgba(0, 0, 0, 0.1); */
      /* box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2.9752px; */
      /* box-shadow: -1.4876px -1.4876px 2.9752px rgba(0, 0, 0, 0.1),
      1.4876px 1.4876px 2.9752px rgba(0, 0, 0, 0.1); */
      /* background-color: red; */
      display: flex;
      align-items: center;
      border-radius: 0px;
      .ant-collapse-header-text {
        display: flex;
        justify-content: start;
      }
      svg {
        width: 28px;
      }
    }
  }

  .ant-collapse-header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ant-collapse-expand-icon {
    margin-top: 3px;
  }
`;

export const StyledPanel = styled(Collapse.Panel)`
  .text-in-panel {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    /* font-weight: 600; */
  }
  .ant-collapse-content-box {
    padding: 0 !important;
  }
`;
