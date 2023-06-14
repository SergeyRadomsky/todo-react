import { Collapse } from 'antd';
import styled from 'styled-components';

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
  font-weight: bold;
  height: 50px;
`;

export const StyledCollapse = styled(Collapse)`
  width: 100%;
  background-color: #F0F0F0;
  color: #545864;
  border-radius: 0px;
  border: 0px;

  .ant-collapse-item {
    /* РАБОТАЮТ В ПАРЕ СНИЗУ С ТАКИМ ------------------------------- */
    border-bottom: 0px;
  }
  & > .ant-collapse-item {
    background-color: white;
  }

  .ant-collapse-content {
    border-top: 0px;
  }

  /* .ant-collapse-item {
   border-bottom: 1px solid red; 
  } */
  /* Выбираем все иконки SVG внутри элементов с классом ant-collapse-header */
  .ant-collapse-header {
    /* border-bottom: 1px solid red; */
    /* РАБОТАТЬ ДОЛЖНЫ В ПАРЕ С ТАКИМ СВЕРХУ ------------------------------- */
    border-bottom: 1px solid rgb(0 0 0 / 10%);

    /* box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 19px 0px !important; */
    svg {
      width: 32px;
    }
  }

  
  /* Возвращаем значение ширины иконок первого уровня к исходному значению (32px) */
  .ant-collapse > .ant-collapse-item {
    border-bottom: 0px;
    margin-left: 10px;
    padding-left: 20px;
    border-radius: 0;
    background-color: white;

    & > .ant-collapse-item {
      margin-left: 0px;
      padding-left: 30px;
    }
    /* > .ant-collapse-item {
      margin-left: 0px;
      padding-left: 30px;
    } */

    /* Тут обращаюсь к вложенным пунктам */
    .ant-collapse-content {
      /* background-color: green; */
      /* border-top: 1px solid red; */
    }
    & > .ant-collapse-header {
      border-bottom: 0;
      box-shadow: 0;

      /* box-shadow: outset 0px -2px 5px rgba(0, 0, 0, 0.1); */
      /* box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2.9752px; */
      /* box-shadow: -1.4876px -1.4876px 2.9752px rgba(0, 0, 0, 0.1),
      1.4876px 1.4876px 2.9752px rgba(0, 0, 0, 0.1); */
      /* background-color: red; */
      border-radius: 0px;
      /* border-right-width: 10px solid #545864; */

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
  }
  .ant-collapse-content-box {
    padding: 0 !important;
    /* margin: 0 15px;  */
    /* background-clip: padding-box; */
  }

  /* svg {
  width: 28px;
 } */
`;
