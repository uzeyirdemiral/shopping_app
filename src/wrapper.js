import React from 'react'
import Router from './Router';
import AuthProvider from './context/AuthProvider/AuthProvider';

export default () => {
  return (
    <AuthProvider>
      <Router></Router>
    </AuthProvider>
  );
};
