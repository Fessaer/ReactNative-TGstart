import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  inputsCont: {
    borderBottomColor: 'rgba(175, 178, 180, .5)',
    borderBottomWidth: 0.5,
    height: 29.2,
  },
  inputs: {
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lable: {
    fontSize: 8.63,
    color: '#afb2b4',
    lineHeight: 12,
    fontWeight: 'bold',
    marginBottom: 3.32,
  },
  modalTitle: {
    width: '100%',
  },
  textTitle: {
    fontSize: 22.5,
    color: '#131f31',
    lineHeight: 27,
    marginBottom: 16.6,
  },
  lowButton: {
    borderRadius: 6.64,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
  },

  containerCenteredView: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    flexGrow: 1,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 6.64,
    padding: 10,
  },
  textStyleFilter: {
    color: '#005bff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 13.28,
  },
  textStyleCancel: {
    color: '#f66e00',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 13.28,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
