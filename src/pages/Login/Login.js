import React from 'react';
import {View, Image, Alert} from 'react-native';
import Input from '../../components/Input/Input';
import styles from '../Login/Login.style';
import Button from '../../components/Button/Button';
import {Formik} from 'formik';
import usePost from '../../hooks/usePost/usePost';
import config from '../../../config';
import {useDispatch} from 'react-redux';
function Login() {
  const {data, post, loading} = usePost();
  const dispatch = useDispatch();



  function handleLogin(values) {
    post(config.API_LOGIN_URL + '/login', values);

    if (data) {
      if (data.status === 'Error') {
        Alert.alert('dükkan', 'kullanıcı bulunamadı');
      } else {
        dispatch({type: 'SET_USER', payload: {user}}); 
        // navigation.navigate('Product'); //asyncstorage dan dolayı gerek yok 
        console.log(values);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/logo1.png')} />
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.input_container}>
            <Input
              placeholder="Kullanıcı adı giriniz "
              onChangeText={handleChange('username')}
              value={values.username}
              iconName="account"
            />
            <Input
              placeholder="Şifre giriniz"
              onChangeText={handleChange('password')}
              value={values.password}
              iconName="key"
              isSecure
            />
            <Button onPress={handleSubmit} name="Giriş Yap" loading={loading} />
            <Button name="Kayıt Ol " />
          </View>
        )}
      </Formik>
    </View>
  );
}
export default Login;

const user = {
  address: {
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {
    firstname: 'john',
    lastname: 'doe',
  },
  phone: '1-570-236-7033',
  __v: 0,
};
