import React from 'react';
import {FlatList} from 'react-native';

import ImageItem from '../ImageItem/ImageItem';

const ImagesList = (props) => {
  return (
    <FlatList
      data={props.images}
      renderItem={({item, index}) => (
        <ImageItem image={item} openImage={() => props.openImage(index)} />
      )}
    />
  );
};

export default ImagesList;
