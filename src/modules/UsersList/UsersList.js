/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import User from '../../components/User';
import EmptyList from '../../components/EmptyList';
import axios from 'axios';
import {FlatList, Alert, ActivityIndicator} from 'react-native';
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
  const [page, setPage] = useState(INIT_PAGE);
  const [isRefresh, setRefresh] = useState(false);
  const INIT_PAGE = 1;

  const handleLoadMore = () => {
    if (isLoading || isRefresh) {
      return;
    }
    setLoading(true);
    handlerFetchUsers(page + 1);
  };

  const openAlert = () => {
    const item = randomUsers[Math.floor(Math.random() * randomUsers.length)];
    Alert.alert('', `Hello, ${item.name.first}`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  const refreshButton = () => {
    if (isLoading || isRefresh) {
      return;
    }
    setLoading(true);
    setRandomUsers([]);
    handlerFetchUsers(INIT_PAGE);
  };

  const refreshList = () => {
    if (isLoading || isRefresh) {
      return;
    }
    setRefresh(true);
    handlerFetchUsers(INIT_PAGE);
  };

  const handlerFetchUsers = async props => {
    let API_RANDOMUSERS = `https://randomuser.me/api/?page=${props}&results=10`;
    if (isLoading || isRefresh) {
      return;
    }
    await axios
      .get(API_RANDOMUSERS)
      .then(response => {
        setRandomUsers(prev => {
          if (props === INIT_PAGE) {
            return response.data.results;
          } else {
            return [...prev, ...response.data.results];
          }
        });
        setLoading(false);
        setRefresh(false);
        setPage(props);
      })
      .catch(error => {
        setLoading(false);
        setRefresh(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    handlerFetchUsers(page);
  }, []);

  const footer = () => {
    if (randomUsers.length && isLoading) {
      return <ActivityIndicator size="small" color="grey" />;
    }
    return null;
  };

  return (
    <>
      <Header
        title={'Список пользователей'}
        onPressLeft={openAlert}
        onPressRight={refreshButton}
      />
      <FlatList
        contentContainerStyle={styles.containerList}
        ListEmptyComponent={
          <EmptyList text={'нет данных'} loading={isLoading} />
        }
        data={randomUsers}
        renderItem={({item}) => <RenderUser item={item} />}
        keyExtractor={(item, index) => index.toString()}
        refreshing={isRefresh}
        onRefresh={refreshList}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.8}
        ListFooterComponent={footer}
      />
    </>
  );
};

export default UsersList;
