/* eslint-disable react-hooks/exhaustive-deps */
import React, {useLayoutEffect} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './UserDetailsStyles';

const UserDetails = props => {
  const {navigation, route, data} = props;
  const {userId} = route.params;

  const state = data.find(item => item.login.uuid === userId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Ифромация',
      headerRight: () => {
        if (!state) {
          return null;
        } else {
          return (
            <Image
              style={styles.avatar}
              source={{
                uri: state.picture.thumbnail,
              }}
            />
          );
        }
      },
    });
  }, [navigation]);

  const componentInfo = (label, item) => {
    return (
      <View style={styles.containerText}>
        <Text style={styles.labelText}>{label}</Text>
        <Text style={styles.text}>{item}</Text>
      </View>
    );
  };

  if (!state) {
    return null;
  }

  return (
    <View style={styles.container}>
      {componentInfo('Имя', state.name.first)}
      {componentInfo('Адрес', state.location.city)}
      {componentInfo('email', state.email)}
      {componentInfo('Телефон', state.phone)}
      {componentInfo('Дата регистрации', state.registered.date)}
    </View>
  );
};
export default UserDetails;
