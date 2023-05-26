import { FC } from 'react';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
      <header className={styles.Header}>
        <h1>To do List</h1>
      </header>
  );
};

export { Header };
