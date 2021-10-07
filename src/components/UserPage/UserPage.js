import React, {useLayoutEffect} from 'react';
import {View, Image} from 'react-native';
import {styles} from './UserPageStyles';

const UserPage = props => {
  const {route, navigation} = props;
  const {image, name} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [name, navigation]);

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
