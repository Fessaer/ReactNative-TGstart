/**
 * @format
 */

import 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import UserDetails from '../src/components/UserDetails/UserDetails';
import {dataMock} from '../testing/dataMock';
import * as actions from '../src/store/users/actions';
import selectorVasability from '../src/modules/UsersList/selectors/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
describe('UserDetails', () => {
  it('renders correctly', () => {
    // const navigation = useNavigation();
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
    const filterMock = cloneMock.data.filter(item => {
      const upName = item.name.first.toUpperCase();
      return upName.includes(cloneMock.filterShow.toUpperCase());
    });
    expect(filterMock.length).toBe(result.length);
  });
});

describe('Filter function b', () => {
  it('selcet B', () => {
    const cloneMock = JSON.parse(JSON.stringify(dataMock));
    cloneMock.filterShow = 'b';
    const result = selectorVasability(cloneMock);
    const filterMock = cloneMock.data.filter(item => {
      const upName = item.name.first.toUpperCase();
      return upName.includes(cloneMock.filterShow.toUpperCase());
    });
    expect(filterMock.length).toBe(result.length);
  });
});

describe('Filter function c', () => {
  it('selcet C', () => {
    const cloneMock = JSON.parse(JSON.stringify(dataMock));
    cloneMock.filterShow = 'c';
    const result = selectorVasability(cloneMock);
    const filterMock = cloneMock.data.filter(item => {
      const upName = item.name.first.toUpperCase();
      return upName.includes(cloneMock.filterShow.toUpperCase());
    });
    expect(filterMock.length).toBe(result.length);
  });
});
