import React from 'react'; 
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/store';
import { auth, changeStatusOfLoginAction } from '../../store/auth/reducer';


const LoginComp = () => {
    const location = useLocation();
    const formPage = location.state?.from?.pathname || '/';
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleChange = () => {
      dispatch(changeStatusOfLoginAction());

      if (auth) {
        navigate('/local-todos');
      }
      // navigate('/login');
    };
    

  return (
    <>
    <button onClick={handleChange}>login?</button>
    <p>{formPage}</p>
    </>
  );
};

export default LoginComp;
