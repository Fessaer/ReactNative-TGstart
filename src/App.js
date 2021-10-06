import React from 'react';
import UsersList from './modules/UsersList';
import store from './store/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: {
              fontSize: 11.28,
              fontFamily: 'SFProText-Regular',
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="UsersList"
            component={UsersList}
            options={{title: 'Список пользователей'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
