import React, {useState} from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  SafeAreaView,
} from 'react-native';
import {styles} from './ModalFiltersStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const RenderItems = (renderImage, callback, state, item) => {
  return (
    <TouchableHighlight
      key={item}
      underlayColor="grey"
      onPress={() => {
        if (item === state) {
          return callback('all');
        }
        callback(item);
      }}
      style={styles.inputsCont}>
      <View style={styles.inputs}>
        <Text>Фильтр по букве: {item.toUpperCase()}</Text>
        {renderImage(state, item)}
      </View>
    </TouchableHighlight>
  );
};

const ModalFilters = props => {
  const {openModal, handlerOpenModal, applyFilterModal, filters} = props;
  const [state, setState] = useState(filters);

  const listLetter = ['a', 'b', 'c'];

  const renderImage = (number, curr) => {
    if (number === curr) {
      return <Icon name="check" size={20} color="blue" light />;
    } else {
      return null;
    }
  };

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={openModal}>
        <View style={styles.containerCenteredView}>
          <View style={styles.modalView}>
            <Text style={styles.textTitle}>Фильтры</Text>
            <Text style={styles.lable}>Lable</Text>
            {listLetter.map(item =>
              RenderItems(renderImage, setState, state, item),
            )}
          </View>
          <View>
            <TouchableHighlight
              underlayColor="grey"
              style={styles.lowButton}
              onPress={() => applyFilterModal(state)}>
              <Text style={styles.textStyleFilter}>Фильтровать</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="grey"
              style={styles.lowButton}
              onPress={() => {
                handlerOpenModal();
                setState(filters);
              }}>
              <Text style={styles.textStyleCancel}>Отмена</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ModalFilters;
