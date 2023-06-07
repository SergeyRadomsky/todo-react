// import { Input, Layout, Space } from 'antd';
// import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Input, Table } from 'antd';
import { ReactComponent as LogoE } from '../../assets/logoE.svg';
import { ReactComponent as Reload } from '../../assets/Reload.svg';
import { ReactComponent as Profile } from '../../assets/Profile.svg';
import { Header } from 'antd/es/layout/layout';
import styled from 'styled-components';

export const HeaderStyle = styled(Header)`
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
  width: 600px;
  height: 64px;
  padding-inline: 0px;
  line-height: 64px;
  background-color: #7dbcea;
  box-shadow: inset 0px -2.5px 2.5px rgba(66, 104, 123, 0.2);
`;

export const StyledLogo = styled(LogoE)`
  margin: 20px 0 20px 20px;
  width: 32px;
  height: 32px;
  path {
    fill: #fafafa;
  }
`;

export const StyledInput = styled(Input)`
  /* margin: 20px; */
  border: 1px solid #42687b;
  border-radius: 3px;
  margin: 0 20px 0 20px;
  width: 360px;
  height: 40px;
`;

export const StyledReload = styled(Reload)`
  margin: 0 20px 0 5px;
  width: 50px;
  height: 50px;
  path {
    fill: #fafafa;
  }
`;

export const StyledProfile = styled(Profile)`
  margin: 0 20px 0 5px;
  width: 50px;
  height: 50px;
  path {
    fill: none;
  }
`;

export const StyledTable = styled(Table)`
  .ant-table {
    max-width: 600px;
    /* height: 50px; */

    .ant-table-row {
    /* width: 110px; */
    /* padding:  */
    height: 80px;
    .ant-table-cell {
        padding: 0 0 0 15px;
    .gender-fio-age {
        display: flex;
    }
    }
  }

  }

  .ant-table-thead {
    height: 40px !important;
    padding: 15px 20px !important;
  }

  /* .ant-table-cell {
    padding: 0 10px 0 10px !important;
    width: 60px !important;
  } */

  

  .ant-table-filter-trigger {
    margin-inline: 0;
  }

  .ant-table-column-sorters {
    display: block;
    /* width: 70px; */
  }

  /* .ant-table-column-sorters:nth-of-type(1) {
    width: 130px !important;
    margin-right: 0px;
  }
  .ant-table-column-sorters:nth-of-type(2) {
    width: 82px !important;
    margin-right: 0px;
  } */

  /* .ant-table-cell {
    width: 110px;
  } */
  /* .ant-table-cell:nth-child(1) ant-table-column-sorters {
    width: 130px;
  } */

  /* .ant-table-column-sorters:nth-child(1) {
    width: 100px !important;
    margin-right: 0px;
  } */

  /* .ant-table-column-sorters:nth-child(2) {
    width: 120px !important;
    margin-right: 0px;
  } */
`;
