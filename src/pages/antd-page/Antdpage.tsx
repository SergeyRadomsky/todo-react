// import { Button } from 'antd';
// import { Button, DatePicker, Space, Carousel, Image } from 'antd';
// import { Button, DatePicker, Space, Menu, Carousel } from 'antd';
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';
import * as S from './styles';

// import {
//   MailOutlined,
//   AppstoreOutlined,
//   SettingOutlined,
// } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import classNames from 'classnames';

// type MenuItem = Required<MenuProps>['items'][number];

// const TestCarousel = styled(Carousel)`
//   margin-top: 20px;
// `;

// const contentStyle: React.CSSProperties = {
//   // height: '160px',
//   // width: '300px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
//   // marginBottom: '100px',
// };

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
      <S.Scanner id={'qr-reader'}>Carousel</S.Scanner>
      <CustomCarousel />
    </S.AntdpageS>
  );
};

export default Antdpage;


      // {/* <Menu
      //   className={S.Menuu}
      //   onClick={onClick}
      //   style={{ width: 256 }}
      //   defaultSelectedKeys={['1']}
      //   defaultOpenKeys={['sub1']}
      //   mode="inline"
      //   items={items}
      // /> */}
      // {/* <TestCarousel effect="fade" className={S.customSelect} dots>
      //   <div>
      //     <Image
      //       width={200}
      //       height={200}
      //       src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      //     />
      //     <Image
      //       height={200}
      //       width={200}
      //       src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
      //     />
      //     <Image
      //       height={200}
      //       width={200}
      //       src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
      //     />
      //   </div>
      //   <div>
      //     <Image
      //       height={200}
      //       width={200}
      //       src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
      //     />
      //   </div>
      //   <div>
      //     <Image
      //       height={200}
      //       width={200}
      //       src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      //     />
      //   </div>
      //   <div>
      //     <Image
      //       height={200}
      //       width={200}
      //       src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
      //     />
      //   </div>
      // </TestCarousel> */}