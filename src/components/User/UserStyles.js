import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255, 255, 255)',
    paddingVertical: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  header: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleName: {
    fontSize: 11.28,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 6.6,
  },
  infoImage: {
    width: 19.2,
    height: 19.2,
  },
  bodyGroup: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginTop: 6.64,
    height: 29.21,
    justifyContent: 'space-between',
  },
  bodyContainerTitle: {
    height: 29.21,
    justifyContent: 'space-between',
  },
  bodyContainerItem: {
    height: '100%',
    justifyContent: 'space-between',
  },
  bodyTitleText: {
    fontSize: 11.28,
    lineHeight: 11,
  },
  label: {
    fontSize: 8.63,
    color: 'rgb(175, 178, 180)',
  },
  text: {
    fontSize: 8.63,
  },
});

export default styles;
