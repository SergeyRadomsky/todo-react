import React from 'react';
import { Table } from 'antd';
import * as S from './styles';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface DataType {
  key: React.Key;
  inter: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Интерпретация',
    dataIndex: 'inter',
    // specify the condition of filtering result
    // here is that finding the inter started with `value`
    // onFilter: (value: string, record) => record.inter.indexOf(value) === 0,
    // sorter: (a, b) => a.inter.length - b.inter.length,
    // sortDirections: ['descend'],
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

    // defaultSortOrder: 'descend',
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Норма',
    dataIndex: 'norms',
    // defaultSortOrder: 'descend',
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Незначительное',
    dataIndex: 'slightly',
    // defaultSortOrder: 'descend',
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Умеренное',
    dataIndex: 'moderate',
    // defaultSortOrder: 'descend',
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Значительное',
    dataIndex: 'significant',
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
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    inter: 'Локтевой',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    inter: 'Лучезапястный (кистевой)',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    inter: 'Тазобедренный',
    age: 32,
    address: 'London No. 2 Lake Park',
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
    <Table columns={columns} dataSource={data} onChange={onChange} />
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
