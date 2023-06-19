import { FC, useContext } from 'react';
import * as S from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchContext from '../SearchContext';

const Header: FC = () => {
  const location = useLocation();
  const hideInput = location.pathname !== '/home';
  const navigate = useNavigate();
//  const [searchValue, setSearchValue] = useState('');
 const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <S.HeaderStyle>
      <S.StyledLogo />
      {!hideInput && (
        <S.StyledInput
          placeholder="ФИО"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      )}
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
