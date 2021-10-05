import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './HeaderStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props => {
  const {title, onPressLeft, onPressRight, handlerOpenModal} = props;

  const renderButtonBack = () => {
    if (onPressLeft) {
      return (
        <TouchableOpacity
          onPress={onPressLeft}
          style={styles.buttonContainerBack}>
          <Icon name="heart" size={20} color="blue" light />
        </TouchableOpacity>
      );
    } else {
      return <View style={styles.buttonContainerBack} />;
    }
  };

  const renderButtonNext = () => {
    if (onPressRight) {
      return (
        <TouchableOpacity
          onPress={onPressRight}
          style={styles.buttonContainerNext}>
          <Icon name="refresh" size={20} color="blue" light />
        </TouchableOpacity>
      );
    } else {
      return <View style={styles.buttonContainerNext} />;
    }
  };

  const renderOpenModal = () => {
    if (handlerOpenModal) {
      return (
        <TouchableOpacity onPress={handlerOpenModal} style={styles.modal}>
          <Icon name="th-list" size={20} color="blue" light />
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };
  return (
    <View style={styles.container}>
      {renderButtonBack()}
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
      {renderOpenModal()}
      {renderButtonNext()}
    </View>
  );
};

export default Header;
