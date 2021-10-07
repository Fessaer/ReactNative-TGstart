import React from 'react';
import UsersList from './modules/UsersList';
import store from './store/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserDetails from './components/UserDetails';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserPage from './components/UserPage';

const Stack = createStackNavigator();

const App = () => {
  const iconBack = <Icon name="angle-left" size={25} color="blue" light />;

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
            headerTitleAlign: 'center',
            headerBackTitleVisible: true,
            headerBackTitle: ' Назад',
            headerBackImage: () => iconBack,
            headerBackTitleStyle: {color: 'blue'},
          }}>
          <Stack.Screen
            name="UsersList"
            component={UsersList}
            options={{title: 'Список пользователей'}}
          />
          <Stack.Screen name="UserDetails" component={UserDetails} />
          <Stack.Screen name="UserPage" component={UserPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
