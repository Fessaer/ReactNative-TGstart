/**
 * @format
 */

import 'react-native';
import {dataMock} from '../../../../testing/dataMock';
import selectorVasability from '../../../../src/modules/UsersList/selectors/index';

const fnFilteredMock = data => {
  return data.data.filter(item => {
    const upName = item.name.first.toUpperCase();
    return upName.includes(data.filterShow.toUpperCase());
  });
};

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
