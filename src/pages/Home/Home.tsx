// import Button, { ButtonVariants } from '../../components/button';
// import { useAppDispatch, useAppSelector } from '../../store/store';
// import {
//   DropFilterArrSelector,
//   themeSelector,
//   todosSelector,
// } from '../../store/todos/selectors';
// import {
//   addTodoAction,
//   sortTodosAction,
//   toggleThemeAction,
// } from '../../store/todos/reducer';
// import classNames from 'classnames';
// import {
//   SortTypes,
//   ThemeVariants,
// } from '../../components/DropDownInput/constants';
// import { SVGComponent } from '../../components/SvgComp';
// import { Header } from '../../components/Header/Header';
// import DropDownInput from '../../components/DropDownInput/DropDownInput';
// import { Link, } from 'react-router-dom';
// import s from './Home.module.scss';
// import { useEffect, useState } from 'react';
// import { SortedButtons } from '../../components/sortedButton/SortedButtons';

import { Input, Layout, Space } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';

const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

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
  // const dispatch = useAppDispatch();
  // const todos = useAppSelector(todosSelector);
  // const dropTodos = useAppSelector(DropFilterArrSelector);
  // const theme = useAppSelector(themeSelector);

  // const changeTheme = () => {
  //   dispatch(toggleThemeAction());
  // };

  // const [value, setValue] = useState('');
  // const [options, setOptions] = useState(dropTodos);

  // const onChange = (value: string) => {
  //   setValue(value);
  //   setOptions(todos);
  //   const trimValue = value.trim();
  //   const typeFirstSymb = trimValue[0];

  //   if (trimValue === '' || typeFirstSymb === undefined) {
  //     setOptions(todos);

  //     return options;
  //   }

  //   if (
  //     typeFirstSymb.match(/[а-я]/i) ||
  //     todos.some((todo) => todo.text.includes(trimValue))
  //   ) {
  //     setOptions(
  //       todos.filter((todo) =>
  //         todo.text.toLocaleLowerCase().includes(trimValue.toLocaleLowerCase())
  //       )
  //     );

  //     return options;
  //   }

  //   if (
  //     typeFirstSymb.match(/[0-9]/) ||
  //     todos.some((todo) => todo.id.includes(trimValue))
  //   ) {
  //     setOptions(todos.filter((todo) => todo.id.includes(trimValue)));

  //     return options;
  //   }

  //   setOptions([]);

  //   return options;
  // };

  // useEffect(() => {
  //   onChange(value);
  // }, [todos]);

  // const onSubmit = () => {
  //   if (!!value.trim()) {
  //     dispatch(addTodoAction(value));
  //     setValue('');
  //     dispatch(sortTodosAction(SortTypes.all));
  //     setOptions(todos);
  //   }
  // };

  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Header style={headerStyle}>
          <div>E</div>
          <Input placeholder="Basic usage" />
          {/* <RedoOutlined rev={undefined} style={{transform: 'rotate(218deg)'}} /> */}
          {/* <Avatar
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'inherit',
              border: '1px solid white',
              minWidth: '32px',
              minHeight: '40px',
            }}
            icon={<UserOutlined style={{ width: '29px' }} rev={undefined} />}
          /> */}
        </Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  );
};

export default Home;

// <div
//   className={classNames(s.Home, {
//     [s.dark]: theme === ThemeVariants.dark,
//     [s.light]: theme === ThemeVariants.light,
//   })}
// >
//   <div className={s.Menu}>
//     <Link to="/" className={s.Links}>
//       {' '}
//       Home{' '}
//     </Link>
//     <Link to="/local-todos" className={s.Links}>
//       {' '}
//       List of local Todo
//     </Link>
//     <Link to="/api-todos" className={s.Links}>
//       List of API Todo
//     </Link>
//     <Link to="/page-antd" className={s.Links}>
//       Antd-page
//     </Link>
//     <Button
//       onClick={changeTheme}
//       variant={ButtonVariants.defaultTheme}
//       activeTheme={ThemeVariants.dark === theme ? true : false}
//     >
//       {theme}
//     </Button>
//   </div>
//   <SVGComponent className={s.helllo} />
//   <Header />
//   <DropDownInput
//     options={options}
//     value={value}
//     onChange={onChange}
//     onSubmit={onSubmit}
//   />
//   <SortedButtons />
// </div>
