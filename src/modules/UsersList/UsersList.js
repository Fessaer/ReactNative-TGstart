/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import Header from '../../components/Header';
import User from '../../components/User';
import EmptyList from '../../components/EmptyList';
import {FlatList, Alert, ActivityIndicator} from 'react-native';
import {styles} from './UsersListStyles';
import {connect} from 'react-redux';
import * as actions from '../../store/users/actions';

const mapStateToProps = state => {
  const {data, page, loading, refresh} = state.users;
  return {data, page, loading, refresh};
};

const actionCreators = {
  fetchUsers: actions.fetchUsers,
  startLoading: actions.startLoading,
  startRefresh: actions.startRefresh,
};

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
  const {fetchUsers, startLoading, startRefresh} = props;

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

  const handlerFetchUsers = (props, activeLoad) => {
    const activeSpin = {
      refresh: () => startRefresh(),
      loading: () => startLoading(),
    };
    fetchUsers(props, activeSpin[activeLoad]);
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

export default connect(
  mapStateToProps,
  actionCreators,
)(UsersList);
