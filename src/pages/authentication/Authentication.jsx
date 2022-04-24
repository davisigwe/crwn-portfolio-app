import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import './Authentication.scss';

function Auth() {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Auth;
