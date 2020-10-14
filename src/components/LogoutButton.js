// jshint esversion: 8

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button onClick={() => logout()} variant="primary" className="feedback-input">
        Log Out
      </button>
    )
  );
};

export default LogoutButton;
