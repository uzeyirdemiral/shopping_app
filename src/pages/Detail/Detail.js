import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import config from '../../../config';
import Loading from '../../components/Loading/Loading';

function Detail({route}) {
  const {id} = route.params;
  const {loading, data} = useFetch(config.API_URL + '/' + id);

  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.Image} source={{uri: data.image}} />
        <View style={styles.body_container}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.decription}>{data.description} </Text>
          <Text style={styles.price}>{data.price} TL </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Image: {
    height: Dimensions.get('window').height / 2,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body_container: {
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
  decription: {
    fontSize: 15,
  },
  price: {
    textAlign: 'right',
    fontSize: 15,
  },
});

export default Detail;
