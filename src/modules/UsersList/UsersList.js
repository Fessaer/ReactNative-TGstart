/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useLayoutEffect} from 'react';
import User from '../../components/User';
import EmptyList from '../../components/EmptyList';
import {
  FlatList,
  Alert,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {styles} from './UsersListStyles';
import ModalFilters from '../../components/ModalFilters';
import Icon from 'react-native-vector-icons/FontAwesome';

const RenderUser = ({item, navigation}) => {
  // console.log(item.login.uuid);
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
      navigation={navigation}
      id={item.login.uuid}
    />
  );
};

const UsersList = props => {
  const {data, page, loading, refresh} = props;
  const {
    fetchUsers,
    startLoading,
    startRefresh,
    selectFilter,
    navigation,
  } = props;
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

  const iconHeader = <Icon name="heart" size={20} color="blue" light />;
  const iconRefresh = <Icon name="refresh" size={20} color="blue" light />;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={styles.containerTouch} onPress={openAlert}>
          {iconHeader}
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={styles.containerTouch} onPress={refreshButton}>
          {iconRefresh}
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
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
        renderItem={({item}) => (
          <RenderUser item={item} navigation={navigation} />
        )}
        keyExtractor={(item, index) => index.toString()}
        refreshing={refresh}
        onRefresh={refreshList}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.8}
        ListFooterComponent={footer}
      />
    </SafeAreaView>
  );
};

export default UsersList;
