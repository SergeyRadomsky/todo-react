import { FC } from 'react';
import * as S from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: FC = () => {
  const location = useLocation();
  const hideInput = location.pathname !== '/home';
  const navigate = useNavigate();

  return (
    <S.HeaderStyle>
      <S.StyledLogo />
      {!hideInput && <S.StyledInput placeholder="ФИО" />}
      <div className="reload-close-profile">
        {!hideInput ? (
          <S.StyledReload
            onClick={() => {
              console.log('hello');
              window.location.reload();
            }}
          />
        ) : (
          <S.StyledClose
            onClick={() => {
              console.log('hello');
              navigate('/home');
            }}
          />
        )}
        <S.StyledProfile />
      </div>
    </S.HeaderStyle>
  );
};

export { Header };
