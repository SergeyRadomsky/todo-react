// import { ReactComponent as LogoE } from '../../assets/logoE.svg';
import { Layout, Space } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import * as S from './styles';
// import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
// import s from '../../App.module.scss';

interface DataType {
  key: React.Key;
  gender: string;
  age: number;
  fio: string;
  room: number;
  departament: string;
  consultation: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ФИО',
    dataIndex: 'fio',
    // filters: [
    //   {
    //     text: 'Joe',
    //     value: 'Joe',
    //   },
    //   {
    //     text: 'Jim',
    //     value: 'Jim',
    //   },
    //   {
    //     text: 'Submenu',
    //     value: 'Submenu',
    //     children: [
    //       {
    //         text: 'Green',
    //         value: 'Green',
    //       },
    //       {
    //         text: 'Black',
    //         value: 'Black',
    //       },
    //     ],
    //   },
    // ],
    // specify the condition of filtering result
    // here is that finding the fio started with `value`
    // onFilter: (value: string, record) => record.fio.indexOf(value) === 0,
    sorter: (a, b) => a.fio.length - b.fio.length,
    sortDirections: ['descend'],
    render: (_, record) => (
      <>
        <div className='gender-fio-age'>
          <span>{record.gender} </span>
          <span>{record.age} </span>
        </div>
        <div>{record.fio}</div>
      </>
    ),
  },

  {
    title: '№ ПАЛАТЫ',
    dataIndex: 'room',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.room - b.room,
    sortDirections: ['descend'],
  },

  {
    title: 'ОТДЕЛЕНИЕ',
    dataIndex: 'departament',
    sorter: (a, b) => a.room - b.room,
    sortDirections: ['descend'],
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
    // onFilter: (value: string, record) => record.departament.indexOf(value) === 0,
  },

  {
    title: 'КОНСУЛЬТАЦИЯ',
    dataIndex: 'consultation',
    filters: [
      {
        text: 'суставы1',
        value: 'суставы1',
      },
      {
        text: 'суставы2',
        value: 'суставы2',
      },
      {
        text: 'суставы3',
        value: 'суставы3',
      },
      {
        text: 'суставы4',
        value: 'суставы4',
      },
    ],
    onFilter: (value: string, record) =>
      record.consultation.indexOf(value) === 0,
  },
];

const data = [
  {
    key: '1',
    gender: 'man',
    age: '25',
    fio: 'Радомский Сергей Сергеевич',
    room: 16,
    departament: 'Реабилитация1',
    consultation: 'суставы1',
  },
  {
    key: '2',
    gender: 'female',
    age: '26',
    fio: 'Ири Ирина Ириновна',
    room: 367,
    departament: 'Реабилитация1',
    consultation: 'суставы1',
  },
  {
    key: '3',
    gender: 'man',
    age: '37',
    fio: 'Виталь Виталий Витальевич',
    room: 314,
    departament: 'Реабилитация2',
    consultation: 'суставы2',
  },
  {
    key: '4',
    gender: 'man',
    age: '48',
    fio: 'Павлу Павел Павлович',
    room: 1004,
    departament: 'Реабилитация3',
    consultation: 'суставы3',
  },
  {
    key: '5',
    gender: 'female',
    age: '48',
    fio: 'Крис Кристина Кристиновна',
    room: 1004,
    departament: 'Реабилитация3',
    consultation: 'суставы3',
  },
  {
    key: '6',
    gender: 'man',
    age: '19',
    fio: 'Дени Денис Денисович',
    room: 202,
    departament: 'Реабилитация4',
    consultation: 'суставы4',
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

// import styled from 'styled-components';
// const headerStyle: React.CSSProperties = {
//   display: 'flex',
//   alignItems: 'center',
//   textAlign: 'center',
//   color: '#fff',
//   height: 64,
//   paddingInline: 50,
//   lineHeight: '64px',
//   backgroundColor: '#7dbcea',
// };

// const StyledLogo = styled(LogoE1)<{ rotated?: boolean }>`
//   transform: rotate(${({ rotated }) => (rotated ? '90deg' : 0)});
//   width: 30px;
//   height: 30px;
//   path {
//     fill: red;
//   }
// `;

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const Home = () => {
  return (
    <Space direction="vertical" size={[0, 48]}>
      <Layout>
        <S.HeaderStyle>
          <S.StyledLogo />
          <S.StyledInput placeholder="ФИО" />
          <S.StyledReload />
          <S.StyledProfile />
        </S.HeaderStyle>
        <S.StyledTable
          columns={columns}
          dataSource={data}
          onChange={onChange}
        />
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  );
};

export default Home;
