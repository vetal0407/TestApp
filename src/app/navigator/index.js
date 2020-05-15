import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Gallery from '../../screens/Gallery';
import FullImage from '../../screens/FullImage/FullImage';

const navigator = createStackNavigator(
  {
    Gallery,
    FullImage,
  },
  {
    initialRouteName: 'Gallery',
  },
);

export default createAppContainer(navigator);
