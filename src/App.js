/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from './components/Header';
import User from './components/User';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#f0f0f0', height: '100%'}}>
      <Header
        title={'Название страницы'}
        onPressLeft={() => console.log('left')}
        onPressRight={() => console.log('right')}
      />
      <User
        imageAvatar={'https://reactnative.dev/img/tiny_logo.png'}
        avatarTitle={'Дмитрий'}
        imageInfo={'https://reactnative.dev/img/tiny_logo.png'}
        labelLeft={'phone'}
        labelMiddle={'website'}
        labelRight={'company'}
        bodyTextLeft={'8912480****'}
        bodyTextMiddle={'website.com'}
        bodyTextRight={'Studio-TG'}
      />
    </SafeAreaView>
  );
};

export default App;
