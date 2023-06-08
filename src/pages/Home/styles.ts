import { Input, Layout, Table } from 'antd';
import { ReactComponent as LogoE } from '../../assets/logoE.svg';
import { ReactComponent as Reload } from '../../assets/Reload.svg';
import { ReactComponent as Profile } from '../../assets/Profile.svg';
import { Header } from 'antd/es/layout/layout';
import styled from 'styled-components';

export const LayoutStyled = styled(Layout)`
  min-height: 880px;

  .ant-table {
    max-width: 600px;
    .ant-table-cell::before {
      display: none;
    }

    .ant-table-row {
      height: 80px;
    }

    .ant-table-cell:nth-child(2) {
      width: 100px;
      padding: 0 15px 0 15px;
      .ant-table-column-sorters {
        display: flex;
        .ant-table-column-title {
          line-height: 14px;
        }
      }
    }

    .ant-table-cell:nth-child(4) {
      width: 100px;
      padding: 0 15px 0 15px;
    }

    .ant-table-cell {
      font-style: normal;
      font-weight: 550;
      font-size: 16px;
      color: #545864;
      padding: 0 0 0 15px;
    }

    .gender-age-fio {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 100px;
      width: 160px;
      margin-right: -10px;

      .gender-age {
        width: 35px;
        display: flex;
        align-items: flex-end;
        padding-right: 8px;

        .age-container {
          font-family: 'Segoe UI';
          font-style: normal;
          font-weight: 700;
          font-size: 13px;
          line-height: 15px;
        }
        .age-containerW {
          color: #f386bb;
        }
        .age-containerM {
          color: #63bbe0;
        }
      }
      .fio {
        word-wrap: break-word;
        width: 120px;
      }
    }
  }

  .ant-table-thead {
    height: 40px !important;
  }

  .ant-table-filter-trigger {
    margin-inline: 0;
  }

  .ant-table-column-sorters {
    display: block;
  }
  .ant-pagination {
    display: none;
  }

  .ant-table-tbody {
    .ant-table-cell {
      color: #263942;
    }
  }
`;

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

export const StyledTable = styled(Table)``;
