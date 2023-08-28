import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('@USER').then(userSession => {
      userSession && setUser(JSON.parse(userSession));
      //userSession ? setUser(JSON.parse(userSession)) : setUser(null); 
      setAuthLoading(false);
    });
  }, []);

  const store = createStore(reducer, {user, isAuthLoading});
  return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;


