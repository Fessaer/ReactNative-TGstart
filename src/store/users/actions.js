import fetchData from '../../modules/UsersList/services/fetchData';

export const getUsers = (data, page) => ({
  type: 'GETUSERS',
  payload: {
    data,
    page,
  },
});

export const startLoading = bool => ({
  type: 'START_LOADING',
});

export const startRefresh = bool => ({
  type: 'START_REFRESH',
});

export const resopneError = bool => ({
  type: 'RESPONSE_ERROR',
});

export const fetchUsers = (props, callbackLoad) => {
  return async dispatch => {
    callbackLoad();
    const fetchingUsers = await fetchData(props);
    dispatch(getUsers(fetchingUsers.data, props));
  };
};
