/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import UsersList from './modules/UsersList';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#f0f0f0', height: '100%'}}>
      <UsersList />
    </SafeAreaView>
  );
};

export default App;
