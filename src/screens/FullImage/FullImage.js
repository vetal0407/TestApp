import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './styles';

const FullImage = ({navigation}) => {
  const imageUrl = navigation.state.params.imageUrl;

  return (
    <View style={styles.imageContainer}>
      <FastImage style={styles.image} source={{uri: imageUrl}} />
    </View>
  );
};

export default FullImage;
