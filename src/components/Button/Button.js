import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

import styles from '../Button/Button.style';
function Button({name, onPress, loading}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.button_text}>{name}</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
