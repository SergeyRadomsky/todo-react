import { FC } from 'react';
import styles from './Header.module.scss';
import { Button, DatePicker, Pagination, Space } from 'antd';

const Header: FC = () => {
  return (
    <>
      <header className={styles.Header}>
        <h1>To do List</h1>
      </header>
      <Space className={styles.Header}>
        <DatePicker />
        <Button type="primary">Primary Button</Button>
      </Space>
      <Pagination  total={50} />
    </>
  );
};

export { Header };
