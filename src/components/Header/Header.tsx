import { FC } from 'react';
// import styles from './Header.module.scss';
import * as S from './styles';

const Header: FC = () => {
  return (
    <S.HeaderStyle>
    <S.StyledLogo />
    <S.StyledInput placeholder="ФИО" />
    <S.StyledReload />
    <S.StyledProfile />
  </S.HeaderStyle>
  );
};

export { Header };
