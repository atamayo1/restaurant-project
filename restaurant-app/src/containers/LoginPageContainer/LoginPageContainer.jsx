import React from 'react';
import LoginPageComponent from '../../components/LoginPageComponent/LoginPageComponent';

const LoginPageContainer = ({closeLogin, handleInput, SignIn}) => {

    return (
        <>
          <LoginPageComponent closeLogin={closeLogin} handleInput={handleInput} SignIn={SignIn} />
        </>
    );
};

export default LoginPageContainer;