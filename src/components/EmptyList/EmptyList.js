import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './EmptyListStyles';

const EmptyList = props => {
  const {text, loading} = props;
  if (!loading) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text>{text}</Text>
      </View>
    );
  } else {
    return null;
  }
};
export default EmptyList;
