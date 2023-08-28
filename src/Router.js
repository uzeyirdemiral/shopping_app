import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';

import Product from './pages/Products/Product';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import Loading from './components/Loading/Loading';
const Stack = createNativeStackNavigator();

function Router() {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  const dispatch=useDispatch();
  

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : userSession == null ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <>
          <Stack.Navigator>
            <Stack.Screen
              name="Product"
              component={Product}
              options={{
                title: 'Products',
                headerStyle: {backgroundColor: '#7F057D'},
                headerTitleStyle: {color: 'white'},
                headerTitleAlign: 'center',
                headerRight: () => (
                  <Icon name="logout" size={30} color="white" onPress={()=>dispatch({type:"REMOVE_USER"})} />
                ),
              }}
            />
            <Stack.Screen name="Detail" component={Detail} />
          </Stack.Navigator>
        </>
      )}
      <StatusBar backgroundColor={'#7F057D'}></StatusBar>
    </NavigationContainer>
  );
}

export default Router;
