import styled from 'styled-components';

export const StyledTableInside = styled.div`
  .ant-table-thead {
    /* background-color: red; */
    font-size: 9px;
  }

  .ant-table-wrapper
    .ant-table-container
    table
    > thead
    > tr:first-child
    > *:last-child {
    border-start-end-radius: 0px;
  }
  .ant-table-container table > thead > tr:first-child > *:first-child {
    border-start-start-radius: 0px;
  }

  .ant-table-thead > tr > th {
    background-color: #d7e8f1;
    border-bottom: 0;
  }

  .ant-table-wrapper .ant-table-tbody > tr > td {
    border-bottom: 2px solid #e5e5e5;
  }

  .ant-table-row:nth-child(2n + 1) {
    /* background-color: #f5f5f5; */
    /* &:hover {
      background-color: rgb(192 84 84) !important;
    } */
  }

  .ant-table-cell-row-hover {
    /* display: none; */
  }

  //каждая ячейка в столбце движения
  .ant-table-row {
    border-bottom: 3px solid rgb(171 171 171);
    &:focus {
      width: 600px;
    }
    .ant-table-cell:nth-child(2) {
      padding: 0;
      text-align: start;
    }
  }

  .move-word {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    span {
      /* border-top: 1px solid  #E5E5E5; */
      border-bottom: 1px solid #e5e5e5;
      padding: 3px 30px 3px 5px;
    }
    span:last-child {
      border-bottom: 0;
      /* padding: 0; */
    }
  }

  .row-class {
    background-color: #f5f5f5;
  }

  .ant-table-row > .ant-table-cell {
    padding: 0;
    border-right: 1px solid rgb(171 171 171);

    &:first-child {
      padding-left: 10px;
    }
  }

  .ant-table-row > .ant-table-cell:last-child {
    border-right: 0;
  }

  .ant-pagination {
    display: none;
  }
`;
