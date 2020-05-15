import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

const ImageItem: React = ({image, openImage}) => {
  return (
    <TouchableOpacity
      style={styles.imageItem}
      onPress={() => openImage()}
    >
      <View style={styles.imageAuthor}>
        <Text>{image.user.username}</Text>
      </View>
      <View style={styles.wrapper}>
        <Image style={styles.image} source={{uri: image.urls.small}} />
        <Text style={styles.title}>{image.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ImageItem;
