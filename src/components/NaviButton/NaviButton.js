import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from './NaviButtonStyles';

const NaviButton = props => {
  const {onPressHandler, icon} = props;

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPressHandler}>
      {icon}
    </TouchableOpacity>
  );
};

export default NaviButton;
