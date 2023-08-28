import React from 'react';
import {View, TextInput} from 'react-native';
import styles from '../Input/Input.style';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


function Input({placeholder,onChangeText,value,iconName,isSecure}) {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.text}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isSecure}
      />
      <Icon name={iconName} size={30} style={styles.icon}/>
    </View>
  );
}

export default Input;
