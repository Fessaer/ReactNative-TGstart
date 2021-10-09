/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import UserDetails from '../src/components/UserDetails/UserDetails';
import {dataMock} from '../testing/dataMock';
import selectorVasability from '../src/modules/UsersList/selectors/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const fnFilteredMock = data => {
  return data.data.filter(item => {
    const upName = item.name.first.toUpperCase();
    return upName.includes(data.filterShow.toUpperCase());
  });
};
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

describe('Filter function a', () => {
  it('selcet A', () => {
    const cloneMock = JSON.parse(JSON.stringify(dataMock));
    cloneMock.filterShow = 'a';
    const result = selectorVasability(cloneMock);
    const filterMock = fnFilteredMock(cloneMock);
    expect(filterMock.length).toBe(result.length);
  });
});

describe('Filter function b', () => {
  it('selcet B', () => {
    const cloneMock = JSON.parse(JSON.stringify(dataMock));
    cloneMock.filterShow = 'b';
    const result = selectorVasability(cloneMock);
    const filterMock = fnFilteredMock(cloneMock);
    expect(filterMock.length).toBe(result.length);
  });
});

describe('Filter function c', () => {
  it('selcet C', () => {
    const cloneMock = JSON.parse(JSON.stringify(dataMock));
    cloneMock.filterShow = 'c';
    const result = selectorVasability(cloneMock);
    const filterMock = fnFilteredMock(cloneMock);
    expect(filterMock.length).toBe(result.length);
  });
});
