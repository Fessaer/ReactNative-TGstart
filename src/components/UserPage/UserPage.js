import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './UserPageStyles';

const UserPage = props => {
  const {route} = props;
  const {image} = route.params;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};

export default UserPage;
