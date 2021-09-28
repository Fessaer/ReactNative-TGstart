import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from './HeaderStyles';

const Header = props => {
  const {title, onPressLeft, onPressRight} = props;
  const renderButtonBack = () => {
    if (onPressLeft) {
      return (
        <TouchableOpacity
          onPress={onPressLeft}
          style={styles.buttonContainerBack}>
          <Image
            style={styles.imageStyleBack}
            source={require('../../images/nextAndBack/forwardBlue.png')}
            tintColor="blue"
          />
          <Text style={styles.buttonText}>left</Text>
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
          <Text style={styles.buttonText}>right</Text>
          <Image
            style={styles.imageStyleNext}
            source={require('../../images/nextAndBack/forwardBlue.png')}
            tintColor="blue"
          />
        </TouchableOpacity>
      );
    } else {
      return <View style={styles.buttonContainerNext} />;
    }
  };
  return (
    <View style={styles.container}>
      {renderButtonBack()}
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
      {renderButtonNext()}
    </View>
  );
};

export default Header;
