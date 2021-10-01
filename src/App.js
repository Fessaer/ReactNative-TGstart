/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import UsersList from './modules/UsersList';
import store from './store/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#f0f0f0', height: '100%'}}>
      <Provider store={store}>
        <UsersList />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
