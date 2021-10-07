import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    height: '100%',
  },
  labelText: {
    color: 'grey',
    fontSize: 8.63,
    fontFamily: 'SFProText-Regular',
    marginBottom: 2,
  },
  text: {
    color: '#131f31',
    fontSize: 10,
    fontFamily: 'SFProText-Regular',
  },
  containerText: {
    paddingVertical: 7,
    width: '100%',
    borderBottomColor: 'rgb(175, 178, 180)',
    borderBottomWidth: 0.4,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginRight: 6.6,
  },
  containerTouch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textTouch: {
    color: 'blue',
    marginHorizontal: 3,
  },
});

export default styles;
