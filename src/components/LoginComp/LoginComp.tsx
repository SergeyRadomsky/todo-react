import React, { useState } from 'react'; 
// import React from 'react';
// import { Button, Checkbox, Form, Input } from 'antd';
import { useLocation } from 'react-router-dom';


const LoginComp = () => {
    // const navigate = useNavigate();
    const location = useLocation();

    const formPage = location.state?.from?.pathname || '/';
    const [login, setLogin] = useState(false);


  return (
    <>
    <button onClick={() => setLogin(true)}>login?</button>
    <p>{formPage}</p>
    </>
  );
};

export default LoginComp;
