import React, { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';
import { authSelector } from '../store/auth/selectors';
import LoginComp from '../components/LoginComp/LoginComp';

type RequireAuthProps = {
  children: ReactNode;
};

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const navigate = useNavigate();
  // const location = useLocation();
  const auth = useAppSelector(authSelector);

  if (!auth) {
    navigate('/login');

    return <LoginComp />;
  }
  console.log('auth');
  
  return <>{children}</>;
};

export default RequireAuth;
