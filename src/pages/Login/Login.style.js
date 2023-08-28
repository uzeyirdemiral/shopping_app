import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7F057D',
  },
  image: {
    marginTop: 20,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
  },
  input_container: {
    marginTop: 60,
  },
});
