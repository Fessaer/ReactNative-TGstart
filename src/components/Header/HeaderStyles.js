import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 13.28,
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 3.32,
  },
  buttonContainerBack: {
    width: 40,
    flexBasis: 40,
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainerNext: {
    width: 40,
    flexBasis: 40,
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonText: {
    color: 'blue',
    fontSize: 10,
    fontFamily: 'SFProText-Regular',
    paddingHorizontal: 3.3,
    paddingBottom: 1,
  },
  imageStyleNext: {
    width: 7.3,
    height: 19.25,
  },
  imageStyleBack: {
    transform: [{rotate: '180 deg'}],
    width: 7.3,
    height: 19.25,
  },
  titleContainer: {
    flex: 1,
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 11.28,
    fontFamily: 'SFProText-Regular',
    fontWeight: 'bold',
  },
});
