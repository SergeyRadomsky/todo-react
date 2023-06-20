import React from 'react';
import { Table } from 'antd';
import * as S from './styles';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface DataType {
  key: React.Key;
  inter: string;
  norms: string;
  slightly: string;
  moderate: string;
  significant: string;
}

const getRowClassName = (record: DataType, index: number) => {
  return index % 2 === 0 ? 'row-class' : '';
};

const columns: ColumnsType<DataType> = [
  {
    title: 'Интерпретация',
    dataIndex: 'inter',
  },
  {
    title: 'Движение',
    dataIndex: 'move',
    render: () => (
      <div className="move-word">
        <span>сгибание</span>
        <span>разгибание</span>
        <span>отведение</span>
      </div>
    ),
  },
  {
    title: 'Норма',
    dataIndex: 'norms',
    render: (text, record, index) => {
      return (
        <div
          style={{
            height: '86px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => console.log(record.key, index)}
        >
          {text}
        </div>
      );
    },
  },
  {
    title: 'Незначительное',
    dataIndex: 'slightly',
    render: (text, record, index) => {
      return (
        <div
          style={{
            height: '86px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => console.log(record.key, index)}
        >
          {text}
        </div>
      );
    },
  },
  {
    title: 'Умеренное',
    dataIndex: 'moderate',
    render: (text, record, index) => {
      return (
        <div
          style={{
            height: '86px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => console.log(record.key, index)}
        >
          {text}
        </div>
      );
    },
  },
  {
    title: 'Значительное',
    dataIndex: 'significant',
    render: (text, record, index) => {
      return (
        <div
          style={{
            height: '86px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => console.log(record.key, index)}
        >
          {text}
        </div>
      );
    },
    // filters: [
    //   {
    //     text: 'London',
    //     value: 'London',
    //   },
    //   {
    //     text: 'New York',
    //     value: 'New York',
    //   },
    // ],
    // onFilter: (value: string, record) => record.address.indexOf(value) === 0,
  },
];

const data = [
  {
    key: '1',
    inter: 'Плечевой с плечевым поясом',
    norms: '11',
    slightly: '22',
    moderate: '33',
    significant: '90+',
  },
  {
    key: '2',
    inter: 'Локтевой',
    norms: '11',
    slightly: '22',
    moderate: '33',
    significant: '90+',
  },
  {
    key: '3',
    inter: 'Лучезапястный (кистевой)',
    norms: '11',
    slightly: '22',
    moderate: '33',
    significant: '90+',
  },
  {
    key: '4',
    inter: 'Тазобедренный',
    norms: '11',
    slightly: '22',
    moderate: '33',
    significant: '90+',
  },
];

const onChange: TableProps<DataType>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log('params', pagination, filters, sorter, extra);
};

const TableInside: React.FC = () => (
  <S.StyledTableInside>
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      rowClassName={getRowClassName}
      
    />
  </S.StyledTableInside>
);

export default TableInside;

// <Form.Item
// name="radio-button"
// label="Radio.Button"
// rules={[{ required: true, message: 'Please pick an item!' }]}
// >
// <Radio.Group>
//   <Radio.Button value="a">item 1</Radio.Button>
//   <Radio.Button value="b">item 2</Radio.Button>
//   <Radio.Button value="c">item 3</Radio.Button>
//   <Radio.Button value="d">item 4</Radio.Button>
// </Radio.Group>
// </Form.Item>
