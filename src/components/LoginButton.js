// jshint esversion: 8

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()} variant="primary" className="feedback-input">
        Log In
      </button>
    )
  );
};

export default LoginButton;
