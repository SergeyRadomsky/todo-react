import { Button, DatePicker, Space, Carousel } from 'antd';
// import { Button, DatePicker, Space, Menu, Carousel } from 'antd';
import * as S from './styles';

// import {
//   MailOutlined,
//   AppstoreOutlined,
//   SettingOutlined,
// } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
import styled from 'styled-components';
// import classNames from 'classnames';

// type MenuItem = Required<MenuProps>['items'][number];

const StyledButton = styled(Button)`
  background-color: red;
  color: white;
`;

const contentStyle: React.CSSProperties = {
  // height: '160px',
  width: '300px',
  color: '#fff',
  // lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  // marginBottom: '100px',
};

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
//   type?: 'group'
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   } as MenuItem;
// }

// const items: MenuProps['items'] = [
//   getItem('Navigation One', 'sub1', <MailOutlined rev={undefined} />, [
//     getItem(
//       'Item 1',
//       'g1',
//       null,
//       [getItem('Option 1', '1'), getItem('Option 2', '2')],
//       'group'
//     ),
//     getItem(
//       'Item 2',
//       'g2',
//       null,
//       [getItem('Option 3', '3'), getItem('Option 4', '4')],
//       'group'
//     ),
//   ]),

//   getItem('Navigation Two', 'sub2', <AppstoreOutlined rev={undefined} />, [
//     getItem('Option 5', '5'),
//     getItem('Option 6', '6'),
//     getItem('Submenu', 'sub3', null, [
//       getItem('Option 7', '7'),
//       getItem('Option 8', '8'),
//     ]),
//   ]),

//   { type: 'divider' },

//   getItem('Navigation Three', 'sub4', <SettingOutlined rev={undefined} />, [
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),
//     getItem('Option 11', '11'),
//     getItem('Option 12', '12'),
//   ]),
// ];

const Antdpage: React.FC = () => {
  // const onClick: MenuProps['onClick'] = (e) => {
  //   console.log('click ', e);
  // };

  return (
    <S.AntdpageS>
      <S.Scanner id={'qr-reader'}>Barcode Scanner</S.Scanner>
      <Button>fuck</Button>
      <Space>
        <DatePicker />
        <StyledButton type="primary">Primary Button</StyledButton>
      </Space>
      {/* <Menu
        className={S.Menuu}
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      /> */}
      <Carousel effect="fade">
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </S.AntdpageS>
  );
};

export default Antdpage;
