import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import User from '../../components/User';
import EmptyList from '../../components/EmptyList';
import axios from 'axios';
import {FlatList, View, ActivityIndicator} from 'react-native';
import {styles} from './UsersListStyles';

const RenderUser = ({item}) => {
  return (
    <User
      imageAvatar={item.picture.thumbnail}
      avatarTitle={item.name.first}
      imageInfo={'https://reactnative.dev/img/tiny_logo.png'}
      labelLeft={'nat'}
      labelMiddle={'gender'}
      labelRight={'age'}
      bodyTextLeft={item.nat}
      bodyTextMiddle={item.gender}
      bodyTextRight={item.dob.age}
    />
  );
};

const UsersList = () => {
  const [randomUsers, setRandomUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const API_RANDOMUSERS = 'https://randomuser.me/api/?results=20';

  const handlerFetchUsers = async () => {
    if (isLoading) {
      return;
    }
    setLoading(prev => true);
    await axios
      .get(API_RANDOMUSERS)
      .then(response => {
        setRandomUsers(prev => response.data.results);
        setLoading(prev => false);
      })
      .catch(error => {
        setLoading(prev => false);
      });
  };

  useEffect(() => {
    handlerFetchUsers();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="grey" />
      </View>
    );
  }

  return (
    <>
      <Header title={'Список пользователей'} onPressRight={handlerFetchUsers} />
      <FlatList
        contentContainerStyle={styles.containerList}
        ListEmptyComponent={
          <EmptyList text={'нет данных'} loading={isLoading} />
        }
        data={randomUsers}
        renderItem={({item}) => <RenderUser item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};

export default UsersList;
