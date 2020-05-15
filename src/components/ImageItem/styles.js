import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageItem: {
    width: '100%',
    marginTop: 20,
    padding: 10,

    backgroundColor: '#a78fff',
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  imageAuthor: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default styles;
