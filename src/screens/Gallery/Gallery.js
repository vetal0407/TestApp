import React, {useEffect} from 'react';
import {Text} from 'react-native';

import ImagesList from '../../components/ImagesList/ImagesList';

const Gallery = ({fetchImagesGet, data, isLoading, navigation}) => {
  useEffect(() => {
    fetchImagesGet();
  }, []);

  const openImage = (index) => {
    navigation.navigate('FullImage', {
      imageUrl: data[index].urls.full,
    });
  };

  return (
    <>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <ImagesList images={data} openImage={openImage} />
      )}
    </>
  );
};

export default Gallery;
