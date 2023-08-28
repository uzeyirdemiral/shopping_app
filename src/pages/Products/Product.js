import React from 'react';
import {View, FlatList} from 'react-native';
import config from '../../../config';
import ProductCard from '../ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';

function Product({navigation}) {
  const {data, loading} = useFetch(config.API_URL);

  const handleProductSelect = id => {
    navigation.navigate('Detail', {id});
  };
  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }
  return <FlatList data={data} renderItem={renderProduct} />;
}

export default Product;
