import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import UserDetails from '../../../src/components/UserDetails/UserDetails';
import {dataMock} from '../../../testing/dataMock';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

describe('UserDetails', () => {
  it('renders correctly', () => {
    renderer.create(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="UserDetails">
            {props => (
              <UserDetails
                {...props}
                data={dataMock.data}
                route={dataMock.route}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>,
    );
  });
});
