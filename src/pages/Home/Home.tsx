import { Space, Table } from 'antd';
import * as S from './styles';
import type { ColumnsType, TableProps } from 'antd/es/table';
import WomanIconComp from '../../components/WomanIconComp';
import ManIconComp from '../../components/ManIconComponent';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import SearchContext from '../../components/SearchContext';

// const classes = classNames('age-container', {
//   'age-containerM': record.sex == 1,
//   'age-containerW': record.sex == 0});

interface DataType {
  key: React.Key;
  sex: number;
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

    // sorter: (a, b) => a.fio.length - b.fio.length,
    sorter: (a, b) => b.fio.localeCompare(a.fio),
    sortDirections: ['descend'],
    render: (_, record) => (
      <div className="sex-age-fio">
        <div className="sex-age">
          {record.sex == 1 ? <ManIconComp /> : <WomanIconComp />}
          <span
            className={classNames('age-container', {
              'age-containerM': record.sex == 1,
              'age-containerW': record.sex == 0,
            })}
          >
            {record.age}
          </span>
        </div>
        <span className="fio">{record.fio}</span>
      </div>
    ),
  },

  {
    title: '№ ПАЛАТЫ',
    dataIndex: 'room',
    // defaultSortOrder: 'descend',
    sorter: (a, b) => b.room - a.room,
    sortDirections: ['descend'],
  },

  {
    title: 'ОТДЕЛЕНИЕ',
    dataIndex: 'departament',
    // sorter: (a, b) => a.room - b.room,
    // onFilter: (value: string, record) =>
    // record.consultation.toLowerCase().includes(value.toLowerCase()),
    sorter: (a, b) => b.departament.localeCompare(a.departament),
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

    onFilter: (value: string | number | boolean, record) =>
      record.consultation === value,
  },
];

const data = [
  {
    key: '1',
    sex: 1,
    age: 25,
    fio: 'Аджармягубидян Сергей Сергеевич',
    room: 16,
    departament: 'Реабилитации',
    consultation: 'суставы1',
  },
  {
    key: '2',
    sex: 0,
    age: 26,
    fio: 'Ири Ирина Ириновна',
    room: 367,
    departament: 'Аэробики',
    consultation: 'суставы1',
  },
  {
    key: '3',
    sex: 1,
    age: 37,
    fio: 'Виталь Виталий Витальевич',
    room: 314,
    departament: 'Гиброфатики',
    consultation: 'суставы2',
  },
  {
    key: '4',
    sex: 1,
    age: 48,
    fio: 'Павлу Павел Павлович',
    room: 1004,
    departament: 'Хирургии',
    consultation: 'суставы3',
  },
  {
    key: '5',
    sex: 0,
    age: 48,
    fio: 'Крис Кристина Кристиновна',
    room: 1004,
    departament: 'Ординаторской',
    consultation: 'суставы3',
  },
  {
    key: '6',
    sex: 1,
    age: 19,
    fio: 'Дени Денис Денисович',
    room: 202,
    departament: 'Реабилитации',
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

const Home = () => {
  const navigate = useNavigate();
  const { searchValue } = useContext(SearchContext);

  const filteredData = data.filter((item) =>
    item.fio.toLowerCase().includes(searchValue.toLowerCase())
  );
  // const filteredData = data.filter((item) =>
  //   item.fio.toLowerCase().includes(searchValue.toLowerCase())
  // );

  const handleRowClick = (record: DataType, rowIndex: number | undefined) => {
    navigate('/lists');
    console.log(record);
    console.log(rowIndex);
  };

  return (
    <Space>
      <S.LayoutStyled>
        {/* <div > */}
        <Table
          columns={columns}
          dataSource={filteredData}
          onChange={onChange}
          onRow={(record, rowIndex) => {
            return {
              onClick: () => {
                handleRowClick(record, rowIndex);
                console.log(record);
              },
            };
          }}
        />
        {/* </div> */}
      </S.LayoutStyled>
    </Space>
  );
};

export default Home;
