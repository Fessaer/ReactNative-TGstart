/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import User from './components/User';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#f0f0f0', height: '100%'}}>
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
