/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useMemo} from 'react';
import Header from '../../components/Header';
import User from '../../components/User';
import EmptyList from '../../components/EmptyList';
import {FlatList, Alert, ActivityIndicator} from 'react-native';
import {styles} from './UsersListStyles';
import ModalFilters from '../../components/ModalFilters';

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

const UsersList = props => {
  const {data, page, loading, refresh} = props;
  const {fetchUsers, startLoading, startRefresh, selectFilter} = props;
  const [openModal, setOpenModal] = useState(false);
  const [filters, setFilters] = useState('all');

  const handlerFilter = str => {
    setFilters(str);
  };

  const openFilterModal = () => {
    setOpenModal(!openModal);
  };

  const applyFilterModal = str => {
    setFilters(str);
    setOpenModal(!openModal);
    selectFilter(str);
  };

  const openAlert = () => {
    const item = data[Math.floor(Math.random() * data.length)];
    Alert.alert('', `Hello, ${item.name.first}`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  const handleLoadMore = () => {
    if (loading || refresh) {
      return;
    }
    handlerFetchUsers(page + 1, 'loading');
  };

  const refreshButton = () => {
    if (loading || refresh) {
      return;
    }
    handlerFetchUsers(1, 'loading');
  };

  const refreshList = () => {
    if (loading || refresh) {
      return;
    }
    handlerFetchUsers(1, 'refresh');
  };

  const handlerFetchUsers = (prop, activeLoad) => {
    const activeSpin = {
      refresh: () => startRefresh(),
      loading: () => startLoading(),
    };
    fetchUsers(prop, activeSpin[activeLoad]);
  };

  useEffect(() => {
    handlerFetchUsers(page, 'loading');
  }, []);

  const footer = () => {
    if (data.length && loading) {
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
        handlerOpenModal={openFilterModal}
      />
      <ModalFilters
        openModal={openModal}
        handlerOpenModal={openFilterModal}
        handlerFilter={handlerFilter}
        filters={filters}
        applyFilterModal={applyFilterModal}
      />
      <FlatList
        contentContainerStyle={styles.containerList}
        ListEmptyComponent={<EmptyList text={'нет данных'} loading={loading} />}
        data={data}
        renderItem={({item}) => <RenderUser item={item} />}
        keyExtractor={(item, index) => index.toString()}
        refreshing={refresh}
        onRefresh={refreshList}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.8}
        ListFooterComponent={footer}
      />
    </>
  );
};

export default UsersList;
