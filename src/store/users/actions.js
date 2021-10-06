import fetchData from '../../modules/UsersList/services/fetchData';

export const getUsers = (data, page) => ({
  type: 'GETUSERS',
  payload: {
    data,
    page,
  },
});

export const startLoading = () => ({
  type: 'START_LOADING',
});

export const startRefresh = () => ({
  type: 'START_REFRESH',
});

export const resopneError = () => ({
  type: 'RESPONSE_ERROR',
});

export const setVisabilityFilter = filter => ({
  type: 'SHOW_DATA',
  payload: {
    filter,
  },
});

export const fetchUsers = (props, callbackLoad) => {
  return async dispatch => {
    callbackLoad();
    const fetchingUsers = await fetchData(props);
    dispatch(getUsers(fetchingUsers.data, props));
  };
};
